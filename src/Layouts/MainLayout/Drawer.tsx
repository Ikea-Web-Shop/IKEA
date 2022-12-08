import {navbarItems} from "../../Services/Utils/Data/data"
import { useState } from "react";
import "./style.css"
import  images from "../../Importer/Importer"


function Drawer(){
  const [showModal,setShowModal]=useState(false)
  const [showSearchModal,setShowSearchModal]=useState(false)


  const [item] = useState(navbarItems);

    return (
        <>
<div className="relative">
            {!showModal ? (
              <button
                className="close lg:hidden"
                type="button"
                onClick={() => setShowModal(true)}
              >
                <svg
                  className="h-10 w-10 text-black"
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
            {(!showSearchModal && showModal) ? (
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
                  className="w-10 h-10 "
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
             {showSearchModal ? (
              <button
                className="Homeclose z-50"
                type="button"
                onClick={() => setShowSearchModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 "
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
<div className="modal ">
<div className="pt-2 bg-gray  shadow overflow-x-hidden absolute lg:w-2/6 w-full  h-full top-0">
   <div className="bg-white flex justify-between w-5/6 items-center p-2 mb-8">
        
  <img src={images['Navbar/logo.png']} alt="IKEA logo"  className="w-24  "/>
 
 <svg aria-hidden="true" 
 className="w-10 h-10" 
 fill="currentColor" 
 viewBox="0 0 20 20" 
 onClick={() => setShowSearchModal(true)}
 xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>

   </div>
   <div className="flex  flex-col ">
   {item.map((item) => (
      <div>
               <a href={item.route} className="px-3 hover:underline font-semibold  text-2xl">  {item.name}</a>
<div className="h-[2px] my-4 w-screen bg-gray-dark  "></div>
      </div>
           
           ))}
          
           </div>
           <a  href="/"className="text-2xl flex-initial w-40 px-3 hover:underline font-semibold  ">Shop at IKEA</a>
           </div>
          
</div> : <></> }
   
{showSearchModal ?

<div className="modal ">
<div className="px-4 py-2 bg-gray  shadow overflow-x-hidden absolute lg:w-2/6 w-full  h-full top-0">
   <div className="bg-gray flex justify-between w-5/6 items-center p-2 mb-8">
        
  <img src={images['Navbar/logo.png']} alt="IKEA logo"  className="w-28  "/>
 



   </div>
   <div className="bg-white flex justify-between w-full items-center  mb-8 rounded border border-x-blue border-y-blue ">
        
        <input type="text" name="search" id="search" className=""/>
       
       <div className="border  p-5 bg-blue">
       <svg aria-hidden="true" 
       className="w-10 h-10 bg-blue text-white" 
       fill="currentColor" 
       viewBox="0 0 20 20" 
       onClick={() => setShowSearchModal(true)}
       xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
      
       </div>
         </div>
         <div className="flex flex-col">
         <a  href="/"className="text-2xl  px-3 hover:underline font-semibold   my-4">Shop at IKEA ?</a>
           <a className="text-blue text-2xl my-4 px-3 hover:underline font-semibold"> Choose your IKEA retail website</a>
         </div>
           </div>
          
</div>
: <></>

}
        </>
    )
}
export default Drawer;