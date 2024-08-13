import { request } from "../../helpers/requestHelper";

import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Spin, message } from "antd";
import { updateWaitlist } from "../../services/appSlice";

function DashboardWaitlist() {
	const appId = useSelector((state) => state.app.appId);
	const waitlist = useSelector((state) => state.app.waitlist);

	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);

	async function getWaitlist() {
		try {
			setIsLoading(true);
			const res = await request(
				`https://api.quickvalide.com/api/Waitlist/${appId}`
			);

			if (!res.status) throw new Error(res?.message);

			dispatch(updateWaitlist(res?.data));
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(
		function () {
			document.title = "Waitlist | Dashboard";

			if (appId) getWaitlist();
		},
		[appId]
	);

	return (
		<div className='w-full flex flex-col gap-8 pt-3  px-6 md:px-12 lg:px-24 text-text-primary overflow-x-auto overflow-y-auto h-[calc(100vh-157px)] xs:h-[calc(100vh-77px)]'>
			<div className='flex items-center gap-2 justify-between'>
				<h2 className='text-2xl font-bold tracking-wider'>Waitlist</h2>

				<div className='text-xs text-white font-medium'>
					<button className='p-2 px-6 rounded-md hover:bg-opacity-80 bg-accent-1'>
						Export
					</button>
				</div>
			</div>
			<table class='w-full min-w-sm border-collapse rounded-lg overflow-hidden text-sm  '>
				<thead className=' bg-gray-50 w-full'>
					<tr>
						<th class='border px-4 py-2'>Serial No.</th>
						<th class='border px-4 py-2'>Date</th>
						<th class='border px-4 py-2'>Email</th>
						<th class='border px-4 py-2'>Selected Plan</th>
					</tr>
				</thead>
				<tbody>
					{waitlist &&
						waitlist.map((listItem, index) => (
							<tr className="text-center">
								<td class='border px-4 py-2'>{index + 1}</td>
								<td class='border px-4 py-2'>
									{listItem?.createdOn}
								</td>
								<td class='border px-4 py-2'>{listItem?.email}</td>
								<td class='border px-4 py-2'>{listItem?.selectedPlan}</td>
							</tr>
						))}
				</tbody>
			</table>
			<div className='w-full'>
				{isLoading ? (
					<div>
						<Spin size='default' tip='Loading... Please wait'>
							<div className='p-24'></div>
						</Spin>
					</div>
				) : waitlist?.length === 0 ? (
					<p className='text-center p-3 text-md font-medium'>No data</p>
				) : null}
			</div>
		</div>
	);
}

export default DashboardWaitlist;
