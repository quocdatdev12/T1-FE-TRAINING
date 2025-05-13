import React from 'react'

export const Button = (props) => {
    // console.log(props);
    const {classBtn,name,handlCick,children} = props;
    
  return (
    <div>
        <button className={classBtn} onClick={handlCick} >{name}</button>
    </div>
  )
}
