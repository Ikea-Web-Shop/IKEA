import Explore from "./Components/Explore/Explore";
import images from 'src/Importer/Importer';

function WorkWithUs(){
    return (
        <>
          <div className="container mb-16">
<p className="font-bold mt-12  text-5xl">Do you see a career at IKEA? We do!</p>
<p className="font-normal mt-12  text-xl">Our vision is to create a better everyday life for the many people. We believe we can make a big difference for people with big dreams and thin wallets, and we want to do it within the limits of our planet. This ambition challenges us to be part of making sustainable home solutions affordable and accessible to millions of people around the world.​</p>
<p className="font-normal mt-16 text-xl">To make this a reality we need to work together, co-create ideas and allow for the many people to influence and improve our business. And with the many people, we mean you. Co-workers. Customers. Suppliers, partners, peers – anyone who shares our vision. Or just has a great idea. Welcome to a team of curious entrepreneurs on a quest to make homes – and the planet – better.​</p>


        </div>
        <img className='flex w-screen' src={images['WorkWithUs/product.jpg']} alt='WorkWithUs'/>

        <div className="container mb-16">

<p className="font-normal mt-16 text-xl">To make this a reality we need to work together, co-create ideas and allow for the many people to influence and improve our business. And with the many people, we mean you. Co-workers. Customers. Suppliers, partners, peers – anyone who shares our vision. Or just has a great idea. Welcome to a team of curious entrepreneurs on a quest to make homes – and the planet – better.</p>


        </div>

        {/* -------------------------------------For suppliers */}
        <div className="w-screen bg-gray p-10">
            <div className="container flex justify-around flex-col lg:flex-row md:flex-row">
                <div className="flex flex-col lg:w-2/6 md:w-2/6">
                    <img src={images['WorkWithUs/blur.jpg']} alt="" />
                    <a className="hover:underline font-bold text-2xl  mt-6">Work at IKEA</a>
                    <p className="text-xl mt-6">Would you like to join us in making life at home better for people all around the world? We have a wide range of opportunities across our entire value chain.</p>
                    <div className="flex mt-6">
                    <p className="hover:underline font-bold text-base">Available jobs</p>
     <p className="pl-2">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
        
     </p>
                 </div>


                 
                </div>

                <div className="flex flex-col lg:w-2/6 md:w-2/6 mt-12 lg:mt-0 md:mt-0">
                    <img src={images['WorkWithUs/woman.jpg']} alt="" />
                    <a className="hover:underline font-bold text-2xl  mt-6">For suppliers</a>
                    <p className="text-xl  mt-6">Interested in becoming an IKEA supplier? Already an IKEA supplier? Here you’ll find everything you need to get in contact or stay in touch.</p>
                    <div className="flex  mt-6">
                    <p className="hover:underline font-bold text-base">For suppliers</p>
     <p className="pl-2">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
        
     </p>
                 </div>


                 
                </div>
            </div>
        </div>
        <div className="container"><Explore /></div>
        
        </>
    )
}

export default WorkWithUs;