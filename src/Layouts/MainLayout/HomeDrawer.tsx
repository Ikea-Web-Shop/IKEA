import { Link } from "react-router-dom"
import  images from "../../Importer/Importer"


function HomeDrawer(){
    return(
   <>
<div className="p-5 bg-white h-screen absolute w-screen">
   
<img src={images['Navbar/logo2.png']} alt="IKEA logo" width="60" height="150" loading="lazy" className="flex-none px-2  w-40 mt-1"/>
    <div className="xl:w-1/4  lg:w-1/4 md:w-1/3 w-full flex flex-col text-black mt-6">
    
    <div className="flex   justify-center border-b-1 rounded-t-lg border-borderColor items-center bg-yellow text-2xl font-extrabold  h-36">Go shopping</div>
    
    
    <div className="flex justify-center   rounded-b-lg  items-center bg-yellow   h-24">
    <span className="">
        <span aria-hidden="true" className="">Online store: 
        <span className="font-bold px-1">IKEA International Sales</span> 
        </span> 
       </span>
    </div>
</div>
<div className="flex flex-col">
   <p className="font-bold mt-12  text-2xl ">Other IKEA sites</p>
   <a className=" font-normal   text-2xl hover:underline mt-2"><Link to="/about">About IKEA</Link></a>
   <a  className=" font-normal   text-2xl hover:underline mt-2"><Link to="/museum">IKEA Museum</Link></a>
   <a  className=" font-normal   text-2xl hover:underline mt-2"><Link to="/international-sales">International sales</Link></a>
   <a  className=" font-normal   text-2xl hover:underline mt-2"><Link to="/login">Login</Link></a>
   <a  className=" font-normal   text-2xl hover:underline mt-2"><Link to="/contact"> Contact us</Link></a>



</div>



<div className="flex flex-col mt-16">
   <a  className=" font-normal   text-2xl hover:underline mt-2"><Link to="">Cookie information</Link></a>
   <a  className=" font-normal   text-2xl hover:underline mt-2"><Link to="/statement">Privacy statement</Link></a>
</div>
</div>
</>
    )
}

export default HomeDrawer;