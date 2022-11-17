import images from "src/Importer/Importer";

function Building(){
    return (
        <>
   
<div className="flex  mt-20 mb-10" >
     
<div className=" w-2/6  -mt-10 ">
<p className="font-bold mt-12  text-4xl ">Building a better business with IWAY</p>
<p className="font-normal mt-12  text-base ">
   
IWAY is the IKEA way for responsibly procuring products, services, materials, and components. It’s our supplier code of conduct that sets clear requirements and ways of working with environmental, social, and working conditions, as well as animal welfare, for all IKEA suppliers and service providers.
</p>

</div>
  
<img src={images['Sustainability/sunlight.jpg']} alt="IKEA sustainability ambitions for 2030"  className="w-2/6" />

       
</div>

  
        </>
    )
}

export default Building;