import Theme0 from '../../themes/Theme0';
import BuilderControls from './BuilderControls';
import BuilderNav from './BuilderNav';

function Builder() {
    return (
        <>
            <BuilderNav />

            <div className='flex'>
                <div className='bg-gray-200 p-8 h-screen overflow-y-auto shadow-sm'>
                    <div className='border-2 border-black'>
                        <Theme0 />
                    </div>
                </div>
                <BuilderControls />
            </div>
        </>
    );
}

export default Builder;
