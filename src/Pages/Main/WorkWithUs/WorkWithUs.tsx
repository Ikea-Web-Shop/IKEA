import {WorkWithUs as WorkWithUsPage} from "../../../Components"
import {CustomBreadcrumbs} from "../../../Components"


function WorkWithUs(){
    return (
        <>
         <CustomBreadcrumbs 
      link1="About IKEA"
      link2="Work with us"
      link3=""
      route1="/about"
      route2="/work-with-us"
      flag={false}
    />
    <WorkWithUsPage />
        
        </>
    )
}

export default WorkWithUs;