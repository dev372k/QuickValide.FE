import { request } from "../../helpers/requestHelper";
import { useState, useEffect } from "react";
import { GridLoader} from 'react-spinners'
import {Spin} from 'antd'


import { IoMdAdd } from "react-icons/io";
import AppCard from "../../components/AppCard";

function DashboardHome() {
  const [apps, setApps] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(function () {
    document.title = "Home | Dashboard"
    async function getApps() {
      setIsLoading(true)
      const res = await request("https://api.quickvalide.com/api/App");
      setApps(res.data);
      setIsLoading(false)
    }

    getApps();
  }, []);
  return (
    <div className="p-3 w-full px-6 md:px-12 lg:px-24">
      <div className="mt-3">
        <div className="flex  items-center justify-between flex-wrap gap-8">
          <div>

          <h2 className="text-2xl font-bold text-text-primary">Your Apps</h2>
          <p className="text-sm text-text-secondary">
            Your awesome apps for your awesome businesses
          </p>
          </div>
        </div>

        
          {!isLoading ? (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 mt-12">
              <div className="p-4 rounded-md flex flex-col border-dashed border-2 border-accent-2 bg-white text-sm  items-center justify-center text-accent-1 font-semibold hover:bg-section-background hover:cursor-pointer">
                <IoMdAdd size={36} />
                <span>Create New App</span>
              </div>
              {apps.map((app) => (
                <AppCard app={app} key={app?.id}/>
              ))}
            </div>
          ) : (
            <div className="w-full flex items-center justify-center h-96">
              <Spin size="large" tip="Loading... Please wait" ><div className="p-24"></div></Spin>

            </div>
          )}
          
       
      </div>
    </div>
  );
}

export default DashboardHome;
