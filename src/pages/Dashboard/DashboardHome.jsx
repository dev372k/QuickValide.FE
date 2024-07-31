import { request } from "../../helpers/requestHelper";
import { useState, useEffect } from "react";

import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

function DashboardHome() {
  const [apps, setApps] = useState([]);
  useEffect(function () {
    async function getApps() {
      const res = await request("https://api.quickvalide.com/api/App");
      setApps(res.data);
      console.log(res);
    }

    getApps();
  }, []);
  return (
    <div className="p-3">
      <div className="mt-3">
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-semibold text-accent-1">Your Apps</h2>
          <p className="text-sm text-text-secondary">
            Your awesome apps for your awesome businesses
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mt-8">
          {apps.length > 0 ? (
            <>
              <div className="p-4 rounded-md flex flex-col border-dashed border-2 border-accent-2 bg-white min-h-32 text-sm  items-center justify-center text-accent-1 font-semibold hover:bg-section-background hover:cursor-pointer">
                <IoMdAdd size={36} />
                <span>Create New App</span>
              </div>
              {apps.map((app) => (
                <div className="p-4 rounded-md relative border-[1px] bg-white min-h-32 text-sm flex items-center justify-center">
                  <div className="text-error absolute top-3 right-3 p-2 rounded-full hover:bg-error hover:bg-opacity-10">
                    <MdDeleteOutline size={24} />
                  </div>
                  <h3 className="w-full">{app.name}</h3>
                </div>
              ))}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
