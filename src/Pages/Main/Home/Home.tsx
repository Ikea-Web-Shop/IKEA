
import images from "src/Importer/Importer";
import HomeDrawer from "src/Layouts/MainLayout/HomeDrawer/HomeDrawer";
function Home(){
    return (
      <div>


          {/* <HomeDrawer /> */}
 <div className="grid grid-flow-col grid-rows-1 grid-cols-3 gap-8 ">
     <img src={images['Home/Linus_startpage.png']} className="rounded-lg w-screen col-span-2 row-span-1"alt="" loading="lazy"/>
     <img src={images['Navbar/logo.png']}className="w-screen col-span-1 row-span-1"alt="" loading="lazy"/>
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
<div className="flex flex-col ">
    <p className=" font-semibold text-slate-900 px-50">A world of inspiration for your home</p>
<img src={images['Navbar/logo.png']} alt="IKEA logo" width="150" height="150" loading="lazy" className="flex-none px-3  w-24 -mt-1"/>
</div>
 <img src={images['Home/footer_svg.jpg']}width="auto" height="18.75em" className="lg:w-screen rounded-lg"alt="" loading="lazy"/>

    </div>
    )
}

export default Home;