
import {Sustainability as SustainabilityPage} from "../../../Components"
import {CustomBreadcrumbs} from "../../../Components"

function Sustainability(){
    return (
        <>
        <CustomBreadcrumbs 
      link1="About IKEA"
      link2=" Sustainability"
      link3=""
      route1="/about"
      route2="/sustainability"
      flag={false}
    />
         <div className="container">
<p className="font-bold mt-12  text-5xl">Sustainability – caring for people and the planet</p>
<p className="font-normal mt-12  text-xl">To meet the challenges of unsustainable consumption, climate change, and growing inequality, we are – in collaboration with partners, co-workers, and customers – taking ambitious steps towards a more sustainable future.​</p>

<SustainabilityPage />
        </div>
        </>
    )
}

export default Sustainability;