import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/features/couter';

export const Counter = () => {
    const dispath = useDispatch();
    const count = useSelector((state) => state.couter.count);
    const hannldeInrement = () => {
        dispath(increment()); 
    }
    // console.log(count,"count");

    const handleDecrement = () => {
        dispath(decrement());
    }
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={hannldeInrement} >Tăng</button>
        <button onClick={handleDecrement} >Giảm</button>
    </div>
  )
}
// useSelector giúp chúng ta truy xuất dữ liệu ở store ra ngoài
