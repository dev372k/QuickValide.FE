import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {request} from '../../helpers/requestHelper'
import { message } from "antd";

import { useForm } from "react-hook-form";

import { updateApps } from "../../services/appSlice";

import CustomLoader from "../../components/CustomLoader";

function DashboardSettings() {
  const [isLive, setIsLive] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [appData, setAppData] = useState(null)

  const appId = useSelector(state => state.app.appId)

  const dispatch = useDispatch()

  const {register, formState: {errors}, watch, reset, getValues} = useForm()

  const appName = watch('name')
  let domainName = ""

  async function handleAppUpdate(e) {
      e.preventDefault()
      
      let app = getValues().name
      if (!app) return message.error('App name is required')
        domainName = app?.trim()?.toLowerCase()?.replace(/[' ']+/g, '-')
      const data = {
        name: app,
        domain: domainName
      }
      
      
      setIsLoading(true)
      const res = await request(`https://api.quickvalide.com/api/Setting/${appId}`, 'PUT', data)
      setIsLoading(false)
      
      if (res.status) {
        message.success('App updated successfully')
        updateAppsData()
      }
      else message.error('An error occured while updating the app')
  }

  async function updateAppsData() {
    const res = await request('https://api.quickvalide.com/api/App')
    dispatch(updateApps(res?.data))
  }

  useEffect(function() {
    document.title = "Settings | Dashboard"
    domainName = appName?.trim()?.toLowerCase()?.replace(/[' ']+/g, '-')
    reset({
      domain: domainName
    })
  }, [appName])


  async function updateAppStatus() {
        const res = await request(`https://api.quickvalide.com/api/Setting/${appId}/${isLive}`, 'PUT')
        if (res.status) message.success('Changed app running status successfully')
          else message.error('An error occured while changing the app status')
      }

      function handleCancelUpdate() {
        reset({
          name: ''
        })
      }


  return <div className="w-full flex flex-col gap-8 mt-3 pb-6  px-6 md:px-12 lg:px-24 text-text-primary">
    {isLoading &&<CustomLoader />}
    <div>
      <h2 className="text-2xl font-bold tracking-wider">Settings</h2>
    </div>

    <div className="flex flex-col gap-3 mt-6">
      <h3 className="text-xl font-medium">App status</h3>
      <form>
        
      <div className="text-text-secondary">
      <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" checked={isLive} onChange={() => {
    setIsLive(prev => !prev)
    updateAppStatus()
    }}/>

  <span className="text-sm font-medium   mr-3">Deactivate</span>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-accent-1   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-accent-1"></div>
  <span className="ms-3 text-sm font-medium text-text-primary">Activate</span>
</label>

      </div>
        </form>
    </div>


    <form className="flex flex-col gap-2" onSubmit={handleAppUpdate}>
      <h3 className="text-xl font-medium">App details</h3>
      
      <div className="text-sm flex flex-col gap-1">
        <label htmlFor="name" className="text-xs">App name:</label>
        <input type="text" placeholder="App name" className="w-full md:w-1/2 p-3 rounded-lg border-[1px] focus:outline-none focus:border-accent-2" {...register('name', {required: 'App name is required'})}/>
        {errors?.name && <p className="text-xs font-medium text-error">{errors.name.message}</p>}
      </div>
      <div className="text-sm flex flex-col gap-1">
        <label htmlFor="name" className="text-xs">Domain:</label>
        <input type="text" placeholder="App domain" value={appData?.domain} className="w-full md:w-1/2 p-3 rounded-lg border-[1px] focus:outline-none focus:border-accent-2" disabled  {...register('domain', {required: 'App domain is required'})}/>

      </div>

      <div className="flex w-full md:w-1/2 gap-2">
        <button type="button" onClick={handleCancelUpdate} className="w-full p-2 text-xs border-[1px] rounded-lg text-text-primary hover:bg-gray-50 transition-all">Cancel</button>
        <button type="submit" className="w-full p-2 text-xs bg-accent-1 rounded-lg font-semibold text-white hover:bg-opacity-80 disabled:bg-gray-600" >Update</button>
      </div>
    </form>
  </div>;
}

export default DashboardSettings;
