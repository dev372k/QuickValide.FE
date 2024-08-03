import { request } from "../../helpers/requestHelper";
import { useState, useEffect } from "react";
import { GridLoader} from 'react-spinners'


import { IoMdAdd } from "react-icons/io";
import AppCard from "../../components/AppCard";

function DashboardHome() {
  const [apps, setApps] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(function () {
    async function getApps() {
      setIsLoading(true)
      const res = await request("https://api.quickvalide.com/api/App");
      setApps(res.data);
      setIsLoading(false)
    }

    getApps();
  }, []);
  return (
    <div className="p-3 w-full">
      <div className="mt-3">
        <div className="flex  items-center justify-between flex-wrap gap-8">
          <div>

          <h2 className="text-2xl font-bold text-text-primary">Your Apps</h2>
          <p className="text-sm text-text-secondary">
            Your awesome apps for your awesome businesses
          </p>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <p className="text-xs text-text-secondary">Select app:</p>
          <select name="apps" id="apps" className="p-2 border-[1px] rounded-md text-xs">
            {apps?.map(app => <option value={app?.id}>{app?.name}</option>)}
          </select>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 mt-12">
        
          {apps.length > 0 ? (
            <>
              <div className="p-4 rounded-md flex flex-col border-dashed border-2 border-accent-2 bg-white text-sm  items-center justify-center text-accent-1 font-semibold hover:bg-section-background hover:cursor-pointer">
                <IoMdAdd size={36} />
                <span>Create New App</span>
              </div>
              {apps.map((app) => (
                <AppCard />
              ))}
            </>
          ) : (
            <div className=" w-[calc(100vw-350px)]  mt-16 flex items-center justify-center">
              <GridLoader color="#00BCD4" size={15} />

            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
