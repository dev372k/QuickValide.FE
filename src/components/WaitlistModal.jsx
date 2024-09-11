import { RxCross2 } from 'react-icons/rx';
import Modal from './Modal';

const modalVariants = {
    show: {
        opacity: 1,
        scale: 1,
    },
    hide: {
        opacity: 0,
        scale: 0.6,
    },
};

function WaitlistModal({ isShown, setIsShown }) {
    return (
        <Modal
            isShown={isShown}
            variants={modalVariants}
            animate={isShown ? 'show' : 'hide'}
            initial={isShown ? 'show' : 'hide'}
        >
            <div className='p-8 relative max-w-sm'>
                <div
                    className='absolute top-3 right-3 p-1 hover:bg-gray-100 hover:text-accent-1 rounded-full transition-all'
                    onClick={() => setIsShown(false)}
                >
                    <RxCross2 size={28} />
                </div>

                <div className='mt-6'>
                    <p>
                        You haven't selected any plan, click on the subscribe button of any plan you
                        are interested in and then join the waitlist.{' '}
                    </p>
                </div>
            </div>
        </Modal>
    );
}

export default WaitlistModal;
