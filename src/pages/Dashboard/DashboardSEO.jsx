import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TagsInput } from "react-tag-input-component";
import { useForm } from "react-hook-form";

import { request } from "../../helpers/requestHelper";
import { message } from "antd";
import { updateSeo } from "../../services/appSlice";
import CustomLoader from "../../components/CustomLoader";

import { FaRegLightbulb } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";


function DashboardSEO() {
	const [keywords, setKeywords] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
    const [isKeypointOpen, setIsKeypointOpen] = useState(false)

	const appSEO = useSelector((state) => state.app.seo);
	let appId = useSelector((state) => state.app.appId);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	async function onSubmit(data) {
		data["keywords"] = keywords.join(",");

		try {
			setIsLoading(true);
			const res = await request(
				`https://api.quickvalide.com/api/App/${appId}/seo
  `,
				"PATCH",
				data
			);
			dispatch(updateSeo(data));

			if (!res.status) throw new Error("An error occured while updating app");

			message.success("App updated successfully");
		} catch (err) {
		} finally {
			setIsLoading(false);
		}
	}

	async function getSEO() {
		try {
			resetSEOInputs();

			setIsLoading(true);
			const res = await request(
				`https://api.quickvalide.com/api/App/${appId}/seo`
			);

			if (!res.status)
				throw new Error("An error occured while getting SEO data");
			dispatch(updateSeo(res.data));
		} catch (err) {
			message.error(er?.message);
		} finally {
			setIsLoading(false);
		}
	}

	function resetSEOInputs() {
		if (appSEO) {
			reset({
				title: appSEO.title,
				description: appSEO.description,
				ogTitle: appSEO.ogTitle,
				ogDescription: appSEO.ogDescription,
			});
			setKeywords(appSEO.keywords ? appSEO.keywords.split(",") : []);
		}
	}

	useEffect(() => {
		resetSEOInputs();
	}, [appSEO, reset]);

	useEffect(
		function () {
			document.title = "SEO | Dashboard";

			if (appId) getSEO();
		},
		[appId]
	);

	return (
		<div className='w-full overflow-y-auto h-[calc(100vh-157px)] xs:h-[calc(100vh-77px)] flex flex-col gap-8 pt-3 pb-8  px-6 md:px-12 lg:px-24 text-text-primary '>
			{isLoading && <CustomLoader />}

			<div>
				<h2 className='text-2xl font-bold tracking-wider'>
					SEO{" "}
					<span className='text-xl font-medium text-text-secondary'>
						(Search Engine Optimization)
					</span>
				</h2>
			</div>

			<div className="flex flex-col-reverse md:flex-row items-start gap-16 justify-between">
                <form
                    className='text-sm flex flex-col w-full md:w-3/4 lg:w-[35rem] gap-3 text-text-primary'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='title'>Title:</label>
                        <p className='text-xs'>
                            This is the title which will be shown in browsers
                        </p>
                        <input
                            type='text'
                            placeholder='Title'
                            className='text-sm p-3 rounded-lg border-[1px] text-text-primary focus:outline-none focus:border-accent-2'
                            id='title'
                            {...register("title", {
                                required: "Title is required",
                            })}
                        />
                        {errors?.title && (
                            <p className='text-xs font-medium text-error'>
                                {errors.title.message}
                            </p>
                        )}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='description'>Description:</label>
                        <p className='text-xs'>
                            This is the description which will help in your SEO
                        </p>
                        <textarea
                            type='text'
                            placeholder='Description'
                            className='text-sm p-3 rounded-lg border-[1px] text-text-primary focus:outline-none focus:border-accent-2'
                            id='description'
                            rows={5}
                            {...register("description", {
                                required: "Description is required",
                            })}
                        ></textarea>
                        {errors?.description && (
                            <p className='text-xs font-medium text-error'>
                                {errors.description.message}
                            </p>
                        )}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='og:title'>OG Title:</label>
                        <p className='text-xs'>
                            This title will be shown when you share your site on Social Media
                        </p>
                        <input
                            type='text'
                            placeholder='OG Title'
                            className='text-sm p-3 rounded-lg border-[1px] text-text-primary focus:outline-none focus:border-accent-2'
                            id='og:title'
                            {...register("ogTitle", {
                                required: "OG title is required",
                            })}
                        />
                        {errors?.ogTitle && (
                            <p className='text-xs font-medium text-error'>
                                {errors.ogTitle.message}
                            </p>
                        )}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='og:description'>OG Description:</label>
                        <p className='text-xs'>
                            This description will be shown when you share your site on Social
                            Media
                        </p>
                        <textarea
                            type='text'
                            placeholder='OG Description'
                            className='text-sm p-3 rounded-lg border-[1px] text-text-primary focus:outline-none focus:border-accent-2'
                            id='og:description'
                            rows={5}
                            {...register("ogDescription", {
                                required: "OG Description is required",
                            })}
                        ></textarea>
                        {errors?.ogDescription && (
                            <p className='text-xs font-medium text-error'>
                                {errors.ogDescription.message}
                            </p>
                        )}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='keywords'>Keywords:</label>
                        <TagsInput
                            disabled={!keywords}
                            value={keywords}
                            onChange={setKeywords}
                            name='keywords'
                            placeHolder='Enter keywords'
                            classNames={{ input: "p-2" }}
                        />
                    </div>
                    <div className='flex w-full text-sm items-center gap-2'>
                        <button
                            type='button'
                            className='w-full p-2 border-[1px] font-semibold rounded-lg hover:bg-gray-50'
                            onClick={resetSEOInputs}
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='w-full p-2 font-semibold rounded-lg bg-accent-1 text-white hover:bg-opacity-80 disabled:bg-gray-600'
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : "Update"}
                        </button>
                    </div>
                </form>
                <div className="w-full md:w-1/2 rounded-md my-6">
                    <div className="p-4 border rounded-md relative">
                        <div className="rounded-full p-3 bg-accent-1 absolute top-0 -translate-y-1/2 -translate-x-1/2 left-1/2">
                            <FaRegLightbulb size={36} className="text-white"/>
                        </div>

                        <div className="flex items-center justify-between w-full py-3">
                            <h3 className="text-lg font-medium text-text-primary">Key points</h3>
                            <div onClick={() => setIsKeypointOpen(prev => !prev)} className={`p-1 ${isKeypointOpen ? 'bg-accent-1 text-white' : 'text-text-primary'} rounded-full transiti`}>
                                {isKeypointOpen ? <FaMinus size={14}/> : <IoIosAdd size={24}/> }

                            </div>
                        </div>
                        {isKeypointOpen && <ul className="text-sm text-text-primary flex flex-col gap-4 items-start leading-[1.4]">
                            <div className="flex flex-col gap-2">
                                <h4 className="font-medium">Title and Description:</h4>
                                <li><span className="font-medium">What is it:</span> The title of your webpage that appears in search engine results.</li>
                                <li><span className="font-medium">SEO Benefit:</span> A clear and catchy title helps your page rank higher and attract more clicks, as it tells search engines and users what your page is about.</li>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h4 className="font-medium">OG Title (Open Graph Title):</h4>
                                <li><span className="font-medium">What is it:</span> The title that appears when your webpage is shared on social media.</li>
                                <li><span className="font-medium">SEO Benefit:</span> A compelling OG title can encourage more people to share your page, leading to more visibility and potentially higher rankings.</li>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h4 className="font-medium">OG Description (Open Graph Description):</h4>
                                <li><span className="font-medium">What is it:</span> A brief summary that shows up when your page is shared on social media.</li>
                                <li><span className="font-medium">SEO Benefit:</span> A well-written OG description can make your content more attractive on social platforms, driving more traffic to your site, which can positively impact your SEO.</li>
                            </div>

                        </ul>}
                    </div>
                </div>
            </div>
		</div>
	);
}

export default DashboardSEO;
