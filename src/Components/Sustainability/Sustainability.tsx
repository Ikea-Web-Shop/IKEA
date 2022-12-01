import Ambitions from "./Components/Ambitions/Ambitions";
import Report from "./Components/Report/Report";
import Transforming from "./Components/Transforming/Transforming";
import Building from "./Components/Building/Building";
import images from "src/Importer/Importer";
function Sustainability(){
    return (
        <>
    
         <div className="container ">
    <div className="container">
    <div className="lg:flex lg:justify-center lg:items-center w-full ">
       <Ambitions />
       </div>
              <Report />
    </div>
             
         </div>
{/* ******************************** */}

<div className="bg-gray w-full my-10 py-10">
    <div className="container ">
    <div className="flex container justify-between  gap-6 lg:flex-row flex-col ">
    <img src={images['Sustainability/1.png']} 
    alt="A man and woman are preparing healthy food in a white, sunlit kitchen. They are both laughing"  className="lg:w-1/2  w-full" />
    <div className=" p-6 bg-gray lg:w-1/2 ">
        <div className=" ">
            
<p className="font-bold my-6  text-4xl ">Healthy and sustainable living</p>
<p className="font-normal my-6  text-lg ">
We’re committed to creating products and services that inspire and support people to make positive lifestyle changes, consume in more circular ways, and live better everyday lives.
</p>
<a className="text-blue font-normal  block text-xl hover:underline ">
What a healthy and sustainable life at home means</a>
        </div>
</div>
</div>
    </div>
</div>

{/* ******************************** */}


         <p className="my-20 font-light   text-4xl">
                  In FY21, we phased out all non-rechargeable alkaline batteries and replaced them with our new LADDA rechargeable batteries. This move enables customers to significantly reduce waste while also saving money in the long run.</p>
         <Transforming />
         <div>
         <p className="font-normal mt-4  text-base mb-4">During FY21, we launched our new forest positive agenda to enhance biodiversity further, support the livelihoods of people who depend on forests and mitigate climate change. We continued to meet our requirement for using wood from more sustainable sources:</p>

<p className="my-20 font-light   text-4xl">
99.5% of the wood used for IKEA products is either Forest Stewardship Council®-certified (FSC®) or recycled.</p>

         </div>
         <Building />
            
        </>
    )
}

export default Sustainability;