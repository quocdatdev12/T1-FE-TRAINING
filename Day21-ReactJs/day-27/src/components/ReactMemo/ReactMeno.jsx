import React, { useState } from 'react'

const Child = React.memo(({value,count}) => {
    console.log('Render Child',count);
    
    return <div>Value: {value} count: {count}</div>
})

export const ReactMeno = () => {
    const [count, setCount] = useState(0);
    console.log('render components Parent');
    
  return (
    <div>
        {count}
        <button onClick={() => setCount(count + 1)} >Tăng</button>
        <Child value={2} />
    </div>
  )
}
