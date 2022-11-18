import {navbarItems} from "../../Services/Utils/Data/data"
import { useState } from "react";


function Drawer(){
  const [item] = useState(navbarItems);

    return (
        <>

    <div className="py-6 bg-gray h-screen absolute ">
   
    <div className="flex  flex-col ">
  

    {item.map((item) => (
       <div>
                <a href={item.route} className="px-3 hover:underline font-semibold  text-2xl">  {item.name}</a>
<div className="h-1 my-4 w-screen bg-gray-dark  "></div>
       </div>
            
            ))}
           
            </div>
            <a  href="/"className="text-2xl flex-initial w-40 px-3 hover:underline font-semibold  ">Shop at IKEA</a>
            </div>
           

        </>
    )
}
export default Drawer;