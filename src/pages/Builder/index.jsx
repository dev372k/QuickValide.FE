import Theme0Desktop from '../../themes/Theme 0/Theme0Desktop';
import Theme0Mobile from '../../themes/Theme 0/Theme0Mobile';
import BuilderControls from './BuilderControls';
import BuilderNav from './BuilderNav';
import { MdBuild } from 'react-icons/md';
import Modal from '../../components/Modal';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RxCross1 } from 'react-icons/rx';
import { request } from '../../helpers/requestHelper';
import { useSelector, useDispatch } from 'react-redux';
import { updateApp, updatePricings } from '../../services/builderSlice';
import { message } from 'antd';
import HeroSection from './HeroSection';
import Theme1Desktop from '../../themes/Theme 1/Theme1Desktop';
import Theme1Mobile from '../../themes/Theme 1/Theme1Mobile';
import CustomLoader from '../../components/CustomLoader';

const STATIC_PRICING = JSON.stringify([
    {
        name: 'Basic',
        price: '5',
        features: [
            {
                feature: 'Feature 1',
                isIncluded: true,
            },
            {
                feature: 'Feature 2',
                isIncluded: false,
            },
            {
                feature: 'Feature 3',
                isIncluded: false,
            },
        ],
    },
    {
        name: 'Standard',
        price: '10',
        features: [
            {
                feature: 'Feature 1',
                isIncluded: true,
            },
            {
                feature: 'Feature 2',
                isIncluded: true,
            },
            {
                feature: 'Feature 3',
                isIncluded: false,
            },
        ],
    },
    {
        name: 'Premium',
        price: '25',
        features: [
            {
                feature: 'Feature 1',
                isIncluded: true,
            },
            {
                feature: 'Feature 2',
                isIncluded: true,
            },
            {
                feature: 'Feature 3',
                isIncluded: true,
            },
        ],
    },
]);

const viewVariants = {
    mobile: {
        width: '375px',

        transition: {
            ease: 'easeOut',
            duration: 0.5,
        },
    },
    desktop: {
        width: '100%',
        transition: {
            ease: 'easeOut',
            duration: 0.5,
        },
    },
};

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

function Builder() {
    const [view, setView] = useState('desktop');
    const [openMobileBuilder, setOpenMobileBuilder] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const appId = useSelector((state) => state.app.appId);
    const themeId = useSelector((state) => state.builder.themeId);
    const dispatch = useDispatch();

    useEffect(function () {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue =
                'You may have unsaved changes. Kindly save them before closing the window.';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    useEffect(function () {
        async function getUserApp() {
            try {
                setIsLoading(true);
                const res = await request(`https://api.quickvalide.com/api/App/${appId}`);
                console.log(res.data);
                dispatch(updateApp(res.data));

                if (!res.data.pricing) dispatch(updatePricings(STATIC_PRICING));
            } catch (err) {
                message.error(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        getUserApp();
    }, []);

    return (
        <>
            {isLoading ? (
                <CustomLoader />
            ) : (
                <main className='h-screen'>
                    <BuilderNav setView={setView} view={view} />

                    <div className='flex relative w-full mx-auto'>
                        <div
                            role='button'
                            className='absolute top-5 right-10 z-50 text-accent-1 p-2 rounded-full bg-slate-200 active:bg-slate-300 border-2 border-accent-2 md:hidden'
                            onClick={() => setOpenMobileBuilder(true)}
                        >
                            <MdBuild size={28} />
                        </div>

                        <Modal
                            isShown={openMobileBuilder}
                            variants={modalVariants}
                            animate={openMobileBuilder ? 'show' : 'hide'}
                            initial={openMobileBuilder ? 'show' : 'hide'}
                        >
                            <div className='w-full md:hidden'>
                                <BuilderControls setOpenMobileBuilder={setOpenMobileBuilder} />
                            </div>
                        </Modal>
                        <div className='bg-gray-50 p-8  h-[calc(100vh-65px)] overflow-y-auto shadow-sm flex-1 flex items-start justify-center'>
                            <motion.div
                                className={`border-2 border-accent-2 shadow-2xl w-full min-w-[350px] mt-16 md:mt-0 ${
                                    view === 'mobile' ? 'w-[400px]' : 'w-full'
                                }`}
                                variants={viewVariants}
                                initial={view}
                                animate={view === 'desktop' ? 'desktop' : 'mobile'}
                            >
                                {(() => {
                                    switch (themeId) {
                                        case 1:
                                            if (view === 'desktop') return <Theme1Desktop />;
                                            return <Theme1Mobile />;
                                        case 2:
                                            if (view === 'desktop') return <Theme0Desktop />;
                                            return <Theme0Mobile />;
                                    }
                                })()}
                            </motion.div>
                        </div>
                        <div className='w-96 hidden md:block'>
                            <BuilderControls />
                        </div>
                    </div>
                </main>
            )}
        </>
    );
}

export default Builder;
