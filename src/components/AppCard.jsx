import { MdDeleteOutline } from 'react-icons/md';
import { RxExternalLink } from 'react-icons/rx';

import { useState } from 'react';
import { request } from '../helpers/requestHelper';
import { message } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import DeleteModal from './DeleteModal';
import { changeApp } from '../services/appSlice';

function AppCard({ app, refreshApps }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const apps = useSelector((state) => state.app.apps);
    const dispatch = useDispatch();

    function askDeleteConfirmation() {
        setShowDeleteModal(true);
    }

    async function handleDelete(appId) {
        try {
            setIsLoading(true);
            const res = await request(`https://api.quickvalide.com/api/App/${appId}`, 'DELETE');

            if (!res.status) throw new Error('An error occured while deleting app');
            message.success('App deleted successfully');
            localStorage.removeItem('selectedApp');
            dispatch(changeApp(apps?.at(0)?.id));
            localStorage.setItem('selectedApp', apps?.at(0)?.id);
            refreshApps();
        } catch (err) {
            message.error(err.message);
        } finally {
            setIsLoading(false);
            setShowDeleteModal(false);
        }
    }

    return (
        <div className='border-[1px] relative rounded-lg p-5 text-sm break-words flex flex-col justify-start  '>
            <DeleteModal
                showDeleteModal={showDeleteModal}
                setShowDeleteModal={setShowDeleteModal}
                appId={app?.id}
                handleDelete={handleDelete}
                isLoading={isLoading}
            />
            <a href={`https://${app.domain}`} target='__blank' rel='noopener noreferrer'>
                <RxExternalLink size={22} className='absolute top-3 right-3 text-accent-2' />
            </a>
            <div className='flex flex-col gap-2 justify-between h-full'>
                <div>
                    <p className='font-semibold text-text-primary'>{app.name}</p>
                    <p className='text-xs text-text-secondary'>{app.domain}</p>
                </div>
                <p className='text-xs text-text-secondary '>
                    Created: {new Date(app.createdAt).toLocaleDateString()}
                </p>
            </div>

            {app?.isDefault ? (
                <div
                    className='flex items-center justify-end  pt-3 self-end tooltip text-text-primary '
                    data-tooltip="You can't delete this app because it is default app"
                >
                    <MdDeleteOutline
                        size={36}
                        className='p-2 cursor-pointer rounded-full bg-gray-100 hover:bg-opacity-50 transition-all'
                    />
                </div>
            ) : (
                <div className='flex items-center justify-end  text-error '>
                    <MdDeleteOutline
                        size={36}
                        onClick={askDeleteConfirmation}
                        className='p-2 cursor-pointer rounded-full hover:bg-error hover:bg-opacity-10 transition-all'
                    />
                </div>
            )}
        </div>
    );
}
export default AppCard;
