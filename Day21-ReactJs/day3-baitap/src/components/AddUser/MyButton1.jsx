import React from 'react'

export const MyButton1 = (props) => {
    // console.log(props);
    const {children} = props;
  return (
    <button {...props} >{children}</button>
  )
}
