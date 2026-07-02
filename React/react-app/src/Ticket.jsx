import Ticketnum from "./Ticketnum";
export default function Ticket(ticket){
  <div className="ticket">  
  {ticket.map((num,idx)=>{
    <Ticketnum num={num}key={idx}/>
  })}
  </div>
} 