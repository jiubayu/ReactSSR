import React from 'react'
import { useDispatch } from 'react-redux'
import actionCreators from '../store/actionCreators/auth';

export default function Logout() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(actionCreators.logout());
  }
  return (
    <div>
      <button onClick={handleLogout}>退出</button>
    </div>
  )
}
