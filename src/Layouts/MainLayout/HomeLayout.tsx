
import { Outlet } from "react-router-dom";

import HomeFooter from "./HomeFooter";
import HomeNavbar from "./HomeNavbar";

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
