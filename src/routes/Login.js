import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import actionCreators from '../store/actionCreators/auth';

export default function Login() {
  const nameRef = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    let name = nameRef.current.value;
    const user = { name };
    dispatch(actionCreators.login(user));
  }
  return (
    <form onSubmit={handleSubmit}>
      用户名：<input type='text' ref={nameRef} />
      <button type='submit'>提交</button>
    </form>
  )
}
