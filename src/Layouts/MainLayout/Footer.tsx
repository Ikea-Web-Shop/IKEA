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
    <div className="bg-blackfooter w-screen p-6 flex lg:justify-between sm:justify-start lg:justify-items-center">
      <p className="text-white ">
      © Inter IKEA Systems B.V. 1999 - 2022
      </p>
      <div className="text-white">

        <a  className="underline p-2" href="http://">Privacy Policy</a>
        <a  className="underline p-2" href="http://">Cookie Policy</a>
        <a className="underline p-2"  href="http://">Change Your Cookie Settings</a>
      </div>

    </div>
  
    </>
  );
};

export default Footer;
