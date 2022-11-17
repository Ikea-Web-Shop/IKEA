import images from "src/Importer/Importer";

function Ambitions(){
    return (
        <>
         <div className="  ">
<div className="flex  mt-20 mb-10" >
    
<img src={images['Sustainability/sunlight.jpg']} alt="IKEA sustainability ambitions for 2030"  className="w-2/6" />

          
<div className=" w-3/6 px-10 -mt-10 ml-10">
<p className="font-bold mt-12  text-3xl ">IKEA sustainability ambitions for 2030</p>
<ul className="font-normal mt-12  text-base ">
    <li>Inspire and enable more than 1 billion people to live a better everyday life within the boundaries of the planet</li>
    <li>Become circular and climate positive, and regenerate resources while growing the IKEA business</li>
    <li>Create a positive social impact for everyone across the IKEA value chain
</li>

</ul>

</div>

</div>
<a className="text-blue font-normal   text-xl hover:underline lg:ml-80 lg:pl-30 ">
IKEA Sustainability strategy (PDF, 5.3MB)</a>
        </div>
        </>
    )
}

export default Ambitions;