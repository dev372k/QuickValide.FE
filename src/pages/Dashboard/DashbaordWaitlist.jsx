import { request } from "../../helpers/requestHelper";

import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Spin } from "antd";

function DashboardWaitlist() {
  const appId = useSelector(state => state.app.appId)
  const waitlist = useSelector(state => state.app.waitlist)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(function() {
    document.title = "Waitlist | Dashboard"
    async function getWaitlist() {

      setIsLoading(true)
      const res = await request(`https://api.quickvalide.com/api/Waitlist/${appId}`)
      setIsLoading(false)
      console.log(res)
    }

    getWaitlist()
  }, [appId])


  return <div className="w-full flex flex-col gap-8 mt-3  px-6 md:px-12 lg:px-24 text-text-primary ">
   
   <table class="w-full border-collapse rounded-lg overflow-hidden text-sm">
  <thead className=" bg-gray-50">
    <tr>
      <th class="border px-4 py-2">Email</th>
      <th class="border px-4 py-2">Selected Plan</th>
    </tr>
  </thead>
  <tbody>
 
    
   
  
  
    {waitlist && waitlist.map(listItem => (<tr>
      <td class="border px-4 py-2">{listItem.email}</td>
      <td class="border px-4 py-2">{listItem.selectedPlan}</td>
     
    </tr>))}
    
   
  </tbody>
</table>
<div className="w-full">
{isLoading ?  <div><Spin size="default" tip="Loading... Please wait" ><div className="p-24"></div></Spin></div> : !waitlist
     ? <p className="text-center p-3 text-md font-medium">No data</p> : null}

</div>
</div>
  
 ;
}

export default DashboardWaitlist;
