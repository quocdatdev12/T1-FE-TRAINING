import React, { useEffect, useState } from 'react'

export const EventListenerDemo = () => {
    const [innerWidth,setInnerWidth] = useState(500);
    // useEffect(() => {
    //     const scrollHandle = () => {
    //         console.log("Scrolling");  
    //     }
    //     document.addEventListener("scroll",scrollHandle)
    //     return () => {
    //         document.removeEventListener("scroll",scrollHandle);
    //     }
    // },[])
    useEffect(() => {
        const handlResize = () => {
            console.log("xxxxxxxxxxx",window.innerWidth);
            setInnerWidth(window.innerWidth);
        }
        window.addEventListener("resize",handlResize)
        return () => {
            window.removeEventListener("resize",handlResize)
        }
    },[])
  return (
    <>
    <div>EventListenerDemo</div>
    <h1 style={{color: innerWidth < 500 ? "red" : ""}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi ratione enim quaerat iusto fugiat deleniti cupiditate atque? Voluptas sed repellat voluptatem? Nihil laboriosam amet pariatur cupiditate similique, fuga explicabo.</h1>
    </>
  )
}
