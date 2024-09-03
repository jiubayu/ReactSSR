import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { matchRoutes } from 'react-router-dom';
import StyleContext  from 'isomorphic-style-loader-react18/StyleContext'
import { getServerStore } from '../store';
import routesConfig from '../routesConfig';
import App from '../App';
import { Helmet } from 'react-helmet';

const express = require('express');
const expressHttpProxy = require('express-http-proxy');
const app = express();

// 将public作为静态资源的存储目录
// localhost:3000/public
app.use(express.static('public'));
app.use('/api', expressHttpProxy('http://localhost:4000', {
  proxyReqPathResolver(req) {
    return `/api${req.url}`;
  }
}))

app.get('*', (req, res) => {
  const matchRouteList = matchRoutes(routesConfig, { pathname: req.url });
  if (matchRouteList) {
    const { store, history } = getServerStore(req);
    const loadDataPromises = matchRouteList.map((match) => {
      if (match.route.element.type.loadData) {
        // 默认情况下，我们可能有很多组件都需要调用loadData，这时如果有一个失败了，整个数组都失败了，这个其实是不合理的
        // then(data => data, error => error)是根据promise的then返回的数据都作为resolve(data)来将失败的promise作为成功返回
        return match.route.element.type.loadData(store).then(data => data, error => error);
      }
    })
      // 路由匹配中是没有App的，所以需要加上App的loadData方法
      .concat(App.loadData && App.loadData(store))
    .filter(Boolean);
    
    Promise.all(loadDataPromises).then((values) => {
      if (req.url === '/profile' && !store.getState().auth.user) {
        return res.redirect('/login');
      } else if (req.url.slice(-1) === '*') {
        res.status = 404; 
      }

      const css = new Set();
      const insertCss = (...styles) => {
        styles.forEach(style => {
          css.add(style._getCss());
        })
      }
      let styles = '';
      if (css.size > 0) {
        styles = `<style> ${[...css].join('')}</style>`;
      }

      const helmet = Helmet.renderStatic();

      const html = renderToString(
        <StaticRouter location={req.url}>
          <StyleContext.Provider value={{ insertCss }}>
            <App store={store} />
          </StyleContext.Provider>
        </StaticRouter>);
      console.log("🚀 ~ app.get ~ html:", html);
      // 返回html
      // todo 使用nunjucks模版来完成
      res.send(`
    <html>
       <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${styles}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            var context = {state: ${JSON.stringify(store.getState())}}
          </script>
          <script src="/client.js"></script>
        </body>
    </html>
    `)
    })
  } else {
    // 没有匹配的路由，返回404
    res.sendStatus(404);
  }
})

app.listen(3000, () => console.log('server listen on 3000'));
