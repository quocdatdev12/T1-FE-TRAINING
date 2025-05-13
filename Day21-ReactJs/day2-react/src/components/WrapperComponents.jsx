import React from 'react'

export const WrapperComponents = (props) => {
    // console.log(props);
    const {children,classWrapper} = props;
    
  return (
    <div className={classWrapper}>
        {children}
    </div>
  )
}
// children: chỉ dùng cho thẻ mở đóng
//  props.children là một thuộc tính đặc biệt chứa nội dung hoặc các thành 
// phần con nằm giữa thẻ mở và thẻ đóng của thành phần.

