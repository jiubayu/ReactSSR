import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import actionCreators from '../store/actionCreators/user';

export default function UserAdd() {
  const nameRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;

    dispatch(actionCreators.addUser({id:Date.now(), name}));
    // 跳转到用户列表
    navigate('/user/list');
  }
  return (
    <form onSubmit={handleSubmit}>
      用户名<input ref={nameRef} type='text'/>
      <button type='submit'>添加</button>
    </form>
  )
}
