// import { useState } from "react";
// import { footerItems } from "src/Services/Utils/Data/data";
const HomeFooter = () => {
  // const [item] = useState(footerItems);

  return (
    <>
    <footer className="bg-blue w-screen lg:p-3   ">
   <div className="p-10 justify-center flex flex-wrap text-gray-400 text-white text-xl font-medium pb-20 pt-15">
   
  <a href="https://about.ikea.com/en/contact/how-to-buy-ikea-products-from-a-different-country " className=" hover:underline px-2 w-3/6 lg:px-0 lg:w-max "> International sales </a>
  <p className="px-5 lg:inline-block  hidden" >|</p>
  <a href="hhttps://about.ikea.com/" className=" hover:underline  px-2 w-3/6 lg:px-0 lg:w-max"> About IKEA </a>
  <p className="px-5 lg:inline-block  hidden" >|</p>
  <a href="https://ikeamuseum.com/en/" className=" hover:underline  px-2 w-3/6 lg:px-0 lg:w-max">IKEA Museum </a>
  <p className="px-5 lg:inline-block  hidden" >|</p>
  <a href="https://about.ikea.com/en/work-with-us" className=" hover:underline  px-2 w-3/6 lg:px-0 lg:w-max">Work with us</a>
  <p className="px-5 lg:inline-block  hidden" >|</p>
  <a href="https://www.inter.ikea.com/how-we-do-business/ethics-and-integrity" className=" hover:underline  px-2 w-3/6 lg:px-0 lg:w-max"> Ethics & Integrity</a>
  
          
   </div>
   <div className="flex text-white justify-center px-8 md:px-20 xl:justify-between xl:p-0 xl:px-0 flex-col xl:flex-row  ">
  <div className="xl:w-2/5 w-screen flex flex-nowrap">
  <a href="" className=" hover:underline font-medium pr-4 "> Cookie information</a>
            <p className="xl:px-5 lg:inline-block  hidden" >|</p>
            <a href="" className=" hover:underline font-medium  px-4"> Privacy statement</a>

  </div>
  <p className="xl:w-2/5 w-screen py-6 lg:py-3 xl:py-0 ">© Inter IKEA Systems B.V. 1999 - 2022</p>
  <a href="" className=" xl:w-1/6 hover:underline font-medium  "> Co-worker login</a>

            
   </div>
</footer>

    </>
  );
};

export default HomeFooter;
