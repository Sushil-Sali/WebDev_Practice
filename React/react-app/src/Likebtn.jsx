import { useState } from "react";
export default function Likebtn() {
  let [islike, setlike] = useState(false);
    let [count, setCount] = useState(0);
  function like() {
    setlike(!islike);
    setCount(count+1)
  }

  return (
    <div>
      <h1 onClick={like}>
     
        {!islike ? (
          <i className="fa-regular fa-heart"></i>
        ) : (
          <i className="fa-solid fa-heart" style={{color:"red"}}></i>
        )}
           <p>{count}</p>
      </h1>
    </div>
  );
}
