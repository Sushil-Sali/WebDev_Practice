import { useState } from "react";
export default function Counter() {
  // let count=0;
  // function isCount(){
  //     count+=1;
  //     console.log(count)
  // }

  let [count, setCount] = useState(0);// Initilize only one time 
  console.log("rende");
  let inCount = () => {
        // setCount((currValue)=>{
        //     return currValue+1
        // })
        //     setCount((currValue)=>{
        //     return currValue+1
        // })
    // setCount(count + 1);
      setCount(20);
    console.log(count);
  };
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={inCount}>Increment</button>
    </div>
  );
}
