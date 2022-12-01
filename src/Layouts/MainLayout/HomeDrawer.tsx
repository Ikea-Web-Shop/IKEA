import { Link } from "react-router-dom"
import  images from "../../Importer/Importer"
import { useState } from "react";
import "./style.css"

function HomeDrawer(){
  const [showModal,setShowModal]=useState(false)

    return(
   <>
     
          <div className="relative">
            {!showModal ? (
              <button
                className="Homeclose"
                type="button"
                onClick={() => setShowModal(true)}
              >
                <svg
                  className="h-8 w-8 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <line x1="3" y1="12" x2="21" y2="12" />{" "}
                  <line x1="3" y1="6" x2="21" y2="6" />{" "}
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            ) : (
              <></>
            )}
            {showModal ? (
              <button
                className="Homeclose z-50"
                type="button"
                onClick={() => setShowModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <></>
            )}
          </div>
     
          {showModal ?
<div className="Homemodal">
<div className="p-5 bg-white shadow overflow-x-hidden absolute lg:w-2/6 w-full  h-full">
   
   <img src={images['Navbar/logo2.png']} alt="IKEA logo" width="60" height="150" loading="lazy" className="flex-none px-2  w-40 mt-1"/>
       <div className=" w-full flex flex-col text-black mt-6">
       
       <div className="flex   justify-center border-b-1 rounded-t-lg border-borderColor items-center bg-yellow text-2xl font-extrabold  h-36">Go shopping</div>
       
       
       <div className="flex justify-center   rounded-b-lg  items-center bg-yellow   h-24">
       <span aria-hidden="true" className="">Online store: 
   
   </span> 
   <div className="flex   justify-center">
   <span className="font-bold px-1 ">
       IKEA International Sales</span> 
       <div>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

       </div>
   </div>
       </div>
   </div>
   <div className="flex flex-col">
      <p className="font-bold mt-12  text-2xl ">Other IKEA sites</p>
      <a className=" font-normal   text-2xl hover:underline mt-2"><Link to="/about">About IKEA</Link></a>
      <a  className=" font-normal   text-2xl hover:underline mt-2"><Link to="/museum">IKEA Museum</Link></a>
      <a  className=" font-normal   text-2xl hover:underline mt-2"><Link to="/international-sales">International sales</Link></a>
      <a  className=" font-normal   text-2xl hover:underline mt-2"><Link to="/login">Login</Link></a>
      <a  className=" font-normal   text-2xl hover:underline mt-2"><Link to="/contact"> Contact us</Link></a>
   
   
   
   </div>
   
   
   
   <div className="flex flex-col mt-16">
      <a  className=" font-normal   text-2xl hover:underline mt-2"><Link to="">Cookie information</Link></a>
      <a  className=" font-normal   text-2xl hover:underline mt-2"><Link to="/statement">Privacy statement</Link></a>
   </div>
   </div>
</div>
:<></>
}
</>
    )
}

export default HomeDrawer;