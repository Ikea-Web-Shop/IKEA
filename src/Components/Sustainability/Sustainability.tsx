import Ambitions from "./Components/Ambitions/Ambitions";
import Report from "./Components/Report/Report";
import Transforming from "./Components/Transforming/Transforming";
import Building from "./Components/Building/Building";
function Sustainability(){
    return (
        <>
        
         <div className="container">
         <Ambitions />
              <Report />
              <p className="my-20 font-light   text-4xl">
                  In FY21, we phased out all non-rechargeable alkaline batteries and replaced them with our new LADDA rechargeable batteries. This move enables customers to significantly reduce waste while also saving money in the long run.</p>
         <Transforming />
         <div>
         <p className="font-normal mt-4  text-base mb-4">During FY21, we launched our new forest positive agenda to enhance biodiversity further, support the livelihoods of people who depend on forests and mitigate climate change. We continued to meet our requirement for using wood from more sustainable sources:</p>

<p className="my-20 font-light   text-4xl">
99.5% of the wood used for IKEA products is either Forest Stewardship Council®-certified (FSC®) or recycled.</p>

         </div>
         <Building />
         </div>
            
        </>
    )
}

export default Sustainability;