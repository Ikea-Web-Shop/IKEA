
import images from "../../Importer/Importer";
import { useState } from "react";
import {ImageBoxData} from "./data"
import ImageBox from "./Components/ImageBox";
function Home(){
    const [item] = useState(ImageBoxData);
    return (
     <>
      <div className="mt-10 px-8"> 



<div className="flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between gap-6 xl:h-500 lg:h-500 md:h-500">
<img src={images['Home/Linus_startpage.png']} className="rounded-lg w-screen xl:w-2/3 lg:w-2/3 md:w-2/3 "alt="" loading="lazy"/>
<div className="xl:w-1/3  lg:w-1/3 md:w-1/3 w-screen flex flex-col text-black ">
    
<div className="flex   justify-center border-b-1 rounded-t-lg border-borderColor items-center bg-yellow text-2xl font-extrabold  h-96">Go shopping</div>


<div className="flex justify-center   rounded-b-lg  items-center bg-yellow   h-44">
<span className="">
    <span aria-hidden="true" className="">Online store: 
    <span className="font-bold px-1">IKEA International Sales</span> 
    </span> 
   </span>
</div>
</div>
</div>

<div className="flex flex-wrap justify-between">
{item.map((item) => (
 
        <ImageBox
    title={item.title}
    text={item.text}
    image={item.image}
    
    />

))}
</div>

<div className="flex flex-col text-center ">
<p className="text-2xl font-bold mb-8 text-slate-900 px-50">A world of inspiration for your home</p>
<div className="flex justify-center bg-red-200"><img src={images['Navbar/logo.png']} alt="IKEA logo" width="159" height="6" loading="lazy" className=" px-3   "/></div>
</div>
<img src={images['Home/footer_svg.jpg']}width="auto" height="18.75em" className="lg:w-screen rounded-lg -mb-12"alt="" loading="lazy"/> 

</div> 
     </>
    )
}

export default Home;