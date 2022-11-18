import {Statement as StatementPage} from "../../../Components"
import {CustomBreadcrumbs} from "../../../Components"

function Statement (){
    return(
        <>
        <CustomBreadcrumbs 
        link1="About IKEA"
        link2=" IKEA Policies"
        link3=" Privacy statement for About IKEA"
        route1=""
        route2=""
        flag={true}
      />
<StatementPage />
</>
    )
}

export default Statement ;