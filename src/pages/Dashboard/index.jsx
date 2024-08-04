import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {Spiral as Menu} from 'hamburger-react'


import Sidebar from "./Sidebar";

import { useState, useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import { request } from "../../helpers/requestHelper";
import { message } from "antd";
import { changeApp, updateApps } from "../../services/appSlice";


function Dashboard() {
  const user = useSelector((state) => state.user.user);
  const apps = useSelector((state) => state.app.apps);
  const dispatch = useDispatch()

  function deriveInitials(name) {
    let initials = "";
    const nameArray = name?.trim()?.split(" ");
    for (let i in nameArray) initials += nameArray[i][0]?.toUpperCase();

    return initials;
  }
  const windowWidth = useWindowWidth()

  useEffect(function() {
    if (windowWidth > 768) setIsSidebarOpen(true)
  }, [windowWidth])


  useEffect(function() {
    async function getApps() {
      const res = await request(`https://api.quickvalide.com/api/App`)
      if (!res.status) return message.error('An error occured while fetching your apps')

      dispatch(updateApps(res?.data))
      setSelectedApp(res.data.at(0).id)
      dispatch(changeApp(res.data.at(0).id))
    }

    getApps()
  }, [])

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedApp, setSelectedApp] = useState(null)

  function handleAppChange(e) {
    setSelectedApp(+e.target.value)
    dispatch(changeApp(selectedApp))
  }

  return (
    <main className="w-full h-full  flex ">
         <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>

        <div className="flex flex-col h-full w-full ">
        <div className="w-full p-3  flex items-center justify-between gap-1 px-8">
          <div className="text-accent-2 md:hidden" onClick={() => setIsSidebarOpen(prev => !prev)}>
            <Menu rounded size={26} toggled={isSidebarOpen}/>
          </div>

         <div className="flex items-center justify-between gap-2 w-full ">
         <div className="xs:flex flex-col gap-1  self-start  w-full hidden">
        <div>
          <p className="text-xs text-text-secondary">Select app:</p>
          {apps.length > 0 &&  <select name="apps" id="apps" className="p-2 border-[1px] rounded-md text-xs focus:outline-accent-2" value={selectedApp} onChange={(e) => handleAppChange(e)}>
            {apps?.map(app => <option value={app?.id && app?.id} key={app?.id} className="break-words">{app?.name}</option>)}
          </select>}

        </div>
        
         </div>

         <div className="flex gap-2 items-center  ml-auto ">

           <div className="w-10 h-10 text-md font-semibold bg-accent-2 rounded-full flex items-center justify-center text-white">{deriveInitials(user.name)}</div>

           <div className="hidden md:flex flex-col items-start text-xs">
             <p className="text-text-primary font-bold">{user.name}</p>
             <p className="text-text-secondary">{user.email}</p>
           </div>
         </div>
        
         </div>

       </div>
       <div className="flex flex-col gap-1  self-start p-4 w-full xs:hidden">
        <div>
          <p className="text-xs text-text-secondary">Select app:</p>
          {apps.length > 0 &&  <select name="apps" id="apps" className="p-2 border-[1px] rounded-md text-xs focus:outline-accent-2" value={selectedApp} onChange={(e) => handleAppChange(e)}>
            {apps?.map(app => <option value={app?.id && app?.id} key={app?.id} className="break-words">{app?.name}</option>)}
          </select>}

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
