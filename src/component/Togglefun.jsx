import React, { useState } from 'react'
import Funcompone from './Funcompone'
import Funcomtwo from './Funcomtwo'
import '../App.css' 

const Togglefun = () => {
    const [funcone , setfuncone] = useState(false);
    const [functwo , setfunctwo] = useState(false);


  return (
    <div>
        <button onClick={()=>setfuncone(!funcone)}>First Functional Component</button>
        <button onClick={()=>setfunctwo(!functwo)}>Second Functional Component</button>


    <div className="container">
        {funcone?<Funcompone/>:null}
        {functwo?<Funcomtwo/>:null}
    </div>
    
    </div>
  )
}

export default Togglefun