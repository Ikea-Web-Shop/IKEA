
import { useState } from "react";
import {NewsroomData } from "../../Services/Utils/Data/data"
import images from "src/Importer/Importer";
import NewsroomTopics from "./NewsroomTopics/NewsroomTopics";
function Newsroom(){
    const imageData=useState(NewsroomData);
    return (
        <>
          <NewsroomTopics />
             

        </>
    )
}

export default Newsroom;