import { Link } from "react-router-dom";
import images from "../../../Importer/Importer";
function NotFound(){
    return (
        <>
      <div className=" flex justify-center mt-12 pb-20">
  <div className="w-3/6 flex flex-col justify-between ">
<img src={images['NotFound/error.jpeg']} className="rounded-lg"alt="error 404" loading="lazy"/>

  <h1 className="font-bold mt-12 text-center text-2xl">
   OOPS! PAGE NOT FOUND.
  </h1>
  <p className="mt-12 font-semibold">
   
  </p>
  <button className="bg-yellow   h-8 mt-12 hover:opacity-75 rounded px-12 font-semibold py-6 flex justify-center items-center">
  <Link to="/"> Back to Home</Link>
  </button>
  </div>
</div>
        </>
    )
}

export default NotFound;