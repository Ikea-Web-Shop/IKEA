// import { useState } from "react";
// import { footerItems } from "src/Services/Utils/Data/data";
const HomeFooter = () => {
  // const [item] = useState(footerItems);

  return (
    <>
    <footer className="bg-blue-700 w-screen lg:p-3   ">
   <div className="p-10 justify-center flex flex-wrap text-gray-400">
   
  <a href="https://about.ikea.com/en/contact/how-to-buy-ikea-products-from-a-different-country" className="text-white hover:underline font-semibold text-slate-900"> International sales </a>
  <p className="px-5 inline-block" >|</p>
  <a href="hhttps://about.ikea.com/" className="text-white hover:underline font-semibold text-slate-900"> About IKEA </a>
  <p className="px-5 inline-block" >|</p>
  <a href="https://ikeamuseum.com/en/" className="text-white hover:underline font-semibold text-slate-900">IKEA Museum </a>
  <p className="px-5 inline-block" >|</p>
  <a href="https://about.ikea.com/en/work-with-us" className="text-white hover:underline font-semibold text-slate-900">Work with us</a>
  <p className="px-5 inline-block" >|</p>
  <a href="https://www.inter.ikea.com/how-we-do-business/ethics-and-integrity" className="text-white hover:underline font-semibold text-slate-900"> Ethics & Integrity</a>
  
          
   </div>
   <div className="px-8 py-5 justify-between flex flex-wrap text-gray-200">
  <div className="lg:w-2/5  xs:w-screen flex flex-nowrap">
  <a href="" className=" hover:underline font-semibold text-slate-900 text-white"> Cookie information</a>
            <p className="lg:px-5 inline-block " >|</p>
            <a href="" className=" hover:underline font-semibold text-slate-900 text-white"> Privacy statement</a>

  </div>
  <p className="lg:w-2/5 xs:w-screen lg:mr-20">© Inter IKEA Systems B.V. 1999 - 2022</p>
  <a href="" className="lg:pl-10  hover:underline font-semibold text-slate-900 text-white"> Co-worker login</a>

            
   </div>
</footer>

    </>
  );
};

export default HomeFooter;
