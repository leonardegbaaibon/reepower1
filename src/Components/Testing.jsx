import React, { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
// import {const [state, dispatch] = useReducer(reducer, initialState, init)}

const initialState = {count: 0,text: true};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return{count: state.count + 1};
    case 'decrement':
      return (state.count == 1 ? {count:state.count - 1}:{count: state.count + 1})
      case 'increment1':
        return {count: state.count + 1};
      case 'decrement1':
        return  {count:state.count - 1};
    default:
      throw new Error();
  }
}
function Testing() {  


  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() =>{state.count >= 0  ?
         dispatch({type: 'increment'}):dispatch({type: 'decrement'})
      }
        }>+</button>
      <button onClick={() =>{state.count + 1 ?
         dispatch({type: 'increment1'}):dispatch({type: 'decrement1'});
      }
        }>+</button>
    </>
    
  );

      // const [slip,betSlip] = useState(0)
      // const [add,addNum] = useState(0)
    // const [count, setCount] = useState(0);


    // useEffect(() => {
    //   betSlip( slip - 1);
    // }, []); // <- add the count variable here
      
    // return (
    //   <>
    //     <p>Count: <p className="">{count > 0 ? count: ""}</p> <p className="calculate"> </p> </p>
    //   <button onClick={() =>count === 0 ? setCount(count + 1): setCount(count - 1) }>+</button>
    //   <button onClick={() =>count === 0 ? setCount(count + 1): setCount(count - 1) }>+</button>
    //   <button onClick={() =>count === 0 ? setCount(2 + 1): setCount(2) }>+</button>
    //   <button onClick={() =>count === 0 ? setCount(3 + 1): setCount(3) }>+</button>
      

    //   </>
    // );

    // return(
    //   <div>
    //     <p>{add}</p>
    //     <button onClick={() => add === 0 ? addNum(slip + 1): addNum(betSlip) }>+</button>

    //   </div>
    // )
  }


export default Testing;