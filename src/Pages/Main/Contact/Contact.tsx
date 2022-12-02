
import {CustomBreadcrumbs} from "../../../Components"
import Box from "./Components/Box/Box"
import {commonlyAskedQuestions,otherWebsites} from "./data"
import { useState } from "react";



function Contact(){
  const [item] = useState(commonlyAskedQuestions);
  const [item2] = useState(otherWebsites);


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
<div className="container">
<div>
<p className="font-bold mt-12  text-5xl">Got a question? We are happy to help.</p>
<p className="w-4/6 mt-10 text-xl ">The IKEA business spans a wide range of areas, organisations and companies. To help you find the right contact, we've put together the most commonly asked questions, including contact details.</p>
</div>
<div className="lg:ml-10 lg:w-5/6 mb-20">
<div className="lg:container md:container">
<p className="font-bold my-12  text-4xl">Here is a list of our most commonly asked questions:</p>
{item.map((item) => (
           <Box 
           quastion={item.quastion}
answer={item.answer}
link={item.link}
           />
            ))}
<div className="h-[1px] w-full bg-black text-black "></div>


<p className="font-bold my-16  text-4xl">Did you find what you were looking for? If not, try these other websites:</p>
{item2.map((item) => (
           <Box 
           quastion={item.quastion}
answer={item.answer}
link={item.link}
           />
            ))}
<div className="h-[1px] w-full bg-black text-black "></div>
</div>
</div>
</div>

        </>
    )
}
export default Contact;