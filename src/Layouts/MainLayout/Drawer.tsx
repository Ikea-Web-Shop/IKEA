import {navbarItems} from "../../Services/Utils/Data/data"
import { useState } from "react";
import "./style.css"


function Drawer(){
  const [showModal,setShowModal]=useState(false)

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
<div className="modal">
<div className="py-6 bg-white shadow overflow-x-hidden absolute w-5/6   h-full ">
   
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
          
</div> : <></> }
   

        </>
    )
}
export default Drawer;