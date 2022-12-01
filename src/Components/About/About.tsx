
import { useState } from "react";
import BehindIcons from "../Behind/BehindIcons/BehindIcons";
import AboutTopics from "./AboutTopics";
import { Cart1,Cart2 } from "./data"
import { Cart } from "../Cart/Cart";
import { DataCart } from "../DataCart/DataCart";
import images from "src/Importer/Importer";

function About(){
  const [cart1] = useState(Cart1);

  const [cart2] = useState(Cart2);

    return (
        <>

<div className='  '>
						<img
							src={images['About/header.png']}
							alt='Datacart'
							className='w-full'
						/>
						<div className='p-6 bg-gray h-full'>
                            <div className="flex">
                                <p>Innovation</p>
                                <p>17 November 2022</p>
                            </div>
							<h2 className='text-2xl	font-bold mb-6'>
                                Creating innovation water recycling showers for the future
                            </h2>
						<p>
                        To make this a reality we need to work together, co-create ideas and allow for the many people to influence and improve our business. And with the many people, we mean you. Co-workers. Customers. Suppliers, partners, peers – anyone who shares our vision. Or just has a great idea. Welcome to a team of curious entrepreneurs on a quest to make homes – and the planet – better.


                        </p>
							<button className='bg-black w-10 h-10 rounded-full flex items-center justify-center mt-12'>
								<svg className='fill-white w-6 h-6' viewBox='0 0 24 24'>
									<path d='M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z'></path>
								</svg>
							</button>
						</div>
					</div>
					<div className='w-full sm:w-1/2 sm:pl-8 xl:pl-20 mt-6 sm:mt-0 '>
						<img
							className='w-full'
							src='https://gbl-sc9u2-prd-cdn.azureedge.net/-/media/aboutikea/images/life-at-home/five-democratic-design-principles-ai05-04-px104231-ikea-l.jpg?rev=e178460d10c54b7d8fc61384f0e083e2'
							alt=''
						/>
					
					</div>
			


        {/* ********************************************* */}

        <div className="container">
           <div className="grid  lg:grid-cols-2 grid-cols-1 gap-5 lg:grid-rows-1 grid-rows-2  mt-10">
            
            {cart1.map((item) => (
           <div className="lg:col-span-1  ">
                <DataCart 
            subject={item.subject}
            data={item.data}
            title={item.title}
            src={item.image}
            />
               </div>
            ))}

            </div>
            <a className="text-blue hover:underline font-bold ">See the lastest news</a>

<p className="font-normal lg:text-5xl text-3xl my-8">Our vision is to create a better everyday life for the many people.
     On this you can discover exactly what 
     this means and find out who we are , what we do 
     and what we stand for.
    
</p>
<a className="text-blue hover:underline font-bold ">Explore the IKEA vision and business idea</a>

        <div className="grid  lg:grid-cols-2 grid-cols-1 gap-5 lg:grid-rows-1 grid-rows-2  mt-10">
            
            {cart2.map((item) => (
            <div className="lg:col-span-1"><Cart 
            title={item.title} 
            src={item.image}
            /></div>
            
                ))}
            
            </div>
         
        </div>
        <BehindIcons />
         <div className="container mb-40" >
         <AboutTopics />
         </div>
        
        </>
    )
}

export default About;