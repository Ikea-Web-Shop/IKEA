
import { Menu } from "./Menu";
import {userData} from "./data"
import { useState } from "react";

function UserPanel(){
  const [item] = useState(userData);

    return (
        <>
        {/* <Menu title={item.title} image={item.image}/> */}

        <p className="m-44">salam</p>
        </>
    )
}
export default UserPanel;