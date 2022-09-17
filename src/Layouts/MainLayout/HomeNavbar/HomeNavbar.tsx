import { useState } from "react";

import  images from "../../../Importer/Importer"
import {navbarItems} from "../../../Services/Utils/Data/data"


const HomeNavbar = () => {
  const [item] = useState(navbarItems);

  return (
   
 
<header className="w-screen p-3 bg-white shadow fixed">
    <div className="flex py-3">
    <img src={images['Navbar/home logo.jpg']} alt="IKEA logo" width="60" height="150" loading="lazy" className="flex-none px-3  w-40 -mt-1"/>
   
    <nav className="flex  Space evenly flex-initial w-screen ">
            </nav>
            <a className="focus:bg-violet-700 flex-initial w-40 px-3 hover:underline font-semibold text-slate-900">Shop at IKEA</a>
            </div>
</header>

  );
};

export default HomeNavbar;
