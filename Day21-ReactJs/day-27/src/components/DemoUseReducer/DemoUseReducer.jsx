// import React, { useState } from 'react'

// export const DemoUseReducer = () => {
//     const [count,SetCount] = useState(0);
//   return (

//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={ () => SetCount( count + 1) }>Decrement</button>
//         <button onClick={ () => SetCount( count - 1) }>Increment</button>
//     </div>
//   )
// }

import React, { useReducer, useState } from "react";
import reducerCounter, {
  DECREMENT,
  INCREMENT,
} from "../../reduders/CountterReducer";

const initiaValue = {
  count: 0,
};

export const DemoUseReducer = () => {
  const [state, dispatch] = useReducer(reducerCounter, initiaValue);


  const handleDecrement = () => {
    dispatch({
      type: DECREMENT,
      payload: state.count + 1,
    });
  };

  const handlIncrement = () => {
    dispatch({
      type: INCREMENT,
      payload: state.count - 1,
    });
  };
  
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handlIncrement}>Increment</button>
    </div>
  );
};
