import React from 'react'
import { decrement, increment } from '../reudx-toolkit/features/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const CounterToolkit = () => {
     const dispath = useDispatch();
     const count = useSelector((state) => state.counter.count);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispath(increment()) } >Tăng</button>
        <button onClick={() => dispath(decrement()) } >Giảm</button>
    </div>
  )
}
