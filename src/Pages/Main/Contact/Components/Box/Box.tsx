
import { useState } from "react";
interface info {
   
    quastion : string;
    answer : string;
    link : string;


  
    
  }
function Box(props:info){
  const [showBox,setShowBox]=useState(false)

    return(
        <>
        <div className="hover:bg-gray ">
<div className="h-1 w-full bg-black text-black "></div>

<p className="py-4 lg:px-10 px-8 text-xl" onClick={()=>setShowBox(true)}>{props.quastion}</p>
{showBox ?
     <div className="lg:px-10 px-8 bg-gray">
<p className="py-4 text-xl" >{props.answer}</p>
<a className="py-4 font-bold hover:underline text-xl text-blue">{props.link}</a>
<p className="font-bold text-right py-2">Copy link</p>
     </div>
     : <></>
   }
        </div>
       
        </>
    )
}

export default Box;