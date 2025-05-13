import React, { useEffect, useState } from 'react'

export const ClearUpFun = () => {
  const [count,setCount] = useState(0);
    useEffect(() => {
      const intervalId = setInterval(() => {
        console.log(count);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      }

        // return () => {

        // } //hàm clearUpFun
        // nên sử dụng khi mà thao tác đk những sự kiện even bởi vì ngoài phạm vi components
    },[count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)} >Count</button>
    </div>
  )
}
