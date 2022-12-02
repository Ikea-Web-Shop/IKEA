
import { useState } from "react";

import images from "src/Importer/Importer";

import { ScreenCart } from "../ScreenCart/ScreenCart";
import {cart1 , cart2 ,ArrowCartData} from "./data"
import { NewsroomArrowCart } from "./NewsroomArrowCart/NewsroomArrowCart";
import { NewsroomCart } from "./NewsroomCart/NewsroomCart";
function Newsroom(){
 
  const [cartA] = useState(cart1);
  const [cartB] = useState(cart2);
  const [arrow]=useState(ArrowCartData)


    return (
        <>
         <ScreenCart 
    data="23 August 2022" subject="Healthy and sustainable living"
    title="Featured news"
    text="IKEA introduces ÅBÄCKEN water nozzle to enable extreme water saving at home" 
    src={images['Behind/ScreenCart2.png']} 
    />


<div className="grid  lg:grid-cols-3 grid-cols-1 gap-5 lg:grid-rows-1 grid-rows-3  mt-10">
            
            {cartA.map((item) => (
            <div><NewsroomCart 
            data={item.data} 
            subject={item.subject}
            title={item.title} 
            text={item.text}
            src={item.src}
            /></div>
            
                ))}
            
            </div>

            <p className="font-bold my-12  text-4xl">Latest news</p>

            <div className="grid  lg:grid-cols-3 grid-cols-1 gap-5 lg:grid-rows-1 grid-rows-3  mt-10">
            
            {cartB.map((item) => (
            <div><NewsroomCart 
            data={item.data} 
            subject={item.subject}
            title={item.title} 
            text={item.text}
            src={item.src}
            /></div>
            
                ))}
            
            </div>
{/* ************************************* */}

<div className="flex justify-center items-center my-8">
<button className="bg-blue text-white font-bold flex justify-center items-center px-6 py-3 rounded-full">
Show more
</button>
</div>

<div className="grid  lg:grid-cols-3 grid-cols-1 gap-5 lg:grid-rows-1 grid-rows-3  my-10 ">
            
            {arrow.map((item) => (
            <div><NewsroomArrowCart 
            title={item.title} 
            src={item.image}
            /></div>
            
                ))}
            
            </div>
{/* ******************************************* */}





         
             

        </>
    )
}

export default Newsroom;