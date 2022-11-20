
import { Outlet } from "react-router-dom";


import Navbar from "./Navbar";

function UserLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
     
    </>
  );
}

export default UserLayout;
