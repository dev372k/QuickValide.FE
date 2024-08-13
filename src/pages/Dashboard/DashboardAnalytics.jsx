import { useSelector } from "react-redux";
import { request } from "../../helpers/requestHelper";
import { message } from "antd";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import CustomLoader from "../../components/CustomLoader";

import { FaRegLightbulb } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

function DashboardAnalytics() {
	const appId = useSelector((state) => state.app.appId);

	const [isLoadingGet, setIsLoadingGet] = useState(false);
	const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
	const [url, setUrl] = useState("");

    const [isKeypointOpen, setIsKeypointOpen] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	useEffect(
		function () {
			document.title = "Analytics | Dashboard";
			if (appId) handleGetAnalytics();
		},
		[appId]
	);

	async function handleGetAnalytics() {
		try {
			setIsLoadingGet(true);
			const res = await request(
				`https://api.quickvalide.com/api/App/${appId}/analytics`
			);

			if (!res.status) throw new Error(res?.message);

			setUrl(res?.data?.url);
			reset({
				url: res?.data?.url,
			});
		} catch (err) {
		} finally {
			setIsLoadingGet(false);
		}
	}

	async function handleUpdateAnalytics(data) {
		try {
			setIsLoadingUpdate(true);
			const res = await request(
				`https://api.quickvalide.com/api/App/${appId}/analytics
  `,
				"PATCH",
				{ url: data.url }
			);

			if (!res.status) throw new Error(res?.message);

			message.success("Analytics updated successfully");
			setUrl(data?.url);
		} catch (err) {
		} finally {
			setIsLoadingUpdate(false);
		}
	}

	function handleCancelUpdate() {
		reset({
			url: url,
		});
	}

	return (
		<div className='w-full flex flex-col gap-8 mt-3  px-6 md:px-12 lg:px-24 text-text-primary'>
			{(isLoadingGet || isLoadingUpdate) && <CustomLoader />}

			<div>
				<h2 className='text-2xl font-bold tracking-wider'>Analytics</h2>
			</div>

			<div className="flex flex-col-reverse md:flex-row items-start gap-16 justify-between">
                <form
                    className='flex flex-col gap-3 w-full md:w-3/4 lg:w-[35rem]'
                    onSubmit={handleSubmit(handleUpdateAnalytics)}
                >
                    <div className='w-full flex flex-col gap-1'>
                        <label htmlFor='url' className='text-text-secondary text-xs'>
                            URL:
                        </label>
                        <input
                            type='text'
                            placeholder='Enter url'
                            className='p-3 text-sm rounded-lg border text-text-primary focus:outline-none focus:border-accent-2'
                            {...register("url", { required: "URL is required" })}
                        />
                        {errors?.url && (
                            <p className='text-xs font-medium text-error'>
                                {errors.url.message}
                            </p>
                        )}
                    </div>
                    <div className='text-sm flex items-center gap-3 font-medium'>
                        <button
                            type='button'
                            className='p-2 px-3 rounded-lg border-[1px] hover:bg-gray-50 disabled:bg-gray-200 '
                            onClick={handleCancelUpdate}
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='p-2 px-3 rounded-lg bg-accent-1 text-white hover:bg-opcaity-80 '
                        >
                            Update
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempora incidunt maxime molestias exercitationem ducimus.</p>

                        </ul>}
                    </div>
                </div>
            </div>
		</div>
	);
}

export default DashboardAnalytics;
