
import images from "../../Importer/Importer";
import HomeDrawer from "../../Layouts/MainLayout/HomeDrawer/HomeDrawer";
function Home(){
    return (
      <div className="container">


          {/* <HomeDrawer /> */}
 <div className="grid grid-flow-col grid-rows-1 grid-cols-3 gap-8 ">
     <img src={images['Home/Linus_startpage.png']} className="rounded-lg w-screen col-span-2 row-span-1"alt="" loading="lazy"/>
    <div className="bg-yellow-200 h-200 rounded-lg w-screen p-200">
<div className="flex justify-center text-center">Go shopping</div>
    </div>
 </div>

      <div className="grid grid-flow-col grid-rows-1 grid-cols-2 gap-6 ">
      <video 
      src="../../../Assets/Images/Home/festivalstart_3c19f9ed76.mp4"
       preload="auto" className="svelte-1xl8vw"  
     ></video>
        <img src={images['Home/KASEBERGAavif.png']}className="rounded-lg w-screen"alt="" loading="lazy"/>
    </div>


    <div className="grid grid-flow-col grid-rows-1 grid-cols-2 gap-6 ">
     <img src={images['Home/Hagberg_start.png']} className="w-screen rounded-lg"alt="" loading="lazy"/>
     <img src={images['Home/Press_image.png']}className="w-screen rounded-lg"alt="" loading="lazy"/>
 </div>
<div className="flex flex-col text-center">
    <p className=" font-semibold text-slate-900 px-50">A world of inspiration for your home</p>
<div className="text-center bg-red-200"><img src={images['Navbar/logo.png']} alt="IKEA logo" width="9.5625rem" height="auto" loading="lazy" className=" px-3  w-24 "/></div>
</div>
 <img src={images['Home/footer_svg.jpg']}width="auto" height="18.75em" className="lg:w-screen rounded-lg"alt="" loading="lazy"/>

    </div>
    )
}

export default Home;