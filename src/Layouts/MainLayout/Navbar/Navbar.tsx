import { useState } from "react";

import  images from "../../../Importer/Importer"
import {navbarItems} from "../../../Services/Utils/Data/data"


const Navbar = () => {
  const [item] = useState(navbarItems);

  return (
   
 
<header className="w-screen p-3 bg-white shadow fixed">
    <div>
    <nav className="flex justify-between items-center">
    <img src={images['Navbar/logo.png']} alt="IKEA logo" width="60" height="150" loading="lazy" />

    {item.map((item) => (
            <a href={item.route} className="hover:underline font-semibold text-slate-900">  {item.name}</a>
            ))}
            </nav>
            </div>
</header>

  );
};

export default Navbar;
