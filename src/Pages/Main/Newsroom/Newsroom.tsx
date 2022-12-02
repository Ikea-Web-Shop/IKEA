import {Newsroom as NewsroomPage} from "../../../Components"
import {CustomBreadcrumbs} from "../../../Components"
import NewsroomTopics from "src/Components/Newsroom/NewsroomTopics/NewsroomTopics";
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


<NewsroomPage />


        </div>

        <div className='mb-12 bg-gray w-screen py-16'>
		<div className="container">
        <div className='m-auto w-full  mb-12 p-4 sm:p-0 lg:container'>
					<h1 className='text-3xl xl:text-4xl	font-bold mb-12'>Get the latest news in your inbox</h1>
				
				
					<a
						href='https://lifeathome.ikea.com/'
						className='text-blue text-lg font-semibold	'>
					Subscribe to news
					</a>
				</div>
        </div>
			</div>


       <div className="container my-10">
       <NewsroomTopics />
       </div>
        </>
    )
}

export default Newsroom;