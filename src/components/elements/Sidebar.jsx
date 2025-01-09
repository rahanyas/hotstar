// import { NavLink } from "react-router-dom";
// import { FaHome, FaTv, FaFilm, FaBasketballBall, FaSearch } from "react-icons/fa";
// // import { Outlet } from "react-router-dom";
// function Sidebar() {
//   return (
//     <div className="h-screen w-36 flex flex-col items-center fixed">
//       <img
//         src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
//         alt="disney-logo"
//         className="mt-4 cursor-pointer"
//       />

//       <div className="flex flex-col items-center w-full">
//         <ul className=" mt-28 p-4 rounded-md flex flex-col gap-12 items-start group text-white">
//           <li>
//             <NavLink
//               to="/search"
//               className="flex items-center gap-2 transition-all duration-300"
//             >
//               <FaSearch className="text-lg" />
//               <span className="ml-2 opacity-0 transform translate-x-[-20px] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
//                 Search
//               </span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/"
//               className="flex items-center gap-2 transition-all duration-300"
//             >
//               <FaHome className="text-lg" />
//               <span className="ml-2 opacity-0 transform translate-x-[-20px] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
//                 Home
//               </span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/tv"
//               className="flex items-center gap-2 transition-all duration-300"
//             >
//               <FaTv className="text-lg" />
//               <span className="ml-2 opacity-0 transform translate-x-[-20px] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
//                 TV
//               </span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/movies"
//               className="flex items-center gap-2 transition-all duration-300"
//             >
//               <FaFilm className="text-lg" />
//               <span className="ml-2 opacity-0 transform translate-x-[-20px] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
//                 Movies
//               </span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/sports"
//               className="flex items-center gap-2 transition-all duration-300"
//             >
//               <FaBasketballBall className="text-lg" />
//               <span className="ml-2 opacity-0 transform translate-x-[-20px] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
//                 Sports
//               </span>
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       {/* <main className="content">
        
//         <Outlet />
//       </main> */}
//     </div>
//   );
// }

// export default Sidebar;



import { NavLink } from "react-router-dom";
import { FaHome, FaTv, FaFilm, FaBasketballBall, FaSearch } from "react-icons/fa";

function Sidebar() {
  return (
    <div
      className="h-screen w-36 flex flex-col items-center fixed top-0 left-0 bg-transparent z-10"
      style={{ backdropFilter: "blur(2px)" }}
    >
      <img
        src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
        alt="disney-logo"
        className="mt-4 cursor-pointer"
      />

      <div className="flex flex-col items-center w-full">
        <ul className="mt-28 p-4 rounded-md flex flex-col gap-12 items-start group text-white">
          <li>
            <NavLink
              to="/search"
              className="flex items-center gap-2 transition-all duration-300"
            >
              <FaSearch className="text-lg" />
              <span className="ml-2 opacity-0 transform translate-x-[-20px] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Search
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="flex items-center gap-2 transition-all duration-300"
            >
              <FaHome className="text-lg" />
              <span className="ml-2 opacity-0 transform translate-x-[-20px] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Home
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tv"
              className="flex items-center gap-2 transition-all duration-300"
            >
              <FaTv className="text-lg" />
              <span className="ml-2 opacity-0 transform translate-x-[-20px] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                TV
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className="flex items-center gap-2 transition-all duration-300"
            >
              <FaFilm className="text-lg" />
              <span className="ml-2 opacity-0 transform translate-x-[-20px] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Movies
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sports"
              className="flex items-center gap-2 transition-all duration-300"
            >
              <FaBasketballBall className="text-lg" />
              <span className="ml-2 opacity-0 transform translate-x-[-20px] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Sports
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
