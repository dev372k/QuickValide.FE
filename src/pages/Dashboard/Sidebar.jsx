import { removeToken } from "../../helpers/jwtHelper";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink, Link } from "react-router-dom";

import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { TbSeo } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { PiSignOutLight } from "react-icons/pi";
import { FaListUl } from "react-icons/fa6";
import { MdOutlineBuild } from "react-icons/md";

import { IoHomeOutline } from "react-icons/io5";
import { logoutUser } from "../../services/userSlice";
import { Rotate as Hamburger } from "hamburger-react";
import Logo from "../../assets/logo-no-background.svg";
import { request } from "../../helpers/requestHelper";

import { useState } from "react";
import { updateApps } from "../../services/appSlice";
import CreateAppModal from "../../components/CreateAppModal";

import { motion } from "framer-motion";

const sidebarVariants = {
	open: {
		opacity: 1,
		width: "auto",
		display: "flex",
		transition: {
			ease: "easeOut",
			duration: 0.2,
		},
	},
	closed: {
		display: "none",
		opacity: 0,
		width: 0,
		transition: {
			ease: "easeOut",
			duration: 0.2,
		},
	},
};

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [showCreateAppModal, setShowCreateAppModal] = useState(false);

	async function refreshApps() {
		const res = await request("https://api.quickvalide.com/api/App");
		dispatch(updateApps(res?.data));
		console.log(res);
	}

	function handleLogout() {
		removeToken();
		dispatch(logoutUser());
		navigate("/login");
	}
	return (
		<>
			<CreateAppModal
				showCreateAppModal={showCreateAppModal}
				setShowCreateAppModal={setShowCreateAppModal}
				refreshApps={refreshApps}
			/>
			<motion.aside
				variants={sidebarVariants}
				initial={isSidebarOpen ? "open" : "closed"}
				animate={isSidebarOpen ? "open" : "closed"}
				className='h-screen absolute md:relative z-10 top-0 left-0 bottom-0 bg-white border-r-[1px] text-xs flex flex-col items-center justify-between bg-opacity-40 backdrop-blur-lg'
			>
				{isSidebarOpen && (
					<div
						onClick={() => setIsSidebarOpen(false)}
						className='absolute top-1 md:hidden left-3 text-accent-2 p-[2px] rounded-full hover:bg-gray-100'
					>
						<Hamburger size={18} toggled={true} />
					</div>
				)}
				<Link to='/' className='p-6 mt-8 md:mt-0'>
					<img src={Logo} alt='Logo' className='w-48' />
				</Link>

				<div className='w-full px-3 mb-3'>
					<button
						onClick={() => setShowCreateAppModal(true)}
						className='p-2 text-sm rounded-full border-[1px] w-full border-accent-2 text-text-primary font-semibold hover:bg-accent-2 hover:text-white transition-all'
					>
						Create App
					</button>
				</div>
				<div className='flex flex-col  mb-auto w-full pr-1'>
					<NavLink
						className={({ isActive }) =>
							isActive
								? "w-full px-16 py-3 flex items-center gap-2 text-md  hover:bg-opacity-75 bg-accent-1 text-white rounded-r-full transition-all"
								: "transition-all w-full px-16 py-3 flex items-center gap-2 text-md text-text-primary hover:bg-opacity-75 rounded-r-full"
						}
						to='home'
					>
						<IoHomeOutline size={22} />
						<p className='text-[15px] font-medium'>Home</p>
					</NavLink>
					<NavLink
						to='profile'
						className={({ isActive }) =>
							isActive
								? "w-full px-16 py-3 flex items-center gap-2 text-md  hover:bg-opacity-75 bg-accent-1 text-white rounded-r-full transition-all"
								: "transition-all w-full px-16 py-3 flex items-center gap-2 text-md text-text-primary hover:bg-opacity-75 rounded-r-full"
						}
					>
						<VscAccount size={20} />
						<p className='text-[15px] font-medium'>Profile</p>
					</NavLink>
					<NavLink
						to='analytics'
						className={({ isActive }) =>
							isActive
								? "w-full px-16 py-3 flex items-center gap-2 text-md  hover:bg-opacity-75 bg-accent-1 text-white rounded-r-full transition-all"
								: "transition-all w-full px-16 py-3 flex items-center gap-2 text-md text-text-primary hover:bg-opacity-75 rounded-r-full"
						}
					>
						<TbBrandGoogleAnalytics size={20} />
						<p className='text-[15px] font-medium'>Analytics</p>
					</NavLink>
					<NavLink
						to='seo'
						className={({ isActive }) =>
							isActive
								? "w-full px-16 py-3 flex items-center gap-2 text-md  hover:bg-opacity-75 bg-accent-1 text-white rounded-r-full transition-all"
								: "transition-all w-full px-16 py-3 flex items-center gap-2 text-md text-text-primary hover:bg-opacity-75 rounded-r-full"
						}
					>
						<TbSeo size={20} />
						<p className='text-[15px] font-medium'>SEO</p>
					</NavLink>
					<NavLink
						to='waitlist'
						className={({ isActive }) =>
							isActive
								? "w-full px-16 py-3 flex items-center gap-2 text-md  hover:bg-opacity-75 bg-accent-1 text-white rounded-r-full transition-all"
								: "transition-all w-full px-16 py-3 flex items-center gap-2 text-md text-text-primary hover:bg-opacity-75 rounded-r-full"
						}
					>
						<FaListUl size={20} />
						<p className='text-[15px] font-medium'>Waitlist</p>
					</NavLink>
					<NavLink
						to='builder'
						className={({ isActive }) =>
							isActive
								? "w-full px-16 py-3 flex items-center gap-2 text-md  hover:bg-opacity-75 bg-accent-1 text-white rounded-r-full transition-all"
								: "transition-all w-full px-16 py-3 flex items-center gap-2 text-md text-text-primary hover:bg-opacity-75 rounded-r-full"
						}
					>
						<MdOutlineBuild size={20} />
						<p className='text-[15px] font-medium'>Builder</p>
					</NavLink>
				</div>

				<div className='flex flex-col text-accent-1 w-full pr-1'>
					<NavLink
						to='settings'
						className={({ isActive }) =>
							isActive
								? "w-full px-16 py-3 flex items-center gap-2 text-md  hover:bg-opacity-75 bg-accent-1 text-white rounded-r-full transition-all"
								: "transition-all w-full px-16 py-3 flex items-center gap-2 text-md text-text-primary hover:bg-opacity-75 rounded-r-full"
						}
					>
						<IoSettingsOutline size={20} />
						<p className='text-[15px] font-medium'>Settings</p>
					</NavLink>
					<div
						onClick={handleLogout}
						className='hover:bg-gray-100 p-3 flex items-center rounded-r-full gap-2 rounded-md cursor-pointer transition-all px-16 '
					>
						<PiSignOutLight size={20} />
						<p className='text-[15px] font-medium'>Sign out</p>
					</div>
				</div>
			</motion.aside>
		</>
	);
}

export default Sidebar;
