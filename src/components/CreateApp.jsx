import { RxCross1 } from "react-icons/rx";

import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { request } from "../helpers/requestHelper";
import { message } from "antd";

import { useEffect, useState } from "react";
import CustomLoader from "./CustomLoader";

function CreateApp({ setShowCreateAppModal, refreshApps }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
		setValue,
	} = useForm();
	const userId = useSelector((state) => state.user.user.id);

	const [isLoading, setIsLoading] = useState(false);

	const appName = watch("name");

	useEffect(
		function () {
			setValue("domain", "");
			if (appName) {
				setValue(
					"domain",
					appName
						.trim()
						.toLowerCase()
						.replace(/[' ']+/g, "-")
				);
			}
		},
		[appName, setValue]
	);

	async function onSubmit(data) {
		data["userId"] = userId;

		try {
			setIsLoading(true);
			const res = await request(
				`https://api.quickvalide.com/api/App
            `,
				"POST",
				data
			);

			if (!res.status) throw new Error(res.message);

			message.success(res.message);
			refreshApps();
			reset();
			setShowCreateAppModal(false);
		} catch (err) {
			message.error(err.message);
		} finally {
			setIsLoading(false);
		}
	}

	function handleCancleCreate() {
		reset();
	}

	return (
		<div className='relative w-[95vw] xs:w-[80vw] sm:w-[32rem] max-h-[90vh] overflow-y-auto max-w-full p-8 flex flex-col gap-8'>
			{isLoading && <CustomLoader />}

			<div
				onClick={() => setShowCreateAppModal(false)}
				className='absolute font-bold right-2 top-2 hover:bg-gray-50 hover:text-error p-2 rounded-full'
			>
				<RxCross1 size={26} />
			</div>
			<div className='flex flex-col text-text-primary'>
				<h2 className='text-2xl font-bold'>Create App</h2>
				<p className='text-sm'>Fill in all the details to create app</p>
			</div>

			<form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-1'>
					<label htmlFor='name' className='text-xs font-medium'>
						Name:
					</label>
					<input
						type='text'
						placeholder='Enter name'
						{...register("name", {
							required: "Name is required",
						})}
						className='p-3 text-sm border rounded-md focus:outline-none focus:border-accent-2'
						id='name'
					/>
					{errors?.name && (
						<p className='text-xs font-medium text-error'>
							{errors.name.message}
						</p>
					)}
				</div>

				{/* <div className='flex flex-col gap-1'>
					<label htmlFor='email' className='text-xs font-medium'>
						Email:
					</label>
					<input
						type='text'
						placeholder='Enter email'
						{...register("email", {
							required: "Email is required",
						})}
						className='p-3 text-sm border rounded-md focus:outline-none focus:border-accent-2'
						id='email'
					/>
					{errors?.email && (
						<p className='text-xs font-medium text-error'>
							{errors.email.message}
						</p>
					)}
				</div> */}

				{/* <div className='flex flex-col gap-1'>
					<label htmlFor='pageContent' className='text-xs font-medium'>
						Page Content:
					</label>
					<textarea
						type='text'
						placeholder='Enter page content'
						{...register("pageContent", {
							required: "Page content is required",
						})}
						className='p-3 text-sm border rounded-md focus:outline-none focus:border-accent-2'
						id='pageContent'
						rows={5}
					></textarea>
					{errors?.pageContent && (
						<p className='text-xs font-medium text-error'>
							{errors.pageContent.message}
						</p>
					)}
				</div> */}

				{/* <div className='flex flex-col gap-1'>
					<label htmlFor='videoLink' className='text-xs font-medium'>
						Video Link:
					</label>
					<input
						type='text'
						placeholder='Enter video link'
						{...register("videoLink", {
							required: "Video link is required",
						})}
						className='p-3 text-sm border rounded-md focus:outline-none focus:border-accent-2'
						id='videoLink'
					/>
					{errors?.videoLink && (
						<p className='text-xs font-medium text-error'>
							{errors.videoLink.message}
						</p>
					)}
				</div> */}

				{/* <div className='flex flex-col gap-1'>
					<label htmlFor='googleURL' className='text-xs font-medium'>
						Google URL:
					</label>
					<input
						type='text'
						placeholder='Enter video link'
						{...register("googleURL", {
							required: "Google URL is required",
						})}
						className='p-3 text-sm border rounded-md focus:outline-none focus:border-accent-2'
						id='googleURL'
					/>
					{errors?.googleURL && (
						<p className='text-xs font-medium text-error'>
							{errors.googleURL.message}
						</p>
					)}
				</div> */}

				{/* <div className='flex flex-col gap-1'>
					<label htmlFor='pricing' className='text-xs font-medium'>
						Pricing:
					</label>
					<textarea
						type='text'
						placeholder='Enter page content'
						{...register("pricing", {
							required: "Pricing is required",
						})}
						className='p-3 text-sm border rounded-md focus:outline-none focus:border-accent-2'
						id='pricing'
						rows={5}
					></textarea>
					{errors?.pricing && (
						<p className='text-xs font-medium text-error'>
							{errors.pricing.message}
						</p>
					)}
				</div> */}

				<div className='flex flex-col gap-1'>
					<label htmlFor='domain' className='text-xs font-medium'>
						Domain:
					</label>
					<input
						type='text'
						placeholder='Your domain'
						{...register("domain", {
							required: "Domain is required",
						})}
						className='p-3 text-sm border rounded-md focus:outline-none focus:border-accent-2'
						disabled
						id='domain'
					/>
					{errors?.domain && (
						<p className='text-xs font-medium text-error'>
							{errors.domain.message}
						</p>
					)}
				</div>

				{/* <div className='flex flex-col gap-1'>
					<label htmlFor='svgLink' className='text-xs font-medium'>
						SVG Link:
					</label>
					<input
						type='text'
						placeholder='Enter video link'
						{...register("svgLink", {
							required: "SVG Link is required",
						})}
						className='p-3 text-sm border rounded-md focus:outline-none focus:border-accent-2'
						id='svgLink'
					/>
					{errors?.svgLink && (
						<p className='text-xs font-medium text-error'>
							{errors.svgLink.message}
						</p>
					)}
				</div> */}

				{/* <div className='flex flex-col gap-1'>
					<label htmlFor='playstoreLink' className='text-xs font-medium'>
						Playstore Link:
					</label>
					<input
						type='text'
						placeholder='Enter video link'
						{...register("playstoreLink", {
							required: "Playstore Link is required",
						})}
						className='p-3 text-sm border rounded-md focus:outline-none focus:border-accent-2'
						id='playstoreLink'
					/>
					{errors?.playstoreLink && (
						<p className='text-xs font-medium text-error'>
							{errors.playstoreLink.message}
						</p>
					)}
				</div> */}

				{/* <div className='flex flex-col gap-1'>
					<label htmlFor='appstoreLink' className='text-xs font-medium'>
						Appstore Link:
					</label>
					<input
						type='text'
						placeholder='Enter video link'
						{...register("appstoreLink", {
							required: "Appstore Link is required",
						})}
						className='p-3 text-sm border rounded-md focus:outline-none focus:border-accent-2'
						id='appstoreLink'
					/>
					{errors?.appstoreLink && (
						<p className='text-xs font-medium text-error'>
							{errors.appstoreLink.message}
						</p>
					)}
				</div> */}

				{/* <div className='flex flex-col gap-1'>
					<label htmlFor='aboutUs' className='text-xs font-medium'>
						About Us:
					</label>
					<textarea
						type='text'
						placeholder='Enter page content'
						{...register("aboutUs", {
							required: "About Us is required",
						})}
						className='p-3 text-sm border rounded-md focus:outline-none focus:border-accent-2'
						id='aboutUs'
						rows={5}
					></textarea>
					{errors?.aboutUs && (
						<p className='text-xs font-medium text-error'>
							{errors.aboutUs.message}
						</p>
					)}
				</div> */}

				<div className='flex w-full gap-2 items-center'>
					<button
						onClick={handleCancleCreate}
						className='p-2 rounded-md text-sm border font-medium w-full hover:bg-gray-100 transition-all'
						type='button'
					>
						Cancel
					</button>
					<button
						className='p-2 rounded-md text-sm bg-accent-1 font-medium hover:bg-opacity-80 text-white w-full transition-all'
						type='submit'
					>
						Create
					</button>
				</div>
			</form>
		</div>
	);
}

export default CreateApp;
