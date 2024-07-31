import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "./Sidebar";

function Dashboard() {
  const user = useSelector((state) => state.user.user);

  function deriveInitials(name) {
    let initials = "";
    const nameArray = name?.split(" ");
    for (let i in nameArray) initials += nameArray[i][0]?.toUpperCase();

    return initials;
  }

  return (
    <main className="w-full min-h-screen bg-section-background flex">
      <Sidebar />

      <div className="p-3 w-full flex flex-col gap-2">
        <div className="flex items-center gap-2 w-full p-3 border-b-[1px] ml-auto">
          <div className="w-10 h-10 text-sm leading-[0.5] p-1 flex items-center justify-center text-white rounded-full bg-accent-2">
            {deriveInitials(user?.Name)}
          </div>
          <div className="flex flex-col text-sm text-text-primary">
            <p className="font-semibold">{user?.Name}</p>
            <p className="text-xs text-text-secondary">{user?.Email}</p>
          </div>
        </div>

        <Outlet />
      </div>
    </main>
  );
}

export default Dashboard;
