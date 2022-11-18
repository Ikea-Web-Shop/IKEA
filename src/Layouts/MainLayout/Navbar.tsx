import { useState } from "react";

import  images from "../../Importer/Importer"
import {navbarItems} from "../../Services/Utils/Data/data"
import Drawer from "./Drawer";


const Navbar = () => {
  const [item] = useState(navbarItems);
  const [showModal,setShowModal]=useState(false)

  return (
   
 <>
    <header className="w-screen p-3 bg-white shadow ">
    <div className="flex py-3 ">
   {!showModal ?
      <button className="lg:hidden md:hidden" type="button" onClick={()=>setShowModal(true)}>
      <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="3" y1="12" x2="21" y2="12" />  <line x1="3" y1="6" x2="21" y2="6" />  <line x1="3" y1="18" x2="21" y2="18" /></svg>

      </button> : <></>
   }
   {showModal ?
      <button className="lg:hidden md:hidden font-bold" type="button" onClick={()=>setShowModal(false)}>
      close

      </button> : <></>
   }
     
    <img src={images['Navbar/logo.png']} alt="IKEA logo" width="60" height="150" loading="lazy" className="flex-none px-3  w-24 -mt-1"/>
    <nav className="  Space evenly flex-initial w-screen hidden lg:flex md:flex">
  

    {item.map((item) => (
            <a href={item.route} className="px-3 hover:underline font-semibold text-slate-900">  {item.name}</a>
            ))}
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </nav>
            <a  href="/"className="focus:bg-violet-700 flex-initial w-40 px-3 hover:underline font-semibold text-slate-900">Shop at IKEA</a>
            </div>
           
</header>
 {showModal ? <Drawer /> : <></>

 }
 </>
  );
};

export default Navbar;
