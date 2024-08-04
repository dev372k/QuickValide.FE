import { useSelector } from "react-redux";
import { request } from "../../helpers/requestHelper";
import { message } from "antd";
import { useState } from "react";

function DashboardAnalytics() {
  const appId = useSelector(state => state.app.appId)

  const [isLoadingGet, setIsLoadingGet] = useState(false)
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)

  async function handleGetAnalytics() {

    setIsLoadingGet(true)
    const res = await request(`https://api.quickvalide.com/api/App/${appId}/analytics`)
    setIsLoadingGet(false)


    if (!res.status) return message.error(res.message)
    else message.success('Analytics retrieved successfully')

  }

  async function handleUpdateAnalytics() {

    setIsLoadingUpdate(true)
    const res = await request(`https://api.quickvalide.com/api/App/${appId}/analytics
`, 'PATCH', {url: 'this-will-be-changed-later'})

      setIsLoadingUpdate(false)

      console.log(res)
      
    if (!res.status) return message.error(res.message)
      else message.success('Analytics updated successfully')
  }


  return <div className="w-full flex flex-col gap-8 mt-3  px-6 md:px-12 lg:px-24 text-text-primary">
    <div>
      <h2 className="text-2xl font-bold tracking-wider">Analytics</h2>
    </div>

    <div className="text-sm flex items-center gap-3 font-medium">
      <button className="p-2 px-3 rounded-lg border-[1px] hover:bg-gray-50 disabled:bg-gray-200 " disabled={isLoadingGet} onClick={handleGetAnalytics}>{isLoadingGet ? 'Loading...' : 'Get Analytics'}</button>
      <button  className="p-2 px-3 rounded-lg bg-accent-1 text-white hover:bg-opcaity-80 disabled:bg-gray-600" disabled={isLoadingUpdate} onClick={handleUpdateAnalytics} >{isLoadingUpdate ? 'Loading...' : 'Update Analytics'}</button>
    </div>
  </div>;
}

export default DashboardAnalytics;
