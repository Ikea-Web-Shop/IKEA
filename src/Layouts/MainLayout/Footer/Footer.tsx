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
    <div className="w-screen p-20  ">
      <p>© Inter IKEA Systems B.V. 1999 - 2022</p>
      {item.map((item) => (
            <a href={item.href} className="px-3 hover:underline font-semibold text-slate-900">  {item.text}</a>
            ))}
    </div>
    </>
  );
};

export default Footer;
