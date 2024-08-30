import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../assets/logo-no-background.svg';
import { RxCross1 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import { request } from '../../helpers/requestHelper';

function Theme0Actual() {
    const app = useSelector((state) => state.builder);

    const pricing = app.pricing ? JSON.parse(useSelector((state) => state.builder.pricing)) : [];

    const inputRef = useRef(null);

    const [selectedPlan, setSelectedPlan] = useState('');
    const [email, setEmail] = useState('');

    useEffect(function () {
        document.title = app?.name || 'Quickvalide | App';
    }, []);

    function focusInput() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    async function handleJoinWaitlist() {
        const res = await request('https://api.quickvalide.com/api/Waitlist', 'POST', {
            appId: app.id,
            email,
            selectedPlan,
        });

        console.log(res);
    }

    return (
        <main className='relative z-10 text-text-primary w-full min-h-screen bg-white '>
            <div className='absolute w-full h-[30vh] bg-red-100 -z-10 clip'></div>
            <nav className='w-full relative z-10 p-4 px-8 max-w-7xl mx-auto text-text-primary flex items-center justify-between'>
                <a href='#' className='text-xl font-bold'>
                    <img src={app.logo || Logo} alt='Logo' className='h-10' />
                </a>
                <ul className='flex flex-col sm:flex-row items-center gap-3 text-sm text-text-secondary'>
                    <a
                        href='#'
                        className='hover:text-text-primary transition-all cursor-pointer hover:font-semibold'
                    >
                        Home
                    </a>
                    <a
                        href='#about'
                        className='hover:text-text-primary transition-all cursor-pointer hover:font-semibold'
                    >
                        About Us
                    </a>
                    <a
                        href='#pricing'
                        className='hover:text-text-primary transition-all cursor-pointer hover:font-semibold'
                    >
                        Pricing
                    </a>
                    <a
                        href={`mailto:${app?.email}`}
                        className='hover:text-text-primary p-2  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all cursor-pointer rounded-sm text-white hover:font-semibold'
                    >
                        Contact Us
                    </a>
                </ul>
            </nav>

            <header className='w-full md:max-w-[25rem] px-8 lg:max-w-[55rem] leading-[1.2] tracking-tighter font-medium mx-auto text-3xl md:text-4x  text-center min-h-[80vh] flex flex-col gap-8 items-center justify-center'>
                <div className='flex flex-col gap-5 items-center'>
                    <h1 className='leading-[1.3]'>{app.pageContent}</h1>
                </div>

                <a
                    href={app.pricing ? '#pricing' : '#'}
                    className='text-[1rem] text-white tracking-wide p-2 px-6 rounded-full bg-gradient-to-r from-pink-500  via-red-500 to-yellow-500 btn-hover transition-all'
                    onClick={() => {
                        if (!app.pricing) focusInput();
                    }}
                >
                    Get started <span className='transition-all'>&rarr;</span>
                </a>
            </header>

            <section className='py-24'>
                <div className='w-full md:max-w-[25rem] lg:max-w-[55rem] mx-auto text-center flex flex-col gap-4 bg-gray-50 p-8 rounded-md'>
                    <div className='flex flex-col w-full items-center gap-4 justify-center'>
                        <h2 className='text-xl font-medium'>Join Wailist</h2>
                        <input
                            type='text'
                            placeholder='example@email.com'
                            className='max-w-96 min-w-48 w-72 text-sm border p-3 bg-white'
                            ref={inputRef}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            onClick={handleJoinWaitlist}
                            className='text-sm text-white tracking-wide p-2 px-6 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 btn-hover transition-all'
                        >
                            Join <span className='transition-all'>&rarr;</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className='py-24' id='about'>
                <div className='w-full md:max-w-[25rem] lg:max-w-[55rem] mx-auto text-center flex flex-col gap-4 px-8'>
                    <h2 className='text-3xl font-medium'>About Us</h2>
                    <div className='flex flex-col gap-2 text-text-secondary'>
                        <p>{app?.aboutUs}</p>
                    </div>
                </div>
            </section>

            {app.pricing && (
                <section className='flex flex-col gap-8 py-16' id='pricing'>
                    <h2 className='text-3xl font-medium text-center'>Pricing</h2>
                    <div className='w-full md:max-w-[25rem] lg:max-w-[55rem] mx-auto text-center grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] px-6 gap-8'>
                        {pricing.map((pricing, pricingIndex) => {
                            return (
                                <div
                                    className='p-5 rounded-sm border flex flex-col gap-5 w-full'
                                    key={pricingIndex}
                                >
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-2xl font-medium'>{pricing.name}</h3>
                                        <p className='text-lg font-normal'>
                                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold text-3xl'>
                                                ${pricing.price}
                                            </span>
                                            <span className='text-sm text-text-secondary'>
                                                /month
                                            </span>
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setSelectedPlan(pricing.name);
                                            focusInput();
                                        }}
                                        className='text-sm text-white tracking-wide p-2 px-6 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 btn-hover transition-all'
                                    >
                                        Subscribe
                                    </button>

                                    <ul className='flex flex-col gap-2 self-start text-left'>
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

            <section className='py-24 bg-gray-100'>
                <footer className='w-full md:max-w-[25rem] lg:max-w-[55rem] mx-auto text-center flex flex-col gap-4 px-8'>
                    <nav className='w-full relative z-10 p-4 px-8 max-w-[70rem] mx-auto text-text-primary flex items-center justify-between'>
                        <a href='#' className='text-xl font-bold'>
                            <img src={app.logo || Logo} alt='Logo' className='h-10' />
                        </a>
                        <ul className='flex flex-col sm:flex-row items-center gap-3 text-sm text-text-secondary'>
                            <a
                                href='#'
                                className='hover:text-text-primary transition-all cursor-pointer hover:font-semibold'
                            >
                                Home
                            </a>
                            <a
                                href='#about'
                                className='hover:text-text-primary transition-all cursor-pointer hover:font-semibold'
                            >
                                About Us
                            </a>
                            <a
                                href='#pricing'
                                className='hover:text-text-primary transition-all cursor-pointer hover:font-semibold'
                            >
                                Pricing
                            </a>
                            <a
                                href={`mailto:${app?.email}`}
                                className='hover:text-text-primary p-2  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all cursor-pointer rounded-sm text-white hover:font-semibold'
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

export default Theme0Actual;
