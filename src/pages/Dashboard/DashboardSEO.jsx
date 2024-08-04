import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TagsInput } from "react-tag-input-component";
import { useForm } from "react-hook-form";

import {request} from '../../helpers/requestHelper'
import { message } from "antd";
import { updateSeo } from "../../services/appSlice";


function DashboardSEO() {
  const [keywords, setKeywords] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const appSEO = useSelector(state => state.app.seo)
  const {register, handleSubmit, formState: {errors}, reset} = useForm()

  let appId = useSelector(state => state.app.appId)
  const dispatch = useDispatch()

  async function onSubmit(data) {
    data['keywords'] = keywords.join(',')

    setIsLoading(true)
    const res = await request(`https://api.quickvalide.com/api/App/${appId}/seo
`, 'PATCH', data)
setIsLoading(false)
dispatch(updateSeo(data))

      if (res.status) message.success('App updated successfully')
      else message.error('An error occured while updating app')

  }

  useEffect(() => {
    if (appSEO) {
      reset({
        title: appSEO.title,
        description: appSEO.description,
        ogTitle: appSEO.ogTitle,
        ogDescription: appSEO.ogDescription
      });
      setKeywords(appSEO.keywords ? appSEO.keywords.split(',') : []);
    }
  }, [appSEO, reset]);

  useEffect(function() {
    async function getSeo() {
      if (appSEO) {
        reset({
          title: appSEO.title,
          description: appSEO.description,
          ogTitle: appSEO.ogTitle,
          ogDescription: appSEO.ogDescription
        });
        console.log(appSEO)
        setKeywords(appSEO.keywords ? appSEO.keywords.split(',') : []);
      }
      const res = await request(`https://api.quickvalide.com/api/App/${appId}/seo`)
      if (!res.status) return message.error('An error occured while getting SEO data')
        dispatch(updateSeo(res.data))
    }
    if (appId)
      getSeo()
  }, [appId])

  return  <div className="w-full flex flex-col gap-8 mt-3 pb-8  px-6 md:px-12 lg:px-24 text-text-primary overflow-y-scroll h-[calc(100vh-170px)]">
  <div>
    <h2 className="text-2xl font-bold tracking-wider">SEO <span className="text-xl font-medium text-text-secondary">(Search Engine Optimization)</span></h2>
  </div>

  <form className="text-sm flex flex-col w-full md:w-3/4 lg:w-[35rem] gap-3 text-text-primary" onSubmit={handleSubmit(onSubmit)}>
    <div className="flex flex-col gap-1">
      <label htmlFor="title">Title:</label>
      <p className="text-xs">This is the title which will be shown in browsers</p>
      <input type="text" placeholder="Title" className="text-sm p-3 rounded-lg border-[1px] text-text-primary focus:outline-none focus:border-accent-2" id="title" {...register('title', {
        required: 'Title is required',
       
      })}/>
      {errors?.title && <p className="text-xs font-medium text-error">{errors.title.message}</p>}
    </div>
    <div className="flex flex-col gap-1">
      <label htmlFor="description">Description:</label>
      <p className="text-xs">This is the description which will help in your SEO</p>
      <textarea type="text" placeholder="Description" className="text-sm p-3 rounded-lg border-[1px] text-text-primary focus:outline-none focus:border-accent-2" id="description" rows={5} {...register('description', {
        required: 'Description is required'
      })}></textarea>
      {errors?.description && <p className="text-xs font-medium text-error">{errors.description.message}</p>}
    </div>
    <div className="flex flex-col gap-1">
      <label htmlFor="og:title">OG Title:</label>
      <p className="text-xs">This title will be shown when you share your site on Social Media</p>
      <input type="text" placeholder="OG Title" className="text-sm p-3 rounded-lg border-[1px] text-text-primary focus:outline-none focus:border-accent-2" id="og:title"  {...register('ogTitle', {
        required: 'OG title is required'
      })}/>
      {errors?.ogTitle && <p className="text-xs font-medium text-error">{errors.ogTitle.message}</p>}
    </div>
    <div className="flex flex-col gap-1">
      <label htmlFor="og:description">OG Description:</label>
      <p className="text-xs">This description will be shown when you share your site on Social Media</p>
      <textarea type="text" placeholder="OG Description" className="text-sm p-3 rounded-lg border-[1px] text-text-primary focus:outline-none focus:border-accent-2" id="og:description"  rows={5} {...register('ogDescription', {
        required: 'OG Description is required',
        
      })}></textarea>
      {errors?.ogDescription && <p className="text-xs font-medium text-error">{errors.ogDescription.message}</p>}
    </div>
    <div className="flex flex-col gap-1">
      <label htmlFor="keywords">Keywords:</label>
      <TagsInput value={keywords} onChange={setKeywords} name="keywords" placeHolder="Enter keywords" classNames={{input: 'p-2'}}/>
    </div>

    <div className="flex w-full text-sm items-center gap-2">
      <button className="w-full p-2 border-[1px] font-semibold rounded-lg hover:bg-gray-50">Cancel</button>
      <button className="w-full p-2 font-semibold rounded-lg bg-accent-1 text-white hover:bg-opacity-80 disabled:bg-gray-600" disabled={isLoading}>{isLoading ? 'Loading...' : 'Update'}</button>
    </div>
  </form>
</div>;
}

export default DashboardSEO;
