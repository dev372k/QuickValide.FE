import { MdDeleteOutline } from "react-icons/md"
import { RxExternalLink } from "react-icons/rx";


function AppCard({app}) {
    return <div className="border-[1px] relative rounded-lg p-5 text-sm break-words flex flex-col gap-2">
        <RxExternalLink size={22} className="absolute top-3 right-3 text-accent-2"/>
        <div>
            <p className="font-semibold text-text-primary">{app.name}</p>
            <p className="text-xs text-text-secondary">{app.domain}</p>
            <p className="text-xs text-text-secondary mt-3">Created: {new Date(app.createdAt).toLocaleDateString()}</p>
        </div>

        <div className="flex items-center justify-end border-t-[1px] pt-3 text-error">
            <MdDeleteOutline size={20}/>
        </div>
    </div>
}

export default AppCard