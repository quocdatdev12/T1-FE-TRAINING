import React from 'react'

export const MyButton = (props) => {
    // console.log(props);
    const {children} = props;
  return (
    <button {...props} >{children}</button>
  )
}
