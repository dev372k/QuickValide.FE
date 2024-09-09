import { useState, useEffect } from 'react';
import Logo from '../../assets/logo-no-background.svg';
import { CiDesktop } from 'react-icons/ci';
import { CiMobile1 } from 'react-icons/ci';

import { useForm } from 'react-hook-form';
import { updateTheme } from '../../services/builderSlice';

import { useDispatch, useSelector } from 'react-redux';

function BuilderNav({ view, setView }) {
    const { register, watch, setValue, getValues, reset } = useForm();

    const themeId = useSelector((state) => state.builder.themeId);

    const dispatch = useDispatch();

    useEffect(
        function () {
            if (themeId) {
                reset({
                    themeId,
                });
            }
        },
        [themeId]
    );

    useEffect(
        function () {
            dispatch(updateTheme(+getValues().themeId));
        },
        [watch('themeId')]
    );
    return (
        <nav className=' bg-gray-50 border-b p-3'>
            <div className='flex items-center max-w-7xl mx-auto justify-between'>
                <div className='mr-4'>
                    <img src={Logo} alt='Logo' className='w-32' />
                </div>

                <div className='ml-auto mr-6 flex items-center gap-2'>
                    <p className='text-sm text-text-secondary hidden md:block'>Select theme:</p>
                    <select
                        name='themeId'
                        id='themeId'
                        className='p-2 border bg-transparent rounded-md text-sm text-text-primary font-medium max-w-[25rem]'
                        {...register('themeId')}
                    >
                        <option value='1'>Theme 1</option>
                        <option value='2'>Theme 2</option>
                    </select>
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
