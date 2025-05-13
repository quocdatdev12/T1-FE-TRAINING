import React from 'react'

export const ButtonNew = (props) => {
    // console.log(props,'props');
    const {children} = props;
    
  return (
        <button {...props}  >{children}</button>
  )
}
