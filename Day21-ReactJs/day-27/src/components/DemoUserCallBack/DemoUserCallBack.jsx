import React, { useCallback, useState } from 'react'

const Mybutton = React.memo(({onClick,label}) => {
  console.log(`Render Button ${label} `);
  
  return <button onClick={onClick} > {label} </button>
})

export const DemoUserCallBack = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);
  const handleIncrement = useCallback( () => {
    setCount( (oldata) => oldata + 1 );
  },[])

  const handleOther = useCallback(() => {
    setOther( (oldata) => oldata + 1);
  },[])
  return (
    <div>
      <p>Count: {count}</p>
      <p>Other: {other} </p>
      <Mybutton onClick={handleIncrement} label="Tăng" />
      <Mybutton onClick={handleOther} label="Other" />
    </div>
  )
}
