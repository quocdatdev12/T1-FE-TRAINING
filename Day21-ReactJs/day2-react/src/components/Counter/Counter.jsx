import React, { useState } from 'react'
import { Button } from '../category/Button'
import { ButtonNew } from '../ButtonNew'

export const Counter = () => {
    const [count,setCount] = useState(0);
    const hanldIncrement = () => {
        setCount(count + 1);
    }

    const hanldDecrement = () => {
        setCount(count - 1);
    }
    const hanldReset = () => {
        setCount(0);
    }
  return (
    <div>
        <h1>Counter</h1>
        <h2> {count} </h2>
        <ButtonNew onClick={hanldIncrement} >Increment</ButtonNew>
        <ButtonNew disabled={!count} onClick={hanldDecrement} >Decrement</ButtonNew>
        <ButtonNew disabled={!count} onClick={hanldReset} >Reset</ButtonNew>
    </div>
  )
}
