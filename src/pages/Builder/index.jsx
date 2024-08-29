import Theme0Desktop from '../../themes/Theme 0/Theme0Desktop';
import Theme0Mobile from '../../themes/Theme 0/Theme0Mobile';
import BuilderControls from './BuilderControls';
import BuilderNav from './BuilderNav';

import { useState } from 'react';
import { motion } from 'framer-motion';

const viewVariants = {
    mobile: {
        width: '400px',
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

function Builder() {
    const [view, setView] = useState('desktop');
    return (
        <>
            <BuilderNav setView={setView} view={view} />

            <div className='flex w-full mx-auto'>
                <div className='bg-gray-50 p-8 h-screen overflow-y-auto shadow-sm flex-1 flex items-start justify-center'>
                    <motion.div
                        className={`border-2 shadow-2xl ${
                            view === 'desktop' ? 'w-full' : 'w-[400px]'
                        }`}
                        variants={viewVariants}
                        initial={view}
                        animate={view === 'desktop' ? 'desktop' : 'mobile'}
                    >
                        {view === 'desktop' ? <Theme0Desktop /> : <Theme0Mobile />}
                    </motion.div>
                </div>
                <div className='w-96 '>
                    <BuilderControls />
                </div>
            </div>
        </>
    );
}

export default Builder;
