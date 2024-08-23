import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import GoogleIcon from '../assets/google.svg';
import EyeOpen from '../assets/eye-open.svg';
import EyeClosed from '../assets/eye-closed.svg';
import { request } from '../helpers/requestHelper';
import { useSelector } from 'react-redux';
import { message } from 'antd';

function Register() {
    const navigate = useNavigate();

    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isPasswordConfirmShown, setIsPasswordConfirmShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm();

    useEffect(
        function () {
            document.title = 'Register';

            if (isAuthenticated) navigate('/dashboard');
        },
        [isAuthenticated]
    );

    async function onSubmit(data) {
        if (getValues().password !== getValues().passwordConfirm)
            return message.error("Passwords don't match");

        const dataModified = {
            name: data.name,
            email: data.email,
            password: data.password,
        };
        setIsLoading(true);
        const res = await request('https://api.quickvalide.com/api/Auth', 'POST', dataModified);
        setIsLoading(false);

        if (!res.status) message.error(res?.message);

        if (res.status) {
            message.success('Successfully registered. Redirecting...');
            setTimeout(function () {
                navigate('/login');
            }, 3000);
        }
    }

    return (
        <main className='w-full min-h-screen flex justify-center '>
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
                                Hi there, let's start
                            </h2>
                            <p className='text-text-secondary text-xs'>
                                This is first step of your marvelous journey
                            </p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center justify-center gap-3 text-sm sm:text-md p-3 border-[1px] border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer'>
                                <img src={GoogleIcon} alt='Google icon' />
                                <p className='text-sm font-medium text-text-primary'>
                                    Continue with Google
                                </p>
                            </div>

                            <div className='bg-text-secondary bg-opacity-75 w-full h-[1px] my-1 flex items-center justify-center text-text-secondary text-sm'>
                                <span className='p-1 bg-white'>or</span>
                            </div>

                            <div className='relative'>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='p-2 py-3 border-[1px] border-gray-200 rounded-md w-full text-text-primary input focus:outline-none focus:border-accent-2 text-sm '
                                    {...register('name', {
                                        required: 'Name is required',
                                        minLength: [3, 'Name cannot be less than characters'],
                                    })}
                                />
                                <p className='absolute top-0 transition-all -translate-y-1/2 left-2 text-xs p-1 px-2 bg-accent-2 rounded-sm text-white'>
                                    Name
                                </p>
                                {errors?.name && (
                                    <p className='my-1 text-error text-sm font-medium'>
                                        {errors?.name?.message}
                                    </p>
                                )}
                            </div>
                            <div className='relative'>
                                <input
                                    type='text'
                                    placeholder='Email address'
                                    className='p-2 py-3 border-[1px] border-gray-200 input rounded-md w-full focus:outline-none focus:border-accent-2  text-sm  text-text-primary'
                                    {...register('email', {
                                        required: 'Email is required',
                                        validate: (value) =>
                                            isEmail(value) || 'Invalid email provided',
                                    })}
                                />
                                <p className='absolute top-0 transition-all -translate-y-1/2 left-2 text-xs p-1 px-2 bg-accent-2 rounded-sm text-white'>
                                    Email address
                                </p>
                                {errors?.email && (
                                    <p className='my-1 text-error text-sm font-medium'>
                                        {errors?.email?.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <div className='flex items-center w-full relative'>
                                    <input
                                        type={isPasswordShown ? 'text' : 'password'}
                                        placeholder='Password'
                                        className='p-2 py-3 border-[1px] border-gray-200 input rounded-md w-full mr-auto focus:outline-none focus:border-accent-2  text-sm text-text-primary'
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: [
                                                8,
                                                'Password cannot be less than 8 characters',
                                            ],
                                        })}
                                    />
                                    <p className='absolute top-0 transition-all -translate-y-1/2 left-2 text-xs p-1 px-2 bg-accent-2 rounded-sm text-white'>
                                        Password
                                    </p>

                                    <img
                                        src={isPasswordShown ? EyeClosed : EyeOpen}
                                        alt='Eye open icon'
                                        className={`absolute top-1/2 -translate-y-1/2 right-2 ${
                                            isPasswordShown ? 'mt-3 -mr-[20px]' : 'mt-1'
                                        }`}
                                        width={isPasswordShown ? 48 : 32}
                                        height={isPasswordShown ? 48 : 32}
                                        onClick={() => setIsPasswordShown(!isPasswordShown)}
                                    />
                                </div>
                                {errors?.password && (
                                    <p className='my-1 text-error text-sm font-medium'>
                                        {errors?.password?.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <div className='flex items-center w-full relative'>
                                    <input
                                        type={isPasswordConfirmShown ? 'text' : 'password'}
                                        placeholder='Password Confirmation'
                                        className='p-2 py-3 border-[1px] border-gray-200 input rounded-md w-full mr-auto focus:outline-none focus:border-accent-2 text-sm text-text-primary'
                                        {...register('passwordConfirm', {
                                            required: 'Password confirmation is required',
                                            minLength: [
                                                8,
                                                'Password cannot be less than 8 characters',
                                            ],
                                        })}
                                    />
                                    <p className='absolute top-0 transition-all -translate-y-1/2 left-2 text-xs p-1 px-2 bg-accent-2 rounded-sm text-white'>
                                        Password Confirmation
                                    </p>

                                    <img
                                        src={isPasswordConfirmShown ? EyeClosed : EyeOpen}
                                        alt='Eye open icon'
                                        className={`absolute top-1/2 -translate-y-1/2 right-2 ${
                                            isPasswordConfirmShown ? 'mt-3 -mr-[20px]' : 'mt-1'
                                        }`}
                                        width={isPasswordConfirmShown ? 48 : 32}
                                        height={isPasswordConfirmShown ? 48 : 32}
                                        onClick={() =>
                                            setIsPasswordConfirmShown(!isPasswordConfirmShown)
                                        }
                                    />
                                </div>
                                {errors?.passwordConfirm && (
                                    <p className='my-1 text-error text-sm font-medium'>
                                        {errors?.passwordConfirm?.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type='submit'
                                disabled={isLoading}
                                className='p-2 text-md font-medium text-white bg-accent-1 hover:bg-opacity-75 rounded-md disabled:bg-text-secondary disabled:text-gray-50'
                            >
                                {isLoading ? 'Loading...' : 'Register'}
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center self-center text-sm text-text-primary gap-1'>
                        <p>Already have an account?</p>
                        <Link to='/login' className='text-accent-2 font-semibold '>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;
