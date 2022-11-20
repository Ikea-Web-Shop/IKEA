import { useState } from "react";
import { Link } from "react-router-dom";


interface info{
title:string;
image :string;

}
const userPanelItems = [
  
    {
      id: 1,
      name: "About us",
      route: "/about",
    },
    {
      id: 2,
      name: "Life at home",
      route: "/life-at-home",
    },
    {
      id: 3,
      name: "Behind the scenes",
      route: "/behind",
    },
    {
      id: 4,
      name: "Sustainability",
      route: "/sustainability",
    },
    {
      id: 5,
      name: "Work with us",
      route: "/work-with-us",
    },
    {
      id: 6,
      name: "Newsroom",
      route: "/newsroom",
    },
  ];
export const Menu=(props:info)=>{
  const [item] = useState(userPanelItems);

    return(
        <>
    
     <div className="bg-slate-800 w-1/5 flex p-4 flex-col h-screen">
            <div className="p-4 flex justify-center items-center">
                <img className="rounded-full w-4/6" src={props.image} alt={props.title} />
            </div>
            <div className="flex flex-col">
            {item.map((item) => (
            <a  className="p-3 hover:bg-slate-600 font-semibold text-slate-400">  <Link to={item.route}>{item.name}</Link> </a>
            ))}
            </div>

        </div>
  
        </>
    )
}