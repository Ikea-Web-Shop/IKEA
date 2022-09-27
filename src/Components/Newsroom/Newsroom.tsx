
import { useState } from "react";
import {NewsroomData } from "../../Services/Utils/Data/data"
import images from "src/Importer/Importer";
function Newsroom(){
    const imageData=useState(NewsroomData);
    return (
        <>
        {/* <p>{src}</p> */}
            {NewsroomData.map(({  src, alt, text,date,subject }) => (
           <div className="p-9">
                <img
            src={src} alt={alt}
            />
            <p>{text}</p>
            <p>{subject} {date}</p>
            {/* <p>{text}</p> */}
           </div>
          ))}
          <img src={images['Newsroom/ikea.png']} alt="" />

        </>
    )
}

export default Newsroom;