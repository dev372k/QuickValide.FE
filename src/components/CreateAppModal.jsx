import CreateApp from "./CreateApp";
import Modal from "./Modal";

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

function CreateAppModal({showCreateAppModal, setShowCreateAppModal, refreshApps}) {
    return <Modal isShown={showCreateAppModal} variants={modalVariants} animate={showCreateAppModal ? 'show' : 'hide'} initial={showCreateAppModal ? 'show' : 'hide'}>
        <CreateApp setShowCreateAppModal={setShowCreateAppModal} refreshApps={refreshApps}/>
       
    </Modal>
}

export default CreateAppModal