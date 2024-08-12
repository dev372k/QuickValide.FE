import Modal from './Modal'

import CustomLoader from './CustomLoader'

import { useState } from 'react'
import { useSelector } from 'react-redux'

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

function DeleteAccountModal({showDeleteModal, setShowDeleteModal, handleDelete, userId, isLoading}) {

    const [email, setEmail] = useState('')
    const userEmail = useSelector(state => state.user.user.email)

    return <Modal isShown={showDeleteModal} variants={modalVariants} animate={showDeleteModal ? 'show' : 'hide'} initial={showDeleteModal ? 'show' : 'hide'} >
        {isLoading && <CustomLoader />}

        <div className='flex flex-col gap-4 text-sm transition-all p-5'>
        <p>Are you sure you want to delete your account? This action is irreversible.</p>
        <input type="email" placeholder='Enter your email' className='p-3 rounded-md border' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <div className='flex items-center gap-2 w-full justify-end text-xs'>
            <button className='p-2 px-4 text-text-primary hover:bg-gray-100 rounded-md' onClick={() => setShowDeleteModal(false)}>Cancel</button>
            <button onClick={() => {
                handleDelete(userId)
            }
            } className='text-white bg-error rounded-md p-2 px-4 hover:bg-opacity-80 disabled:bg-gray-500'
            disabled={email.toLowerCase() !== userEmail?.toLowerCase()}
            >Delete Account</button>
        </div>
        </div>
        </Modal>

}

export default DeleteAccountModal
