
import { Outlet } from "react-router-dom";
import HomeDrawer from "./HomeDrawer";

import HomeFooter from "./HomeFooter";
import HomeNavbar from "./HomeNavbar";

function HomeMainLayout() {
  return (
    <>
      <HomeNavbar />
      <HomeDrawer />
      <Outlet />
      <HomeFooter />
    </>
  );
}

export default HomeMainLayout;
