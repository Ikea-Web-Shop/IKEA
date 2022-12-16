
import images from "../../Importer/Importer";
import { useState } from "react";
import {ImageBoxData} from "./data"
import ImageBox from "./Components/ImageBox";
function Home(){
    const [item] = useState(ImageBoxData);
    return (
     <>
      <div className="mt-10 px-8"> 



<div className="flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between gap-6  lg:h-500 md:h-500">
<div className="xl:w-2/3 lg:w-2/3 md:w-2/3 lg:h-500 relative">
<img src={images['Home/Linus_Malmo_Living_Room.png']} className="rounded-lg w-full h-full  "alt="" loading="lazy"/>
<div className="text-white py-6 absolute lg:top-96 top-80 px-2">
<p className="font-bold">Inspiring homes</p>
<p className="font-bold text-3xl">A student starting small in the city</p>
</div>
</div>
<div className="xl:w-1/3  lg:w-1/3 md:w-1/3 w-full flex flex-col text-black ">
    
<div className="flex   justify-center border-b-1 rounded-t-lg border-borderColor items-center bg-yellow text-2xl font-extrabold  h-96">
    Go shopping
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mt-1 hover:ml-5 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

    </div>
    </div>


<div className="flex justify-center   rounded-b-lg  items-center bg-yellow   h-44">

    <span aria-hidden="true" className="">Online store: 
   
    </span> 
    <div className="flex   justify-center">
    <span className="font-bold px-1 ">
        IKEA International Sales</span> 
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

        </div>
    </div>
 
</div>
</div>
</div>

<div className="flex flex-wrap justify-between">
{item.map((item) => (
 
        <ImageBox
        id={item.id}
    title={item.title}
    text={item.text}
    image={item.image}
    
    />

))}
</div>

<div className="flex flex-col text-center mt-24">
<p className="text-2xl font-bold mb-8 text-slate-900 px-50">A world of inspiration for your home</p>
<div className="flex justify-center bg-red-200"><img src={images['Navbar/logo.png']} alt="IKEA logo" width="159" height="6" loading="lazy" className=" px-3   "/></div>
</div>
<img src={images['Home/footer_svg.jpg']} className="w-screen rounded-lg h-[200px]"alt="" /> 

</div> 
     </>
    )
}

export default Home;