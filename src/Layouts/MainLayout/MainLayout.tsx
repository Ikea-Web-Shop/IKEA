
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
function MainLayout() {
  return (
    <>
      <Navbar />
      <Drawer />

      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
