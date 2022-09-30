
import { useState } from "react";
import {NewsroomData } from "../../Services/Utils/Data/data"
import images from "src/Importer/Importer";
function Newsroom(){
    const imageData = useState(NewsroomData);
    return (
        <>
         
        {/* <p>{src}</p> */}
            {NewsroomData.map(({  src, alt, text,date,subject }) => (
           <div className="p-9">
             <div className="container bg-white ">
              </div>
              <h1 className="p-9 text-5xl font-semibold	">Newsroom</h1>
              <h2 className="p-9 text-4xl font-semibold	">Featured news</h2>
              <div className="container flex bg-gray w-9/12 " >
              <img  
              className="w-1/2 object-none object-right h-auto"
              src={images['Newsroom/IKEA_OBEGRANSAD_PH186271-2d265f90-card-variation-img.png']} alt="" />
             <p>{subject} {date}</p>
             <a href="#"></a>
              </div>
        
                <img
            src={src} alt={alt}
            />
            <p>{text}</p>
           
            {/* <p>{text}</p> */}
           </div>
          ))}
         

        </>
    )
}

export default Newsroom;