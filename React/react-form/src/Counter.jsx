import { useEffect, useState } from "react"

export default function Counter(){
    let [countx,setCountx]=useState(0)
    let [county,setCounty]=useState(0)
    let incx=()=>{
        setCountx((currVal)=>(currVal+1))
    }
       let incy=()=>{
        setCounty((currVal)=>(currVal+1))
    }
    useEffect(()=>{
        console.log("just TP")
    },[])
    return(
        <div>
            <h1>countX {countx}</h1>
            <button onClick={incx}>+1</button>
                 <h1>countY {county}</h1>
            <button onClick={incy}>+1</button>
        </div>
    )
}