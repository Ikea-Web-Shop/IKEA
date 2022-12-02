import { Cart } from "src/Components/Cart/Cart";
import images from "src/Importer/Importer";

function Building(){
    return (
        <>
   
<div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-2 lg:grid-rows-1 gap-5  mt-20 mb-10 lg:container" >
     
<div className="   -mt-10 lg:col-span-1">
<p className="font-bold mt-12  text-4xl ">Building a better business with IWAY</p>
<p className="font-normal mt-12  text-base ">
   
IWAY is the IKEA way for responsibly procuring products, services, materials, and components. It’s our supplier code of conduct that sets clear requirements and ways of working with environmental, social, and working conditions, as well as animal welfare, for all IKEA suppliers and service providers.
</p>

</div>
  
<div className="lg:col-span-1">

    <Cart title="Creating a sustainable IKEA value chain with IWAY" src={images['Sustainability/4.jpg']} />
</div>
</div>

  
        </>
    )
}

export default Building;