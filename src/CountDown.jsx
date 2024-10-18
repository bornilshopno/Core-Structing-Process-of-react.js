import { useState } from "react"

export default function CountDown(){

    const [count,setCount]=useState(0);
    const handleCount=()=>{
        let newCount=count+1;
        setCount(newCount);
    }

    const handleCount2=()=>{
        let newCount=count-1;
        setCount(newCount);
    }
    
    return(
       
        <div style={{border:"3px solid tomato",margin:"20px", borderRadius:"30px"}}>
            <h3>Click Counter:{count}</h3>
            <button onClick={handleCount} style={{border:"3px solid green",margin:"20px"}}>Adding</button>
            <button onClick={handleCount2}style={{border:"3px solid blue",margin:"20px"}}>Reducing</button>

            </div>
    )
}