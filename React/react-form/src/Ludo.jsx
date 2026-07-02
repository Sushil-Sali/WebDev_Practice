import { useState } from "react";

export default function Ludo() {
  let [moves, setMoves] = useState({
    blue: 0,
    red: 0,
    green: 0,
    yellow: 0,
  });
  let increaseBlue=()=>{
    // setMoves({...moves,blue:moves.blue+1})
    setMoves((prevMoves)=>{
        return {
      ...prevMoves,
      blue: prevMoves.blue + 1
    };
    })
  }
    let increaseRed=()=>{
    // setMoves({...moves,blue:moves.blue+1})
    setMoves((prevMoves)=>{
        return {
      ...prevMoves,
      red: prevMoves.red + 1
    };
    })
  }
    let increaseGreen=()=>{
    // setMoves({...moves,blue:moves.blue+1})
    setMoves((prevMoves)=>{
        return {
      ...prevMoves,
      green: prevMoves.green + 1
    };
    })
  }
    let increaseYellow=()=>{
    // setMoves({...moves,blue:moves.blue+1})
    setMoves((prevMoves)=>{
        return {
      ...prevMoves,
      yellow: prevMoves.yellow + 1
    };
    })
  }
  return (
    <div>
      <h1>Give a Break !</h1>
      <div>
        <p>Blue : {moves.blue}</p>
        <button onClick={increaseBlue} style={{backgroundColor:"blue"}}>+1</button>
        <p>Red : {moves.red}</p>
        <button onClick={increaseRed} style={{backgroundColor:"red"}}>+1</button>
        <p>Green : {moves.green}</p>
        <button onClick={increaseGreen}style={{backgroundColor:"green"}}>+1</button>
        <p>Yellow : {moves.yellow}</p>
        <button style={{backgroundColor:"yellow", color:"black"}} onClick={increaseYellow}>+1</button>
      </div>
    </div>
  );
}
