import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import actionCreators from '../store/actionCreators/counter';
import { Helmet } from 'react-helmet';

function Counter(props) {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const { add } = actionCreators;
  return (
    <>
      <Helmet>
        <title>我是计数器的标题</title>
        <meta name="description" content="我是计数器页的描述"></meta>
      </Helmet>
      <p>{number}</p>
      <button onClick={() => dispatch(add())}>add</button>
    </>
  )
}

export default Counter;