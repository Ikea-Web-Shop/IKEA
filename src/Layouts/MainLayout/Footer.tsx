import { useState } from "react";

const links = [
  {
    text: "Privacy Policy",
    href:"https://about.ikea.com/en/ikea-policies/privacy-statement"
  
  },
  {
    text: "Cookie Policy",
    href:"https://about.ikea.com/en/ikea-policies/cookie-statement"
  
  },
  {
    text: "Change Your Cookie Settings",
    href:"javascript:void(0);"
  },
  
];
const Footer = () => {
  const [item] = useState(links);

  return (
    <>
    <div className="md:mx-[80px]">
      <div className="flex lg:flex-row flex-col lg:justify-between mb-[30px] sm:mb-[45px] mt-[100px] lg:mt-[171px]  ">
        <div className="flex flex-col lg:items-start  items-center  ">
        
          <p className="flex justify-start text-center text-sm md:text-base lg:text-left mb-5 md:mb-[40px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit,
          </p>
        </div>
        <ul className="flex flex-row justify-center items-center font-medium font-inter sm:right-[120px]">
  
       
        </ul>
      </div>
      <div className="flex md:flex-row flex-col md:mb-[10px] h-[150px] justify-around  items-center border-t-[1px] border-gray-300">
        <p className="flex items-center justify-center font-eudoxus font-normal lg:mb-0 sm:mx-auto text-[0.8rem] sm:text-lg">
          © 2020 Flowbase. Powered by{" "}
          <span className="text-red-300">Webflow</span>{" "}
        </p>
        <div className="flex items-center justify-center md:flex-row text-[19.36px] sm:mb-[0px] mb-[40px]">
          <span className="flex justify-center header-icon cursor-pointer">
          
          </span>
          <span className="flex justify-center ml-[40px] header-icon cursor-pointer">
           
          </span>
          <span className="flex justify-center ml-[40px] header-icon cursor-pointer">
          
          </span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
