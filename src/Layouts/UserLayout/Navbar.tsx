import { Link } from "react-router-dom"
import { Menu } from "./Menu";
import {userData} from "./data"
import { useState } from "react";

const Navbar = () => {
  const [item] = useState(userData);
 

  return (
   <>
 
<header className="w-screen p-3 bg-white shadow ">
  <a className="font-bold text-xl hover:underline text-blue"> <Link to="/" > Back to Home</Link></a>

</header>
<Menu title={item.title} image={item.image}/>



</>
  );
};

export default Navbar;
