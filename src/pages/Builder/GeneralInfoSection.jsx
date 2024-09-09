import Logo from '../../assets/logo-no-background.svg';
import { useForm } from 'react-hook-form';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    updateLogo,
    updateGeneralInfo,
    updateStyle,
    appstoreLink,
} from '../../services/builderSlice';
import validator from 'validator';

function GeneralInfoSection() {
    const dispatch = useDispatch();
    const themeData = useSelector((state) => state.builder);
    const logoBase64 = useSelector((state) => state.builder.logo);
    true;

    const initialThemeData = useMemo(() => (themeData ? themeData : {}), []);
    const themeId = useSelector((state) => state.builder.themeId);

    console.log(initialThemeData);

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm({
        defaultValues: initialThemeData,
    });

    useEffect(() => {
        if (initialThemeData) {
            reset({
                email: initialThemeData.email,
                appstoreLink: initialThemeData.appstoreLink,
                playstoreLink: initialThemeData.playstoreLink,
                svglink: initialThemeData.svglink,
                style: {
                    color: initialThemeData.style.color,
                    background: initialThemeData.style.background,
                    shade: initialThemeData.style.shade,
                    font: initialThemeData.style.font,
                },
            });
        }
    }, [initialThemeData, reset]);

    useEffect(() => {
        if (Object.keys(initialThemeData).length > 0) {
            reset(initialThemeData);
        }
    }, [initialThemeData, reset]);

    useEffect(() => {
        watch((values) => {
            dispatch(
                updateGeneralInfo({
                    email: values.email,
                    appstoreLink: values.appstoreLink,
                    svglink: values.svglink,
                    playstoreLink: values.playstoreLink,
                    videLink: values.videoLink,
                })
            );
        });
    }, [
        watch('email'),
        watch('appstoreLink'),
        watch('playstoreLink'),
        watch('svglink'),
        watch('videoLink'),
        dispatch,
    ]);

    useEffect(() => {
        watch((values) => {
            dispatch(updateStyle({ ...values?.style }));
        });
    }, [watch('style'), dispatch]);

    const logo = watch('logo');

    useEffect(() => {
        if (logo && logo[0] instanceof Blob) {
            const reader = new FileReader();
            reader.onloadend = () => {
                dispatch(updateLogo(reader.result));
            };
            reader.readAsDataURL(logo[0]);
        } else {
            dispatch(updateLogo(themeData.logo));
        }
    }, [logo]);

    const handleImageChange = (e) => {
        const file = logo.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setValue('logoBase64', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className='mt-2 h-full mb-8'>
            <div className=''>
                <form
                    className='flex items-start flex-col gap-8 mt-4'
                    onSubmit={handleSubmit(onSubmit)}
                >
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

                    <div className='w-full'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-lg font-semibold'>Styles</h3>

                            {themeId === 2 && (
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col text-sm'>
                                        <h4 className='font-semibold'>Wave SVG color</h4>
                                        <p className='text-text-secondary'>
                                            The following color will be applied to the svg in
                                            background at the top
                                        </p>
                                    </div>
                                    <input
                                        type='color'
                                        className='w-10 h-10 border-2 border-gray-300  cursor-pointer p-0 focus:outline-none'
                                        {...register('svglink')}
                                    />
                                </div>
                            )}

                            {themeId !== 1 && (
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col text-sm'>
                                        <h4 className='font-semibold'>Text color</h4>
                                        <p className='text-text-secondary'>
                                            The following color will be applied to all your text in
                                            the page
                                        </p>
                                    </div>
                                    <input
                                        type='color'
                                        className='w-10 h-10 border-2 border-gray-300  cursor-pointer p-0 focus:outline-none'
                                        {...register('style.color')}
                                    />
                                </div>
                            )}

                            {themeId !== 1 && (
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col text-sm'>
                                        <h4 className='font-semibold'>Background Color</h4>
                                        <p className='text-text-secondary'>
                                            The following color will be applied to background of
                                            your page
                                        </p>
                                    </div>
                                    <input
                                        type='color'
                                        className='w-10 h-10 border-2 border-gray-300  cursor-pointer p-0 focus:outline-none'
                                        {...register('style.background')}
                                    />
                                </div>
                            )}

                            {themeId != 1 && (
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col text-sm'>
                                        <h4 className='font-semibold'>Accent Color</h4>
                                        <p className='text-text-secondary'>
                                            The following color will be applied to your Buttons and
                                            Links in the page
                                        </p>
                                    </div>
                                    <input
                                        type='color'
                                        className='w-10 h-10 border-2 border-gray-300  cursor-pointer p-0 focus:outline-none'
                                        {...register('style.shade')}
                                    />
                                </div>
                            )}

                            {themeId !== 1 && (
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col text-sm'>
                                        <h4 className='font-semibold'>Font Family</h4>
                                        <p className='text-text-secondary'>
                                            The following font will be applied to all your text in
                                            the page
                                        </p>
                                    </div>
                                    <select
                                        {...register('style.font')}
                                        className='mt-1 block w-full p-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm'
                                    >
                                        <option value=''>Select a Font</option>
                                        <option value='Inter'>Inter</option>
                                        <option value='Lato'>Lato</option>
                                        <option value='Montserrat'>Montserrat</option>
                                        <option value='Open Sans'>Open Sans</option>
                                        <option value='Poppins'>Poppins</option>
                                        <option value='Raleway'>Raleway</option>
                                        <option value='Roboto'>Roboto</option>
                                        <option value='Oswald'>Oswald</option>
                                    </select>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3 className=' font-semibold'>Video Link</h3>
                            <p className='text-sm text-text-secondary'>
                                If you got any video which you think can describe your business
                                more, feel free to paste its link below.
                            </p>
                        </div>
                        <input
                            type='text'
                            className='text-sm p-2 bg-none border rounded-md w-full mt-2'
                            {...register('videoLink')}
                        />
                    </div>

                    <div>
                        <div>
                            <h3 className=' font-semibold'>Email Address</h3>
                            <p className='text-sm text-text-secondary'>
                                Please make sure to use correct email, people will use this email to
                                contact you.
                            </p>
                        </div>
                        <input
                            type='text'
                            placeholder={themeData?.email || 'Email address'}
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
                            <h3 className=' font-semibold'>Playstore Link</h3>
                        </div>
                        <input
                            type='text'
                            placeholder={themeData?.playstoreLink || 'Email address'}
                            className='text-sm p-2 bg-none border rounded-md w-full mt-2'
                            {...register('playstoreLink')}
                        />
                    </div>

                    <div className='w-full mb-8'>
                        <div>
                            <h3 className=' font-semibold'>Appstore Link</h3>
                        </div>
                        <input
                            type='text'
                            placeholder={themeData?.appstoreLink || 'Email address'}
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
