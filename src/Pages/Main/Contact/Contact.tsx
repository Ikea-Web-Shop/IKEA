
import {CustomBreadcrumbs} from "../../../Components"



function Contact(){
    return(
        <>
  <CustomBreadcrumbs 
      link1="About IKEA"
      link2="Contact us"
      link3=""
      route1="/about"
      route2="/contact"
      flag={false}
    />
        </>
    )
}
export default Contact;