import { Link } from "react-router-dom";



interface CustomBreadcrumbsProps {
  
   link1 : string;
   link2: string;
   link3: string;
   route1 : string;
   route2: string;
   flag : boolean
  

  }

  function CustomBreadcrumbs (props: CustomBreadcrumbsProps){
    return(
        <>
  
  <div className="w-full px-4 py-3">
        <nav>
          <ul className="flex align-middle">
            <li className="mr-2 text-xs hidden lg:block">
              <Link to={props.route1}>{props.link1}</Link>
            </li>
            <li className="mr-2 text-xs font-bold hidden lg:block">/</li>
            <li className="mr-2 text-xs lg:hidden"></li>
            <li className="mr-2 text-xs">
              <Link to={props.route2}>{props.link2}</Link>
            </li>
            { props.flag ? <li className="mr-2 text-xs font-bold hidden lg:block">/</li> : <></>

            }
            
            <li className="text-xs text-gray-500 hidden lg:block">
            {props.link3}
            </li>
          </ul>
        </nav>
      </div>
      
        </>
    );
 

}
export default CustomBreadcrumbs