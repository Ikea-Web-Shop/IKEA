import { useState } from "react";
import BehindTopics from "./Components/BehindTopics";
import BehindIcons from "./Components/BehindIcons";
import { ScreenCart } from "../ScreenCart/ScreenCart";
import { Cart } from "../Cart/Cart";
import {Cart1 , Cart2 , Cart3 , ArrowCartData} from "./data"
import images from "src/Importer/Importer";
import { ArrowCart } from "../ArrowCart/ArrowCart";
function Behind(){
  const [cart1] = useState(Cart1);
  const [cart2] = useState(Cart2);
const [arrow]=useState(ArrowCartData)
  const [cart3] = useState(Cart3);


    return (
        <>
            <div className="container mb-16">
<p className="font-bold mt-12  text-5xl">Behind the scenes</p>
<p className="font-normal mt-12  text-xl">Consider this your backstage pass to IKEA. Meet product developers, designers and engineers as they share stories on innovating and creating products for life at home, while committing to being people and planet positive. Welcome behind the scenes.</p>

        </div>
        <ScreenCart title="" data="" subject="Innovation" text="IKEA ÅBÄCKEN – An innovative nozzle to help save water at home" src={images['Behind/ScreenCart1.png']} /> 
         
<div className="container">
<p className="font-bold my-8  text-4xl">What are you curious about?</p>

<div className="grid  lg:grid-cols-3 grid-cols-1 gap-5 lg:grid-rows-1 grid-rows-3  my-10 ">
            
            {arrow.map((item) => (
            <div><ArrowCart 
            title={item.title} 
            src={item.image}
            /></div>
            
                ))}
            
            </div>
    <ScreenCart 
    data="09 June 2022" subject="Collaborations"
    title="Editors pick" 
    text="How the record player by IKEA and Swedish House Mafia came to be" 
    src={images['Behind/ScreenCart2.png']} 
    />
     <div className="grid  lg:grid-cols-2 grid-cols-1 gap-5 lg:grid-rows-1 grid-rows-2  mt-10">
            
            {cart1.map((item) => (
            <div><Cart 
            title={item.title} 
            src={item.image}
            /></div>
            
                ))}
            
            </div>

    </div>
   
            
<div className="container my-20 flex justify-center items-center ">
    <div className="w-5/6 ">
   <div>
   <p className="text-4xl">I want to create things that people will still value in 50 years.</p>
   <p className="text-xl mt-12 mb-8">Friso Wiersma, IKEA designer</p>
   <a className="text-xl text-blue font-bold my-8">Learn about value based design at IKEA</a>
  
   </div>
    </div>
    </div>

<div className="container ">
    <ScreenCart 
     data="26 May 2022" subject="Collaborations"
    title="Products and design" 
    text="Making FRAKTA to the beat of IKEA and Swedish House Mafia" 
    src={images['Behind/ScreenCart3.png']} 
    />
    
<div className="grid  lg:grid-cols-2 grid-cols-1 gap-5 lg:grid-rows-1 grid-rows-2  my-10">
            
            {cart2.map((item) => (
            <div><Cart 
            title={item.title} 
            src={item.image}
            /></div>
            
                ))}
            
            </div>
            <a className="text-blue hover:underline font-bold ">Learn about our products and design process</a>

    </div>



          <div className="container mt-12">
<p className="font-bold my-8  text-4xl">Innovation and technology</p>

          <div className="grid  lg:grid-cols-3 grid-cols-1 gap-5 lg:grid-rows-1 grid-rows-3  my-10 ">
            
            {cart3.map((item) => (
            <div><Cart 
            title={item.title} 
            src={item.image}
            /></div>
            
                ))}
            
            </div>
            <a className="text-blue hover:underline font-bold ">See how we are innovating and developing technology</a>

          </div>

          <p className="font-bold my-8  text-4xl container">Our commitments</p>

    <ScreenCart 
     data="23 November 2021" subject="Materials and sourcing"

    title="" 
    text="Maja on moving away from plastic packaging" 
    src={images['Behind/ScreenCart4.png']} 
    />

<BehindIcons />
  
     <BehindTopics />

     
        </>
    )
}

export default Behind;