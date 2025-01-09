import { Outlet } from "react-router-dom";
import Sidebar from "./components/elements/Sidebar";
function Layout(){
  return(
    <div className="relative">
       <Sidebar />
       <div  className="relative z-0">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout