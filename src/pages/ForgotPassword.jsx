import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import { Link } from 'react-router-dom';
import { request } from '../helpers/requestHelper';

function ForgotPassword() {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    useEffect(function () {
        document.title = 'Reset Password';
    }, []);

    async function onSubmit(data) {
        setIsLoading(true);
        setMessage('');
        setSuccessMessage('');
        const res = await request(
            `https://api.quickvalide.com/api/Auth/forgot-password/${data.email}`,
            'POST',
            data
        );
        setIsLoading(false);

        if (!res.status) setMessage(res.message);

        if (res.status) {
            setSuccessMessage(res.message);
        }
    }

    return (
        <main className='w-full min-h-screen flex'>
            <div className='md:flex hidden min-h-screen relative overflow-hidden bg-accent-1 bg-opacity-75 w-[30%] lg:w-[70%]'>
                <p className='text-text-primary text-[10rem] leading-[1] top-1/2 -translate-y-1/2 absolute opacity-20 font-bold'>
                    Ideas to Reality
                </p>
            </div>
            <div className='flex items-center justify-center w-full relative px-4'>
                <Link
                    to='/'
                    className='absolute top-5 left-5 text-sm p-2 text-accent-2 font-medium hover:bg-accent-2 bg-white hover:text-white transition-all rounded-full'
                >
                    &larr; Back to home
                </Link>
                <div className='flex md:w-[30rem] flex-col gap-5 px-5 py-8 rounded-lg border-[1px] bg-white border-gray-300 sm:max-w-sm'>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col items-center gap-1'>
                            <h2 className='text-2xl text-center font-medium text-text-primary'>
                                Reset password
                            </h2>
                            <p className='text-text-secondary text-xs'>
                                Enter your email to get new password
                            </p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            {message && (
                                <p className='w-full p-2 bg-error text-white text-sm text-medium rounded-md'>
                                    {message}
                                </p>
                            )}
                            {successMessage && (
                                <p className='w-full p-2 bg-success text-white text-sm text-medium rounded-md'>
                                    {successMessage}
                                </p>
                            )}

                            <div className='relative'>
                                <input
                                    type='text'
                                    placeholder='Email address'
                                    className='p-2 py-3 border-[1px] input border-gray-200 rounded-md w-full focus:outline-none focus:border-accent-2 text-sm  text-text-primary'
                                    {...register('email', {
                                        required: 'Email is required',
                                        validate: (value) =>
                                            isEmail(value) || 'Invalid email provided',
                                    })}
                                />
                                <p className='absolute top-0 transition-all -translate-y-1/2 left-2 text-xs p-1 px-2 bg-accent-2 rounded-md text-white'>
                                    Email address
                                </p>
                                {errors?.email && (
                                    <p className='my-1 text-error text-sm font-medium'>
                                        {errors?.email?.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type='submit'
                                disabled={isLoading}
                                className='p-2  text-md hover:bg-opacity-80 font-medium text-white bg-accent-1 rounded-md disabled:bg-text-secondary disabled:text-gray-50'
                            >
                                {isLoading ? 'Loading...' : 'Reset Password'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default ForgotPassword;
