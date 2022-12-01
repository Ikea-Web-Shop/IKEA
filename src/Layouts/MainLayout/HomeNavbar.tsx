import { useState } from "react";
import HomeDrawer from "./HomeDrawer";
import  images from "../../Importer/Importer"
import {navbarItems} from "../../Services/Utils/Data/data"


const HomeNavbar = () => {
 
  const [showModal,setShowModal]=useState(false)

  return (
   <>
 
<header className="w-screen p-3 bg-white shadow ">
    <div className="flex py-3">
   
    <img src={images['Navbar/logo2.png']} alt="IKEA logo" width="60" height="150" loading="lazy" className=" px-3  w-40 -mt-1"/>
 
 
     
            </div>
</header>



</>
  );
};

export default HomeNavbar;
