
import images from "src/Importer/Importer";
function Home(){
    return (
      <div>
 <div className="grid grid-flow-col grid-rows-1 grid-cols-4 gap-6 ">
     <img src={images['Navbar/logo.png']} className="w-screen"alt="" loading="lazy"/>
     <img src={images['Navbar/logo.png']}className="w-screen col-start-2 col-end-5"alt="" loading="lazy"/>
 </div>

      <div className="grid grid-flow-col grid-rows-1 grid-cols-2 gap-6 ">
      <video 
      src="../../../Assets/Images/Home/festivalstart_3c19f9ed76.mp4"
       preload="auto" className="svelte-1xl8vw"  
     ></video>
        <img src={images['Navbar/logo.png']}className="w-screen"alt="" loading="lazy"/>
    </div>


    <div className="grid grid-flow-col grid-rows-1 grid-cols-2 gap-6 ">
     <img src={images['Navbar/logo.png']} className="w-screen"alt="" loading="lazy"/>
     <img src={images['Navbar/logo.png']}className="w-screen"alt="" loading="lazy"/>
 </div>



    </div>
    )
}

export default Home;