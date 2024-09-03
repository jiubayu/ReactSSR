import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import actionCreators from '../store/actionCreators/auth';

export default function Header() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(actionCreators.validate());
  // }, []);
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/counter'>Counter</Link></li>
      <li><Link to='/user'>User</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/logout'>Logout</Link></li>
      <li><Link to='/profile'>Profile</Link></li>
    </ul>
  )
}
