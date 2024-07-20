import React, { useEffect, useState } from 'react'

const Usestatehook =()=>{
    const[count , setcount] = useState(0);
    const[countnew , setcountnew] = useState(0);
    // console.log(count);
    useEffect(()=>{
        alert("increased by 1");
    },[count])
    const increment= ()=>{
        setcountnew(countnew+1);
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        <h1>Count:{countnew}</h1>
        <button onClick={increment}>Increment1</button>
    </div>
  )
}

export default Usestatehook;