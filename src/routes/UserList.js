import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '../store/actionCreators/user';

export default function UserList() {
  const list = useSelector((state) => state.user.list);
  const dispatch = useDispatch();
  useEffect(() => {
    // 只会在客户端执行，不会在服务端执行
    if (list.length === 0) {
      // api接口提供用户列表服务，将数据放置到仓库中
      dispatch(actionCreators.getUserList());
    }
  }, [])
  return (
    <ul>
      {
        list.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))
      }
    </ul>
  )
}
// 当前的路由组件在服务端获取数据的方法
UserList.loadData = (store) => {
  // 等待此promise完成之后，仓库中就有数据了，然后可以用仓库store中的数据渲染带有真实数据的组件HTML了，然后发送给客户端
  // ! 难点
  // 1 loadData如何执行，什么时候执行，如何统一执行
  //   服务器端没有componentWillMount，useEffect这些声明周期，也不能操作DOM，所以需要自己实现一套数据的加载逻辑
  // 2 loadData返回的是什么： 是一个promise，也就是 axios.get('/api/users').then()
  return store.dispatch(actionCreators.getUserList());
}

/**
 * redux:dispatch
 * function dispatch(action) {
 *  return action;
 * }
 */

/**
 * redux-thunk
 */
// const middleware: ThunkMiddleware<State, BasicAction, ExtraThunkArg> =
//   ({ dispatch, getState }) =>
//     next =>
//       action => {
//         if (typeof action === 'function') {
//           return action(dispatch, getState, extraArgument)
//         }
//         return next(action)
//       }