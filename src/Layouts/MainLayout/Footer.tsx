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

const AboutUs = [
  "The history of IKEA",
  "The IKEA way of retail",
  "Year in review",
  "The IKEA point of view", 
];
const LifeAtHome = [
  "Our curiosity box",

  "How we work",
  "Co-creation", 
];
const BehindTheScenes = [
  "Products and design",
  "Innovation and technology",
  "Our commitments",
 
];
const Sustainability = [
  "Healthy and sustainable living",
  "Recycled polyester",
  "Transforming into a circular business",
  "Becoming climate positive",
  "Responsible sourcing",
  "Fair and equal", 
];
const WorkWithUs = [
  "Work at IKEA",
  "For suppliers",
 
];
const Newsroom = [
  "Publications",
  "Images and videos",
  "Spokespersons",
  "Subscribe", 
];
const ExploreOtherSites = [
  "Shop at IKEA",
  "IKEA Museum",
  "IKEA Social Entrepreneurship",
  "IKEA Foundation", 
];
const names=[
  "About us",
  "Life at home",
  "Behind the scenes",
  "Sustainability",
  "Work with us",
  "Newsroom",

]

const Footer = () => {
  const [item] = useState(links);

  return (
    <>
<footer>
<div className="flex   flex-col lg:flex-row  justify-start justify-items-start">

<div className="lg:w-3/4 w-screen pb-0 bg-gray p-7 grid grid-rows-3 grid-cols-1 gap-10 lg:grid-rows-3 lg:grid-cols-3 md:grid-rows-3 md:grid-cols-3">
<div >
<a  className=" text-lg text-black p-2 font-bold hover:underline" href="#">About us</a>
        {AboutUs.map((link) => (
          <a  className=" text-sm text-black p-2 font-medium block hover:underline" href="#">{link}</a>
         
          ))}
</div>
<div>
<a  className=" text-lg text-black p-2 font-bold hover:underline" href="#">Life at home</a>
        {ExploreOtherSites.map((link) => (
          <a  className=" text-sm text-black p-2 font-medium block hover:underline" href="#">{link}</a>
         
          ))}
</div>
<div>
<a  className=" text-lg text-black p-2 font-bold hover:underline" href="#">Behind the scenes</a>
        {ExploreOtherSites.map((link) => (
          <a  className=" text-sm text-black p-2 font-medium block hover:underline" href="#">{link}</a>
         
          ))}
</div>
<div>
<a  className=" text-lg text-black p-2 font-bold hover:underline" href="#">Sustainability</a>
        {ExploreOtherSites.map((link) => (
          <a  className=" text-sm text-black p-2 font-medium block hover:underline" href="#">{link}</a>
         
          ))}
</div>
<div>
<a  className=" text-lg text-black p-2 font-bold hover:underline" href="#">Work with us</a>
        {WorkWithUs.map((link) => (
          <a  className=" text-sm text-black p-2 font-medium block hover:underline" href="#">{link}</a>
         
          ))}
</div>
<div>
<a  className=" text-lg text-black p-2 font-bold hover:underline" href="#">Newsroom</a>
        {Newsroom.map((link) => (
          <a  className=" text-sm text-black p-2 font-medium block hover:underline" href="#">{link}</a>
         
          ))}
</div><div>
<a  className=" text-lg text-black px-2 font-bold hover:underline" href="#">Events</a>
       
</div>
<div>
<a  className=" text-lg text-black px-2 font-bold hover:underline" href="#">
Contact us</a>
       
</div>

     
</div>
<div className="lg:w-1/4 w-screen bg-gray-dark p-7 pb-0">
<a  className="w-1 text-lg text-black p-2 font-bold hover:underline" href="#">Explore other sites</a>
        {ExploreOtherSites.map((link) => (
          <a  className=" text-sm text-black p-2 font-medium block hover:underline" href="#">{link}</a>
         
          ))}
</div>
</div>

    <div className="bg-blackfooter w-screen p-7 flex  flex-col lg:flex-row md:flex-row justify-start justify-items-start  lg:justify-between  lg:justify-items-center md:justify-between  md:justify-items-center">
      <p className="text-white text-xs ">
      © Inter IKEA Systems B.V. 1999 - 2022
      </p>
      <div className="text-white">
      {item.map((link) => (
        <a  className="underline text-xs p-2 block lg:inline-block md:inline-block" href={link.href}>{link.text}</a>
       
        ))}
      </div>

    </div>
    </footer>
    </>
  );
};

export default Footer;
