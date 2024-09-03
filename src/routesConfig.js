import React from 'react';
import Home from './routes/Home.js';
import Counter from './routes/Counter.js';
import User from './routes/User.js';
import UserAdd from './routes/UserAdd.js';
import UserList from './routes/UserList.js';
import Login from './routes/Login.js';
import Logout from './routes/Logout.js';
import Profile from './routes/Profile.js';
import NotFound from './routes/NotFound.js';

export default [
  {
    path: '/',
    index: true,
    element: <Home />,
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/user',
    element: <User />,
    children: [
      {
        path: '/user/add',
        element: <UserAdd />,
        index: true,
      }, {
        path: '/user/list',
        element: <UserList />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/logout',
    element: <Logout />
  },
  {
    path: '*',
    element: <NotFound />
  },
]