import LogoIcon from "../../../public/favicon.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../../helpers/jwtHelper";
import { useDispatch } from "react-redux";

import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { TbSeo } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import Wailist from "../../assets/waitlist.svg";
import Builder from "../../assets/builder.svg";
import { PiSignOutLight } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { logoutUser } from "../../services/userSlice";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    removeToken();
    dispatch(logoutUser());
    navigate("/login");
  }
  return (
    <aside className="sticky h-[calc(100vh-64px)] bg-white p-1 py-3  text-xs flex flex-col items-center justify-between flex-wrap">
    
      <div className="flex flex-col  mb-auto">
        <NavLink
          className={({ isActive }) =>
            isActive ? "sidebar-active" : "sidebar-inactive"
          }
          to="home"
        >
          <IoHomeOutline size={24} />
          <p className="text-text-secondary tooltip-text">Home</p>
        </NavLink>
        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive ? "sidebar-active" : "sidebar-inactive"
          }
        >
          <VscAccount size={24} />
          <p className="text-text-secondary tooltip-text">Profile</p>
        </NavLink>
        <NavLink
          to="analytics"
          className={({ isActive }) =>
            isActive ? "sidebar-active" : "sidebar-inactive"
          }
        >
          <TbBrandGoogleAnalytics size={24} />
          <p className="text-text-secondary text-center tooltip-text">
            Google
            <br /> Analytics
          </p>
        </NavLink>
        <NavLink
          to="seo"
          className={({ isActive }) =>
            isActive ? "sidebar-active" : "sidebar-inactive"
          }
        >
          <TbSeo size={24} />
          <p className="text-text-secondary tooltip-text">SEO</p>
        </NavLink>
        <NavLink
          to="waitlist"
          className={({ isActive }) =>
            isActive ? "sidebar-active" : "sidebar-inactive"
          }
        >
          <img src={Wailist} alt="Waitlist icon" className="w-5" />
          <p className="text-text-secondary tooltip-text">Waitlist</p>
        </NavLink>
        <NavLink
          to="builder"
          className={({ isActive }) =>
            isActive ? "sidebar-active" : "sidebar-inactive"
          }
        >
          <img src={Builder} alt="builder icon" className="w-6" />
          <p className="text-text-secondary tooltip-text">Builder</p>
        </NavLink>
      </div>

      <div className="flex flex-col text-accent-1 ">
        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive ? "sidebar-active" : "sidebar-inactive"
          }
        >
          <IoSettingsOutline size={24} />
          <p className="text-text-secondary tooltip-text">Settings</p>
        </NavLink>
        <div
          onClick={handleLogout}
          className="hover:bg-section-background p-3 tooltip rounded-md cursor-pointer transition-all"
        >
          <PiSignOutLight size={24} />
          <p className="text-text-secondary tooltip-text">Sign out</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
