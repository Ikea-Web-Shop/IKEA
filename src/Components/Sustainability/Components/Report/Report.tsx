import images from "src/Importer/Importer";

function Report(){
    return (
        <>
         <div className="mt-20  w-5/6 ">

    
<img src={images['Sustainability/sunlight.jpg']} alt="IKEA sustainability ambitions for 2030"  className="" />

          
<div className=" mt-10 ">
<p className="font-bold mt-12  text-4xl ">The Sustainability Report FY21 is here</p>
<p className="font-normal mt-12  text-base ">
In FY21, there was a partial return to normal life after the COVID-19 lockdowns. The growth of the IKEA business resumed and even surpassed previous highs. But, at the same time, we still felt many of the lingering effects of the pandemic, and together with many people around the world, we saw the effects of climate change and biodiversity loss.
</p>
<p className="font-normal mt-12  text-base mb-10">
IKEA is a value-based business. We decided to side with the many since the beginning more than 75 years ago, and the IKEA vision to create a better everyday life for the many people is more relevant than ever. This means it’s our responsibility to clearly understand our business’s impact on both people and the communities where we operate, and to do everything we can to address it.
</p>
<a className="text-blue font-normal  block text-xl hover:underline ">
Explore highlights from the Sustainability Report FY21</a>
</div>



        </div>
        </>
    )
}

export default Report;