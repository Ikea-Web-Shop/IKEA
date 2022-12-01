
import { useState } from "react";
import BehindIcons from "../Behind/BehindIcons/BehindIcons";
import AboutTopics from "./AboutTopics";
import { Cart2 } from "./data"
import { Cart } from "../Cart/Cart";


function About(){
  const [cart2] = useState(Cart2);

    return (
        <>

        <div className="container">
            <p className="font-normal text-5xl my-8">Our vision is to create a better everyday life for the many people.
                 On this you can discover exactly what 
                 this means and find out who we are , what we do 
                 and what we stand for.
                
            </p>
            <a className="text-blue hover:underline font-bold ">Explore the IKEA vision and business idea</a>
        <div className="flex justify-between w-full  flex-col lg:flex-row  mt-10">
            
            {cart2.map((item) => (
            <div><Cart 
            title={item.title} 
            src={item.image}
            /></div>
            
                ))}
            
            </div>
        </div>
        <BehindIcons />
         <div className="container mb-40" >
         <AboutTopics />
         </div>
        
        </>
    )
}

export default About;