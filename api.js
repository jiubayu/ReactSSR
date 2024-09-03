const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');

app.use(cors());
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'dabao',
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));// 接收表单格式请求体

app.get('/api/users', (req, res) => { 
  setTimeout(() => {
    res.json({
      code: 0,
      data: [
        { id: 1, name: 'zf1' },
        { id: 2, name: 'zf2' },
        { id: 3, name: 'zf3' }
      ]
    });
  }, 10000);
});

app.post('/api/users', (req, res) => {
  const user = req.body;
  req.session.user = user;
  res.json({
    success: true,
    data: user,
  })
});

app.get('/api/logout', (req, res) => {
  req.session.user = null;
  res.json({
    success: true,
  })
});

app.get('/api/validate', (req, res) => {
  const user = req.session.user;
  if (user) {
    res.json({
      success: true,
      data: user
    })
  } else {
    res.json({
      success: false,
      error: "用户未登陆"
    })
  }
});

app.listen(4000, () => console.log('server started on 4000'));