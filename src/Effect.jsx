import { useEffect, useState } from "react"
import NestedEffects from "./EffectNested";

export default function Effect() {
    const[users, setUsers]= useState([]);
    useEffect(()=>{    
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()
            .then(data => setUsers(data)))} 

        , [])

    return (
        <div style={{border:"3px solid tomato",margin:"20px", borderRadius:"30px"}}>
<h3>Total Users: {users.length}</h3>
<h4>Nested Component below</h4>
{
    users.map(user=><NestedEffects user={user} key={user.id}></NestedEffects>)
}
        </div>
    )
}