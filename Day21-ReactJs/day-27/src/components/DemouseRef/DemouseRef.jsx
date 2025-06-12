import React, { useEffect, useRef, useState } from 'react'

export const DemouseRef = () => {
    const [count,setCount] = useState(0);
    const inputRef = useRef("");
    const tabRef = useRef(null);
    const countRef = useRef(0);

    const handleSubmit = () => {
        console.log(inputRef.current.value);
    }
    // console.log(tabRef,"tabRef");
    useEffect(() => {
        if(tabRef) {
            const listTag_a = tabRef.current.querySelectorAll("a");
            console.log(listTag_a,"listTag_a");
            listTag_a.forEach((item) => {
                item.setAttribute("target","blank");
            })
            
        }
    },[]);

    const handlecrement = () => {
        setCount( count + 1);
    }

    const handlecrementCountRef = () => {
        console.log(countRef.current);
        countRef.current++;
        
    }
    console.log("render compoment");
    
    
  return (
    <div>
        <ul ref={tabRef} >
            <li><a href="https://www.google.com.vn/?hl=vi">Bài viết 1</a></li>
            <li><a href="https://www.google.com.vn/?hl=vi">Bài viết 2</a></li>
            <li><a href="https://www.google.com.vn/?hl=vi">Bài viết 3</a></li>
            <li><a href="https://www.google.com.vn/?hl=vi">Bài viết 4</a></li>
        </ul>
        <input ref={inputRef} type="userName" />
        <button onClick={handleSubmit} >get value</button>
        <br />
        {count}
        <button onClick={handlecrement} >Tăng</button>
        <br />
        <button onClick={handlecrementCountRef} >Tăng CountRef</button>
    </div> 
  )
}
// được sử dụng khi thao tác với dom  ( trỏ vào 1 cái dom thẻ nào đó)