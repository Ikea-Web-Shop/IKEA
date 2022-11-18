import {Newsroom as NewsroomPage} from "../../../Components"
import {CustomBreadcrumbs} from "../../../Components"

function Newsroom(){
    return (
        <>
        <CustomBreadcrumbs 
      link1="About IKEA"
      link2="Newsroom"
      link3=""
      route1="/about"
      route2="/newsroom"
      flag={false}
    />
        <div className="container">
<p className="font-bold mt-12  text-5xl">Newsroom</p>
<p className="font-bold mt-12  text-4xl">Featured news</p>

<NewsroomPage />
        </div>

        </>
    )
}

export default Newsroom;