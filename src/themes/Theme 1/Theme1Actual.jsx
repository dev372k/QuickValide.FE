import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../assets/logo-no-background.svg';
import { RxCross1 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import { request } from '../../helpers/requestHelper';
import { message } from 'antd';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import CustomLoader from '../../components/CustomLoader';
import { FaAppStoreIos } from 'react-icons/fa6';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { Helmet } from 'react-helmet';

function Theme1Actual() {
    const app = useSelector((state) => state.builder);

    const themeData = useSelector((state) => state.builder);
    const pricing = app.pricing ? JSON.parse(useSelector((state) => state.builder.pricing)) : [];

    const inputRef = useRef(null);

    const [selectedPlan, setSelectedPlan] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (selectedPlan) {
            inputRef.current?.focus();
        }
    }, [selectedPlan]);

    function focusInput() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    async function handleJoinWaitlist(data) {
        if (!data.email) return;
        setIsLoading(true);
        const res = await request('https://api.quickvalide.com/api/Waitlist', 'POST', {
            appId: app.id,
            email: data.email,
            selectedPlan,
        });
        setIsLoading(false);

        if (res?.status) message.success(res.message);
        else message.error(res.message);
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const hexToRgb = (hex) => {
        let r = 0,
            g = 0,
            b = 0;
        if (hex?.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        } else if (hex?.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return `${r}, ${g}, ${b}`;
    };

    const shadeRgb = hexToRgb(themeData.style.shade);
    const colorRgb = hexToRgb(themeData.style.color);
    const backgroundRgb = hexToRgb(themeData.style.background);
    return (
        <main
            className={`relative z-10 text-text-primary w-full min-h-screen `}
            // style={{
            //     fontFamily: themeData.style.font,
            //     color: `rgb(${colorRgb})`,
            //     background: `rgb(${backgroundRgb})`,
            // }}
        >
            {isLoading && <CustomLoader />}
            <Helmet>
                <title>{themeData?.seo?.title}</title>
                <meta name='description' content={themeData?.seo?.description} />
                <meta name='keywords' content='React, SEO, Meta Tags, Helmet' />
            </Helmet>

            <nav
                className='w-full relative z-10 p-4 px-8 max-w-7xl mx-auto text-text-primary flex items-center justify-between'
                // style={{ color: themeData.style.shade }}
            >
                <a href='#' className='text-xl font-bold'>
                    <img src={app.logo || Logo} alt='Logo' className='h-10' />
                </a>
                <ul className='flex flex-col sm:flex-row items-center gap-3 text-sm '>
                    <a
                        href='#'
                        className='hover:opacity-75 transition-all cursor-pointer hover:font-semibold'
                    >
                        Home
                    </a>
                    <a
                        href='#about'
                        className='hover:opacity-75 transition-all cursor-pointer hover:font-semibold'
                    >
                        About Us
                    </a>
                    {pricing.length > 0 && (
                        <a
                            href='#pricing'
                            className='hover:opacity-75 transition-all cursor-pointer hover:font-semibold'
                        >
                            Pricing
                        </a>
                    )}

                    <a
                        href={`mailto:${app?.email}`}
                        className='hover:opacity-80 p-2  bg-gradient-to-r f transition-all cursor-pointer rounded-md text-white hover:font-semibold bg-blue-500 '
                        // style={{
                        //     backgroundImage: `linear-gradient(to right, rgba(${shadeRgb}, 1), rgba(${shadeRgb}, 0.9)`,
                        // }}
                    >
                        Contact Us
                    </a>
                </ul>
            </nav>

            <header className='w-full md:max-w-[25rem] px-8 lg:px-16 lg:max-w-[50rem] leading-[1.2] tracking-tighter font-medium mx-auto text-3xl md:text-4xl lg:text-5xl  text-center min-h-[80vh] flex flex-col gap-8 items-center justify-center'>
                <div className='flex flex-col gap-5 items-center'>
                    <h1 className='leading-[1.3]'>{app.pageContent}</h1>
                </div>

                <a
                    href={app.pricing ? '#pricing' : '#'}
                    className='text-[1rem] text-white tracking-wide p-3 px-8 rounded-md bg-gradient-to-r btn-hover transition-all bg-blue-500'
                    // style={{
                    //     backgroundImage: `linear-gradient(to right, rgba(${shadeRgb}, 1), rgba(${shadeRgb}, 0.9))`,
                    // }}
                    onClick={() => {
                        if (!app.pricing) focusInput();
                    }}
                >
                    Get started <span className='transition-all'>&rarr;</span>
                </a>
            </header>

            <section className='py-24 max-w-[55rem] mx-auto flex items-center justify-center'>
                <iframe
                    width='700'
                    height='400'
                    src='https://www.youtube.com/embed/-nsJoqO8F64'
                    title='Take Me In Your Arms - Dr.Lamar - TikTok Viral - Song Music'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerpolicy='strict-origin-when-cross-origin'
                    allowfullscreen
                ></iframe>
            </section>

            <section className='py-24'>
                <div
                    className='w-full md:max-w-[25rem] lg:max-w-[55rem] mx-auto text-center flex flex-col gap-4 p-8 rounded-md bg-white'
                    // style={{ backgroundColor: 'rgba(0, 0, 0, .2)' }}
                >
                    <form
                        className='flex flex-col w-full items-center gap-4 justify-center'
                        onSubmit={handleSubmit(handleJoinWaitlist)}
                    >
                        <h2 className='text-xl font-medium'>Join Wailist</h2>
                        <input
                            type='text'
                            placeholder='example@email.com'
                            className='max-w-96 min-w-48 w-72 text-sm border p-3 bg-white'
                            ref={inputRef}
                            {...register('email', {
                                required: 'Email is required',
                                validate: (val) =>
                                    validator.isEmail(val) || 'Please enter a valid email address',
                            })}
                        />
                        {errors?.email && (
                            <p className='text-sm text-error -mt-2'>{errors.email.message}</p>
                        )}
                        <button
                            onClick={handleJoinWaitlist}
                            className='text-sm text-white tracking-wide p-2 px-6 rounded-full bg-gradient-to-r  btn-hover transition-all'
                            style={{
                                backgroundImage: `linear-gradient(to right, rgba(${shadeRgb}, 1), rgba(${shadeRgb}, 0.9))`,
                            }}
                        >
                            Join <span className='transition-all'>&rarr;</span>
                        </button>
                    </form>
                </div>
            </section>

            <section className='py-24' id='about'>
                <div className='w-full md:max-w-[25rem] lg:max-w-[55rem] mx-auto text-center flex flex-col gap-4 px-8'>
                    <h2 className='text-3xl font-medium'>About Us</h2>
                    <div
                        className='flex flex-col gap-2 text-text-secondary'
                        // style={{ color: `rgba(${colorRgb}, 0.8)` }}
                    >
                        <p>{app?.aboutUs}</p>
                    </div>
                </div>
            </section>

            {pricing?.length > 0 && (
                <section className='flex flex-col gap-8 py-16' id='pricing'>
                    <h2 className='text-3xl font-medium text-center'>Pricing</h2>
                    <div className='w-full md:max-w-[25rem] lg:max-w-[55rem] mx-auto text-center grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] px-6 gap-8'>
                        {pricing.map((pricing, pricingIndex) => {
                            return (
                                <div
                                    className='p-5 rounded-sm border flex flex-col gap-5 w-full bg-white'
                                    // style={{ borderColor: `rgba(0, 0, 0, .2)` }}
                                    key={pricingIndex}
                                >
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-2xl font-medium'>{pricing.name}</h3>
                                        <p className='text-lg font-normal'>
                                            <span
                                                className='text-transparent bg-clip-text bg-gradient-to-r  font-bold text-3xl'
                                                // style={{
                                                //     backgroundImage: `linear-gradient(to right, rgba(${shadeRgb}, 1), rgba(${shadeRgb}, 0.9))`,
                                                // }}
                                            >
                                                ${pricing.price}
                                            </span>
                                            <span className='text-sm text-text-secondary'>
                                                /month
                                            </span>
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => {
                                            focusInput();
                                            setSelectedPlan(pricing.name);
                                        }}
                                        className='text-sm text-white tracking-wide p-2 px-6 rounded-md   btn-hover transition-all bg-blue-500'
                                        // style={{
                                        //     backgroundImage: `linear-gradient(to right, rgba(${shadeRgb}, 1), rgba(${shadeRgb}, 0.9))`,
                                        // }}
                                    >
                                        Subscribe
                                    </button>

                                    <ul className='flex flex-col gap-2 text-sm self-start text-left'>
                                        {pricing.features.map((feature, featureIndex) => {
                                            return (
                                                <li
                                                    className='flex items-center gap-2'
                                                    key={featureIndex}
                                                >
                                                    {feature.isIncluded ? (
                                                        <TiTick size={16} />
                                                    ) : (
                                                        <RxCross1 size={16} />
                                                    )}
                                                    <p>{feature.feature}</p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            <section
                className='py-24 bg-white'
                // style={{
                //     backgroundColor: `rgba(0, 0, 0, .2)`,
                // }}
            >
                <footer className='w-full md:max-w-[25rem] lg:max-w-[55rem] mx-auto text-center flex flex-col gap-4 px-8'>
                    <nav className='w-full relative z-10 p-4 px-8 max-w-[70rem] mx-auto text-text-primary flex items-center justify-between'>
                        <a
                            href='#'
                            className='text-xl font-bold flex flex-col gap-4 sm:items-start'
                        >
                            <img src={themeData.logo || Logo} alt='Logo' className='h-10' />

                            <div
                                className='flex items-center text-center gap-4 text-text-primary'
                                // style={{ color: `rgb(${shadeRgb})` }}
                            >
                                {themeData.appstoreLink && (
                                    <a href={themeData.appstoreLink}>
                                        <div className='flex flex-col items-center'>
                                            <FaAppStoreIos size={28} />
                                            <p className='text-xs'>App Store</p>
                                        </div>
                                    </a>
                                )}
                                {themeData.playstoreLink && (
                                    <a href={themeData.playstoreLink}>
                                        <div className='flex flex-col items-center'>
                                            <IoLogoGooglePlaystore size={28} />
                                            <p className='text-xs'>Play Store</p>
                                        </div>
                                    </a>
                                )}
                            </div>
                        </a>

                        <ul
                            className='flex flex-col sm:flex-row items-center gap-3 text-sm text-text-primary'
                            // style={{ color: `rgb(${shadeRgb})` }}
                        >
                            <a
                                href='#'
                                className='hover:opacity-75 transition-all cursor-pointer hover:font-semibold'
                            >
                                Home
                            </a>
                            <a
                                href='#about'
                                className='hover:opacity-75 transition-all cursor-pointer hover:font-semibold'
                            >
                                About Us
                            </a>
                            <a
                                href='#pricing'
                                className='hover:opacity-75 transition-all cursor-pointer hover:font-semibold'
                            >
                                Pricing
                            </a>
                            <a
                                href={`mailto:${app?.email}`}
                                className='hover:opacity-80 p-2   transition-all cursor-pointer rounded-md bg-blue-500 text-white hover:font-semibold'
                                // style={{
                                //     backgroundImage: `linear-gradient(to right, rgba(${shadeRgb}, 1), rgba(${shadeRgb}, 0.9))`,
                                // }}
                            >
                                Contact Us
                            </a>
                        </ul>
                    </nav>
                </footer>
            </section>
        </main>
    );
}

export default Theme1Actual;