import { useSelector } from "react-redux";
import { request } from "../../helpers/requestHelper";
import { message } from "antd";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import CustomLoader from "../../components/CustomLoader";

function DashboardAnalytics() {
  const appId = useSelector(state => state.app.appId)

  const [isLoadingGet, setIsLoadingGet] = useState(false)
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
  const [url, setUrl] = useState('')

  const {register, handleSubmit, formState: {errors}, reset} = useForm()


  useEffect(function() {
    document.title = "Analytics | Dashboard"
    if (appId)
    handleGetAnalytics()
  }, [appId]) 

  async function handleGetAnalytics() {

    setIsLoadingGet(true)
    const res = await request(`https://api.quickvalide.com/api/App/${appId}/analytics`)
    setIsLoadingGet(false)
    

    if (!res.status) return message.error(res.message)

    setUrl(res?.data?.url)
    reset({
      url: res?.data?.url
    })

  }

  async function handleUpdateAnalytics(data) {
    setIsLoadingUpdate(true)
    const res = await request(`https://api.quickvalide.com/api/App/${appId}/analytics
`, 'PATCH', {url: data.url})

      setIsLoadingUpdate(false)

      
    if (!res.status) return message.error(res.message)
    else message.success('Analytics updated successfully')
    setUrl(data?.url)
  }

  function handleCancelUpdate(e) {
    reset({
      url: url
    })
  }


  return <div className="w-full flex flex-col gap-8 mt-3  px-6 md:px-12 lg:px-24 text-text-primary">
    {isLoadingGet && <CustomLoader />}
    {isLoadingUpdate && <CustomLoader />}
    <div>
      <h2 className="text-2xl font-bold tracking-wider">Analytics</h2>
    </div>

    <form className="flex flex-col gap-3 w-full md:w-3/4 lg:w-[35rem]" onSubmit={handleSubmit(handleUpdateAnalytics)}>
      <div className="w-full flex flex-col gap-1">

      <label htmlFor="url" className="text-text-secondary text-xs">URL:</label>
      <input type="text" placeholder="Enter url" className="p-3 text-sm rounded-lg border text-text-primary focus:outline-none focus:border-accent-2" {...register('url', {required: 'URL is required'})}/>
      {errors?.url && <p className="text-xs font-medium text-error">{errors.url.message}</p>}
      </div>
      <div className="text-sm flex items-center gap-3 font-medium">
      <button type="button" className="p-2 px-3 rounded-lg border-[1px] hover:bg-gray-50 disabled:bg-gray-200 " onClick={handleCancelUpdate}  >Cancel</button>
      <button type="submit" className="p-2 px-3 rounded-lg bg-accent-1 text-white hover:bg-opcaity-80 " >Update</button>
    </div>
    </form>

   
  </div>;
}

export default DashboardAnalytics;
