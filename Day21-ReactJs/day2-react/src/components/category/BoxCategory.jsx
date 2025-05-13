import React from 'react'
import { Button } from './Button';

export const BoxCategory = (props) => {
    // console.log(props);
    const {name,img} = props.item;
    const handlDetail = () => {
        alert("Chức năng detail");
    }
    
  return (
    <div className='box_category'>
        <img src={img} alt="" />
        <p>{name}</p>
        <Button name="Detail" classBtn ="btn-detail" handlCick={handlDetail} />
    </div>
  )
}
