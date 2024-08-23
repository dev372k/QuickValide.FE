import { useState, useEffect } from 'react';
import Logo from '../../assets/logo-no-background.svg';
import { CiDesktop } from 'react-icons/ci';
import { CiMobile1 } from 'react-icons/ci';

function BuilderNav() {
    const [activeScreenSize, setActiveScreenSize] = useState('desktop');

    return (
        <nav className=' bg-gray-50 border-b p-3'>
            <div className='flex items-center max-w-7xl mx-auto justify-between'>
                <div>
                    <img src={Logo} alt='QuickValide Logo' className='w-32' />
                </div>

                <div className='flex items-center gap-3'>
                    <div
                        className={`p-1 rounded-md hover:bg-gray-200 text-text-primary ${
                            activeScreenSize === 'desktop' && 'bg-accent-2 text-white'
                        }`}
                        onClick={() => setActiveScreenSize('desktop')}
                    >
                        <CiDesktop size={24} />
                    </div>
                    <div
                        className={`p-1 rounded-md hover:bg-gray-200 text-text-primary ${
                            activeScreenSize === 'mobile' && 'bg-accent-2 text-white'
                        }`}
                        onClick={() => {
                            setActiveScreenSize('mobile');
                        }}
                    >
                        <CiMobile1 size={24} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default BuilderNav;
