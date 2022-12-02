
import {ExploreCart} from "../../data"
import { useState } from "react";

import { Cart } from "src/Components/Cart/Cart";
function Explore (){
  const [item] = useState(ExploreCart);

    return (
        <>
<p className="font-bold my-12  text-xl">Explore more about the IKEA business</p>
<div className="grid  lg:grid-cols-3 grid-cols-1 gap-5 lg:grid-rows-1 grid-rows-3  my-10">
            
{item.map((item) => (
<div className="lg:col-span-1  ">
    <Cart 
title={item.title} 
src={item.image}
/></div>

    ))}

</div>


        </>
    )
}
export default Explore;