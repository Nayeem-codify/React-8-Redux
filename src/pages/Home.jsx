import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../slices/CounterSlice'

const Home = () => {
   let [count, setCount] = useState("0");
     const dispatch = useDispatch();
       const reduxvalue = useSelector((state) => state.countvalue);
       console.log(reduxvalue);

   let handleIncrement = () => {
     count++;
     setCount(count);
     dispatch(increment(count));
   };
    let handleDecrement = () => {
     count--;
     setCount(count);
   };

  return (
    <div>
      <h1>This is my Home Page</h1>
    

    <button onClick={handleIncrement}>Increment</button>
    <h1>{count}</h1>
    <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Home
