import { Outlet } from "react-router-dom";
import Sidebar from "./components/elements/Sidebar";
function Layout(){
  return(
    <div className="relative">
       <Sidebar />
       <div style={{ padding: "20px", position: "relative", zIndex: 0 }}>
        <Outlet />
      </div>
    </div>
  )
};

export default Layout