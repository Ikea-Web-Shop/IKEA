import images from "src/Importer/Importer";

function Ambitions(){
    return (
        <>
         <div className="w-full ">
<div className="flex  mt-20 mb-10 justify-between lg:flex-row flex-col"  >
    
<img src={images['Sustainability/sunlight.jpg']} alt="IKEA sustainability ambitions for 2030"  className="lg:w-2/6 w-full" />

          
<div className=" lg:w-3/6 px-10 lg:-mt-10 lg:ml-10 w-full">
<p className="font-bold mt-12  text-3xl ">IKEA sustainability ambitions for 2030</p>
<ul className="font-normal mt-12  text-base list-disc">
    <li  className="my-5">Inspire and enable more than 1 billion people to live a better everyday life within the boundaries of the planet</li>
    <li className="my-5">Become circular and climate positive, and regenerate resources while growing the IKEA business</li>
    <li className="my-5">Create a positive social impact for everyone across the IKEA value chain
</li>

</ul>

</div>

</div>
<a className="text-blue font-normal   text-xl hover:underline lg:ml-[32rem] lg:pl-30 ">
IKEA Sustainability strategy (PDF, 5.3MB)</a>
        </div>
        </>
    )
}

export default Ambitions;