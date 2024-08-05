import Modal from './Modal'

import CustomLoader from './CustomLoader'

const modalVariants = {
    show: {
        opacity: 1,
        scale: 1,
    },
    hide: {
        opacity: 0,
        scale: 0.6
    }
}

function DeleteModal({showDeleteModal, setShowDeleteModal, handleDelete, appId, isLoading}) {

    return <Modal isShown={showDeleteModal} variants={modalVariants} animate={showDeleteModal ? 'show' : 'hide'} initial={showDeleteModal ? 'show' : 'hide'} >
        {isLoading && <CustomLoader />}

        <div className='flex flex-col gap-8 text-sm transition-all p-5'>
        <p>Are you sure you want to delete this app? This action is irreversible.</p>
        <div className='flex items-center gap-2 w-full justify-end text-xs'>
            <button className='p-2 px-4 text-text-primary hover:bg-gray-100 rounded-md' onClick={() => setShowDeleteModal(false)}>Cancel</button>
            <button onClick={() => {
                handleDelete(appId)
            }
            } className='text-white bg-error rounded-md p-2 px-4 hover:bg-opacity-80'>Delete</button>
        </div>
        </div>
        </Modal>
 
}

export default DeleteModal