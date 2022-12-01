import { useState } from "react";

import  images from "../../Importer/Importer"
import {navbarItems} from "../../Services/Utils/Data/data"



const Navbar = () => {
  const [item] = useState(navbarItems);
 

  return (
   
 <>
    <header className="w-screen p-3 bg-white shadow ">
    <div className="lg:block hidden">
    <div className="flex py-3 ">
  
     
  <img src={images['Navbar/logo.png']} alt="IKEA logo" width="60" height="150" loading="lazy" className="flex-none px-3  w-24 -mt-1"/>
  <nav className="  Space evenly flex-initial w-screen hidden lg:flex md:flex">


  {item.map((item) => (
          <a href={item.route} className="px-3 hover:underline font-semibold text-slate-900 ">  {item.name}</a>
          ))}
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </nav>
          <a  href="/"className=" flex-initial w-40 px-3 hover:underline font-semibold text-slate-900 ">Shop at IKEA</a>
          </div>
    </div>




             <div className="lg:hidden block">
    <div className="flex justify-end ">
  
     
  <img src={images['Navbar/logo.png']} alt="IKEA logo" width="60" height="150" loading="lazy" className=" w-24 mr-[30%]"/>
 


  
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
         
        
          </div>
    </div>  
</header>


 
 </>
  );
};

export default Navbar;
