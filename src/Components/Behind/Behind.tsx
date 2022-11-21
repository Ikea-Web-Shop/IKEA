import { useState } from "react";
import BehindTopics from "./BehindTopics/BehindTopics";
import BehindIcons from "./BehindIcons/BehindIcons";
import { ScreenCart } from "../ScreenCart/ScreenCart";
import { Cart } from "../Cart/Cart";
import {Cart1 , Cart2 , Cart3} from "./data"
import images from "src/Importer/Importer";
function Behind(){
  const [cart1] = useState(Cart1);
  const [cart2] = useState(Cart2);

  const [cart3] = useState(Cart3);


    return (
        <>
            <div className="container mb-16">
<p className="font-bold mt-12  text-5xl">Behind the scenes</p>
<p className="font-normal mt-12  text-xl">Consider this your backstage pass to IKEA. Meet product developers, designers and engineers as they share stories on innovating and creating products for life at home, while committing to being people and planet positive. Welcome behind the scenes.</p>

        </div>
        <ScreenCart title="" text="IKEA ÅBÄCKEN – An innovative nozzle to help save water at home" src={images['Behind/ScreenCart1.png']} /> 
         
<div className="container">
    <ScreenCart 
    title="Editors pick" 
    text="How the record player by IKEA and Swedish House Mafia came to be" 
    src={images['Behind/ScreenCart2.png']} 
    /></div>
    <div className="flex justify-between w-full  flex-col lg:flex-row md:flex-row container my-12">
            
            {cart1.map((item) => (
            <div><Cart 
            title={item.title} 
            src={item.image}
            /></div>
            
                ))}
            
            </div>

            
<div className="container mb-20">
    <div className="w-5/6 flex justify-center items-center ">
   <div>
   <p className="text-2xl">I want to create things that people will still value in 50 years.</p>
   <p className="text-xl mt-12 mb-8">Friso Wiersma, IKEA designer</p>
   <a className="text-xl text-blue font-bold my-8">Learn about value based design at IKEA</a>
  
   </div>
    </div>
    </div>

<div className="container">
    <ScreenCart 
    title="Products and design" 
    text="Making FRAKTA to the beat of IKEA and Swedish House Mafia" 
    src={images['Behind/ScreenCart3.png']} 
    /></div>


<div className="flex justify-between w-full  flex-col lg:flex-row md:flex-row container my-12">
            
            {cart2.map((item) => (
            <div><Cart 
            title={item.title} 
            src={item.image}
            /></div>
            
                ))}
            
            </div>

          <div className="container mt-12">
<p className="font-bold my-8  text-3xl">Innovation and technology</p>

          <div className="flex justify-between w-full  flex-col lg:flex-row md:flex-row ">
            
            {cart3.map((item) => (
            <div><Cart 
            title={item.title} 
            src={item.image}
            /></div>
            
                ))}
            
            </div>

          </div>

<div className="container">
    <ScreenCart 
    title="Our commitments" 
    text="Maja on moving away from plastic packaging" 
    src={images['Behind/ScreenCart4.png']} 
    /></div>

<BehindIcons />
  
     <BehindTopics />

     
        </>
    )
}

export default Behind;