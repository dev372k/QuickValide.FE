import { useState, useEffect } from 'react';
import Logo from '../../assets/logo-no-background.svg';
import { CiDesktop } from 'react-icons/ci';
import { CiMobile1 } from 'react-icons/ci';

function BuilderNav({ view, setView }) {
    return (
        <nav className=' bg-gray-50 border-b p-3'>
            <div className='flex items-center max-w-7xl mx-auto justify-between'>
                <div className='mr-4'>
                    <img src={Logo} alt='Logo' className='w-32' />
                </div>

                <div className='ml-auto mr-6 flex items-center gap-2'>
                    <p className='text-xs text-text-secondary'>
                        Exciting themes
                        <br />
                        Coming soon ✨
                    </p>
                    {/* <p className='text-sm text-text-secondary hidden md:block'>Select theme:</p>
                    <select
                        name='themeId'
                        id='themeId'
                        className='p-2 border bg-transparent rounded-md text-sm text-text-primary font-medium max-w-[25rem]'
                    >
                        <option value='0'>Theme 1</option>
                        <option value='1'>Theme 2</option>
                        <option value='2'>Theme 3</option>
                        <option value='3'>Theme 4</option>
                    </select> */}
                </div>

                <div className='flex items-center gap-3'>
                    <div
                        className={`p-1 rounded-md hover:bg-opacity-80 text-text-primary ${
                            view === 'desktop' && 'bg-accent-2 text-white'
                        }`}
                        onClick={() => setView('desktop')}
                    >
                        <CiDesktop size={24} />
                    </div>
                    <div
                        className={`p-1 rounded-md hover:bg-opacity-80 text-text-primary ${
                            view === 'mobile' && 'bg-accent-2 text-white'
                        }`}
                        onClick={() => {
                            setView('mobile');
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
