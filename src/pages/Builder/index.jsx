import Theme0 from '../../themes/Theme0';
import Theme1 from '../../themes/Theme1';
import BuilderControls from './BuilderControls';
import BuilderNav from './BuilderNav';

function Builder() {
    return (
        <>
            <BuilderNav />

            <div className='flex w-full mx-auto'>
                <div className='bg-gray-50 p-8 h-screen overflow-y-auto shadow-sm flex-1'>
                    <div className='border-2 shadow-2xl'>
                        <Theme1 />
                    </div>
                </div>
                <div className='w-72 '>
                    <BuilderControls />
                </div>
            </div>
        </>
    );
}

export default Builder;
