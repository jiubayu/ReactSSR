import React from "react";
import { hydrateRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { HistoryRouter as Router } from "redux-first-history/rr6";
import StyleContext from "isomorphic-style-loader-react18/StyleContext";
import { getClientStore } from "../store";
import App from "../app";

const root = document.getElementById('root');
const { store, history } = getClientStore();

const insertCss = (...styles) => {
  const removeCSS = styles.map(style => style._insertCss());
  return () => removeCSS.forEach((dispose) => dispose());
}

// ReactDOM.render 其实是由两个作用：
// ! 一个是生成HTML元素，一个是绑定事件实现动态功能
// 因为此时HTML元素已经由服务端生成并返回了，所以只需奥绑定事件就可以了 
// hydrateRoot，即水合，基于现有的HTML结构，绑定事件
hydrateRoot(root,
  <Router history={history}>
    <StyleContext.Provider value={{ insertCss }}>
      <App store={store} />
    </StyleContext.Provider>
  </Router>
);