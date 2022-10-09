
import { useState } from "react";
import { NewsroomData } from "../../Services/Utils/Data/data"
import images from "src/Importer/Importer";
import Breadcrumbs from "./breadcrumb";
function Newsroom() {
  const imageData = useState(NewsroomData);
  return (
    <>
      <Breadcrumbs/>
      {/* <p>{src}</p> */}
      {NewsroomData.map(({ src, alt, text, date, subject }) => (
        <div className="p-9">
          <div className="container bg-white ">
          </div>
          <h1 className="p-9 text-5xl font-semibold	">Newsroom</h1>
          <h2 className="p-9 text-4xl font-semibold	">Featured news</h2>
          <div className="container block bg-gray w-9/12 " >
            <img
              className="w-1/2 object-none static object-right ml-auto mr-auto h-auto"
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