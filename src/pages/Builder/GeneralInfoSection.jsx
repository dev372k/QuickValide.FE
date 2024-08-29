import Logo from '../../assets/logo-no-background.svg';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLogo, updateGeneralInfo } from '../../services/builderSlice';
import validator from 'validator';

function GeneralInfoSection() {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm();

    const dispatch = useDispatch();
    const themeData = useSelector((state) => state.builder);
    const logoBase64 = useSelector((state) => state.builder.logo);

    const logo = watch('logo');
    const watchedFields = watch();

    useEffect(
        function () {
            if (logo?.length > 0) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    console.log(reader.result);
                    dispatch(updateLogo(reader.result));
                };
                reader.readAsDataURL(logo[0]);
            }
        },
        [logo]
    );

    useEffect(
        function () {
            delete watchedFields.logo;
            dispatch(updateGeneralInfo(watchedFields));
        },
        [watchedFields.email, watchedFields.appstoreLink, watchedFields.playstoreLink]
    );

    useEffect(function () {
        const { logo, email, playstoreLink, appstoreLink } = themeData;
        reset({
            logo,
            email,
            playstoreLink,
            appstoreLink,
        });
    }, []);

    const handleImageChange = (e) => {
        const file = logo.files[0];
        // console.log(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log('Hello');
                setValue('logoBase64', reader.result); // Set the Base64 string in the form data
            };
            reader.readAsDataURL(file);

            console.log(reader);
        }
    };

    return (
        <div className='mt-6 h-full'>
            <div className=''>
                <form class='flex items-start flex-col gap-8 mt-4'>
                    <div className='flex flex-col items-start gap-2'>
                        <h3 className='text-lg font-semibold'>Logo</h3>
                        <div className='flex items-center justify-center'>
                            <img
                                className='h-8 object-cover'
                                src={logoBase64 || Logo}
                                alt='App logo'
                            />
                        </div>
                        <label className='w-full'>
                            <span className='sr-only'>Choose logo</span>
                            <input
                                type='file'
                                className='block w-full text-sm text-text-primary
                              file:mr-4 file:py-1 file:px-3
                              file:rounded-sm file:border-0
                              file:text-sm file:font-semibold
                              file:bg-accent-1/10 file:text-accent-1
                              hover:file:bg-accent-1/20
                            '
                                onChange={handleImageChange}
                                {...register('logo')}
                            />
                        </label>
                    </div>

                    <div>
                        <div>
                            <h3 className='text-lg font-semibold'>Email Address</h3>
                            <p className='text-sm text-text-secondary'>
                                Please make sure to use correct email, people will use this email to
                                contact you.
                            </p>
                        </div>
                        <input
                            type='text'
                            placeholder='Email address'
                            className='text-sm p-2 bg-none border rounded-md w-full mt-2'
                            {...register('email', {
                                required: 'Email is required',
                                validate: (val) =>
                                    validator.isEmail(val) || 'Please enter a valid email',
                            })}
                        />

                        {errors?.email && (
                            <p className='text-sm text-error mt-1'>{errors.email.message}</p>
                        )}
                    </div>

                    <div className='w-full'>
                        <div>
                            <h3 className='text-lg font-semibold'>Playstore Link</h3>
                        </div>
                        <input
                            type='text'
                            placeholder='Playstore Link'
                            className='text-sm p-2 bg-none border rounded-md w-full mt-2'
                            {...register('playstoreLink')}
                        />
                    </div>

                    <div className='w-full'>
                        <div>
                            <h3 className='text-lg font-semibold'>Appstore Link</h3>
                        </div>
                        <input
                            type='text'
                            placeholder='Appstore Link'
                            className='text-sm p-2 bg-none border rounded-md w-full mt-2'
                            {...register('appstoreLink')}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GeneralInfoSection;
