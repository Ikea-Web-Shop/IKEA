
import { Link } from "react-router-dom"
import  images from "../../../Importer/Importer"
function Museum(){
    return (
        <>
      <header className="w-screen p-3 bg-white shadow fixed">
      <div className="">
    <img src={images['Navbar/logo.png']} alt="IKEA logo" width="60" height="8"  className="w-24 -mt-1"/>
  <p className="font-normal   text-xl">Museum</p>
           
            </div>
</header>

<div className="flex pb-4">
    <div>
      <img src={images['Museum/1.jpg']} alt="Museum"   className=""/>
 
 </div>
 <div>
      <img src={images['Museum/2.jpg']} alt="Museum"   className=""/>
 
 </div>
            </div>


            <div className="bg-black pt-16 pb-4 px-10">
            <a className="text-gray-dark "><Link to="/">Home</Link></a>
            <p className="font-bold mt-12  text-3xl text-white">Looking for something?</p>
            <p className="font-bold mt-12   text-white">IKEA Museum Älmhult</p>
            <div className="flex justify-between w-2/6 mt-4">
            <a className="font-bold   hover:underline text-white">Visit</a>
            <a className="font-bold   hover:underline text-white">The museum</a>
            </div>
            <div className="flex justify-between w-2/6 mt-4 mb-4">
            <a className="font-bold   hover:underline text-white">What’s on</a>
            <a className="font-bold  hover:underline  text-white">Press room</a>
            </div>
            <a className="font-bold  hover:underline  text-white">Exhibitions</a>
            <div className="flex justify-between  mt-4 mb-4 text-gray-dark">
            <p className="    ">© Inter IKEA Systems B.V. 2022</p>
           <div className="flex justify-between">
            <a className="text-gray-dark pr-16"><Link to="/">Terms of Use</Link></a>
            <a className="text-gray-dark "><Link to="/contact">Contact</Link></a>

           </div>
            </div>



            </div>

        </>
    )
}

export default Museum;