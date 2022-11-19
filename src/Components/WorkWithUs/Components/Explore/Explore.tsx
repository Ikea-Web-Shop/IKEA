
import {ExploreCart} from "../../data"
import { useState } from "react";

import { Cart } from "src/Components/Cart/Cart";
function Explore (){
  const [item] = useState(ExploreCart);

    return (
        <>
<p className="font-bold my-12  text-xl">Explore more about the IKEA business</p>
<div className="flex justify-between w-full  flex-col lg:flex-row md:flex-row">
            
{item.map((item) => (
<div><Cart 
title={item.title} 
src={item.image}
/></div>

    ))}

</div>


        </>
    )
}
export default Explore;