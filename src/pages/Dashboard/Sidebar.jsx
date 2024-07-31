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
    <aside className="h-screen bg-white p-1 py-3 border-r-[1px] text-xs flex flex-col items-center justify-between">
      <Link to="/">
        <img src={LogoIcon} alt="Logo" className="w-8" />
      </Link>

      <div className="flex flex-col  mb-auto mt-6">
        <NavLink
          className="flex flex-col gap-1 items-center tooltip text-accent-1 hover:bg-section-background p-3 rounded-md cursor-pointer transition-all"
          to="home"
        >
          <IoHomeOutline size={24} />
          <p className="text-text-secondary tooltip-text">Home</p>
        </NavLink>
        <NavLink
          to="profile"
          className="flex flex-col gap-1 items-center tooltip text-accent-1 hover:bg-section-background p-3 rounded-md cursor-pointer transition-all"
        >
          <VscAccount size={24} />
          <p className="text-text-secondary tooltip-text">Profile</p>
        </NavLink>
        <NavLink
          to="analytics"
          className="flex flex-col gap-1 items-center tooltip text-accent-1 hover:bg-section-background p-3 rounded-md cursor-pointer transition-all"
        >
          <TbBrandGoogleAnalytics size={24} />
          <p className="text-text-secondary text-center tooltip-text">
            Google
            <br /> Analytics
          </p>
        </NavLink>
        <NavLink
          to="seo"
          className="flex flex-col gap-1 items-center tooltip  text-accent-1 hover:bg-section-background p-3 rounded-md cursor-pointer transition-all"
        >
          <TbSeo size={24} />
          <p className="text-text-secondary tooltip-text">SEO</p>
        </NavLink>
        <NavLink
          to="waitlist"
          className="flex flex-col gap-1 items-center tooltip text-accent-1 hover:bg-section-background p-3 rounded-md cursor-pointer transition-all"
        >
          <img src={Wailist} alt="Waitlist icon" className="w-5" />
          <p className="text-text-secondary tooltip-text">Waitlist</p>
        </NavLink>
        <NavLink
          to="builder"
          className="flex flex-col gap-1 items-center tooltip text-accent-1 hover:bg-section-background p-3 rounded-md cursor-pointer transition-all"
        >
          <img src={Builder} alt="builder icon" className="w-6" />
          <p className="text-text-secondary tooltip-text">Builder</p>
        </NavLink>
      </div>

      <div className="flex flex-col text-accent-1 ">
        <NavLink
          to="settings"
          className="hover:bg-section-background p-3 rounded-md tooltip cursor-pointer transition-all"
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
