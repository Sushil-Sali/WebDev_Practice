import { useState } from "react";
import { genNumbers,sum } from "./random";
import './Lottery.css'
import Ticket from "./Ticket";

export default function Lottery({n=3,winingSum=15}){
    let [ticket,setTicket]=useState(genNumbers(n))
    let isWinner=sum(ticket)===winingSum
    let buyTicket=()=>{
        setTicket(genNumbers(n))
    }
    return(
        <div>    
              <h1>Lottery Game !</h1>  
            <div className="ticket">
            <Ticket ticket={ticket}/>
        </div>
        <br />
        <button onClick={buyTicket}>BuY Ticket</button>
        <h3>{isWinner&&"Congrats You are winner !"}</h3>
        </div>

    )
}