import { request } from "../../helpers/requestHelper";
import { useState, useEffect } from "react";

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
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">Home</h1>
      </div>

      <div className="mt-3">
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-semibold text-accent-1">Your Apps</h2>
          <p className="text-sm text-text-secondary">
            Your awesome apps for your awesome businesses
          </p>
        </div>

        <div className="w-full flex items-center justify-center gap-4 mt-8">
          {apps.length > 0 ? (
            <>
              <div className="p-4 rounded-md bg-white min-h-32 text-sm flex items-center justify-center">
                + Create New App &rarr;
              </div>
              {apps.map((app) => (
                <div className="p-4 rounded-md border-[1px] bg-white min-h-32 text-sm flex items-center justify-center">
                  <h3>{app.name}</h3>
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
