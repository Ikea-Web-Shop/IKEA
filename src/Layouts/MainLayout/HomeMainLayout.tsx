
import { Outlet } from "react-router-dom";

import HomeFooter from "./HomeFooter/Footer";
import HomeNavbar from "./HomeNavbar/HomeNavbar";

function HomeMainLayout() {
  return (
    <>
      <HomeNavbar />
      <Outlet />
      <HomeFooter />
    </>
  );
}

export default HomeMainLayout;
