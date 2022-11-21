import {CustomBreadcrumbs} from "../../../Components"

import {Behind as BehindPage} from "../../../Components"
function Behind(){
    return (
        <>

       <CustomBreadcrumbs 
      link1="About IKEA"
      link2="Behind the scenes"
      link3=""
      route1="/about"
      route2="/behind"
      flag={false}
    />
    <BehindPage />
        </>
    )
}

export default Behind;