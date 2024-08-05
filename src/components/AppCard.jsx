import { MdDeleteOutline } from "react-icons/md"
import { RxExternalLink } from "react-icons/rx";

import {useEffect, useState} from 'react'
import {request} from '../helpers/requestHelper'
import { message } from "antd";

import CustomLoader from './CustomLoader'
import DeleteModal from "./DeleteModal";

function AppCard({app, refreshApps}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function askDeleteConfirmation() {
        setShowDeleteModal(true)
    }

    async function handleDelete(appId) {
        setIsLoading(true)
        const res = await request(`https://api.quickvalide.com/api/App/${appId}`, 'DELETE')
        setIsLoading(false)
        setShowDeleteModal(false)

        if (!res.status) return message.error('An error occured while deleting app')
        message.success('App deleted successfully')
        refreshApps()
    }


    return <div className="border-[1px] relative rounded-lg p-5 text-sm break-words flex flex-col gap-2">
        <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} appId={app?.id} handleDelete={handleDelete} isLoading={isLoading}/>
        <RxExternalLink size={22} className="absolute top-3 right-3 text-accent-2"/>
        <div>
            <p className="font-semibold text-text-primary">{app.name}</p>
            <p className="text-xs text-text-secondary">{app.domain}</p>
            <p className="text-xs text-text-secondary mt-3">Created: {new Date(app.createdAt).toLocaleDateString()}</p>
        </div>

        <div className="flex items-center justify-end border-t-[1px] pt-3 text-error ">
            <MdDeleteOutline size={36} onClick={askDeleteConfirmation} className="p-2 cursor-pointer rounded-full hover:bg-error hover:bg-opacity-10 transition-all"/>
        </div>
    </div>
} 
export default AppCard