import { useState } from "react";
import HomeDrawer from "./HomeDrawer";
import  images from "../../Importer/Importer"
import {navbarItems} from "../../Services/Utils/Data/data"


const HomeNavbar = () => {
  const [item] = useState(navbarItems);
  const [showModal,setShowModal]=useState(false)

  return (
   <>
 
<header className="w-screen p-3 bg-white shadow ">
    <div className="flex py-3">
    {!showModal ?
    <img src={images['Navbar/logo2.png']} alt="IKEA logo" width="60" height="150" loading="lazy" className=" px-3  w-40 -mt-1"/>
  : <></>  
  }
    <nav className="flex  Space evenly flex-initial w-screen ">
            </nav>
            {!showModal ?
      <button className="" type="button" onClick={()=>setShowModal(true)}>
      <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="3" y1="12" x2="21" y2="12" />  <line x1="3" y1="6" x2="21" y2="6" />  <line x1="3" y1="18" x2="21" y2="18" /></svg>

      </button> : <></>
   }
   {showModal ?
      <button className="lg:hidden md:hidden font-bold" type="button" onClick={()=>setShowModal(false)}>
      close

      </button> : <></>
   }
     
            </div>
</header>
{showModal ? <HomeDrawer /> : <></>

}
</>
  );
};

export default HomeNavbar;
