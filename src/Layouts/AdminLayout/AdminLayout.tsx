
import { Outlet } from "react-router-dom";

import VerticalTabs from "src/Components/Panel/VerticalTabs";
function AdminLayout() {
  return (
    <>
      <VerticalTabs />
  

      <Outlet />
      
    </>
  );
}

export default AdminLayout;
