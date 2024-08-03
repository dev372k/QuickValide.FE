import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {Spiral as Menu} from 'hamburger-react'


import Sidebar from "./Sidebar";

import { useState, useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";


function Dashboard() {
  const user = useSelector((state) => state.user.user);

  function deriveInitials(name) {
    let initials = "";
    const nameArray = name?.split(" ");
    for (let i in nameArray) initials += nameArray[i][0]?.toUpperCase();

    return initials;
  }
  const windowWidth = useWindowWidth()

  useEffect(function() {
    if (windowWidth > 768) setIsSidebarOpen(true)
  }, [windowWidth])


  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <main className="w-full h-full  flex ">
         <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>

        <div className="flex flex-col h-full w-full">
        <div className="w-full p-3 bg-white flex items-center justify-between gap-1 px-8">
          <div className="text-accent-2 md:hidden" onClick={() => setIsSidebarOpen(prev => !prev)}>
            <Menu rounded size={26} toggled={isSidebarOpen}/>
          </div>

         <div className="flex items-center gap-2 ml-auto">
           <div className="w-10 h-10 text-md font-semibold bg-accent-2 rounded-full flex items-center justify-center text-white">{deriveInitials(user.name)}</div>

           <div className="hidden md:flex flex-col items-start text-xs">
             <p className="text-text-primary font-bold">{user.name}</p>
             <p className="text-text-secondary">{user.email}</p>
           </div>
         </div>
       </div>
         <div>

          <Outlet />
         </div>
        </div>
    </main>
  );
}

export default Dashboard;
