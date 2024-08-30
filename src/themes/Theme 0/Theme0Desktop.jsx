import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../assets/logo-no-background.svg';
import { RxCross1 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';

function Theme0Desktop() {
    useEffect(function () {
        document.title = 'Builder | Theme 0';
    }, []);

    const themeData = useSelector((state) => state.builder);
    const pricings = JSON.parse(useSelector((state) => state.builder.pricing));

    const businessEmail = useSelector((state) => state.builder.email);

    return (
        <main className='relative z-10 text-text-primary w-full min-h-screen bg-white '>
            <div className='absolute w-full h-[30vh] bg-red-100 -z-10 clip'></div>
            <nav className='w-full relative z-10 p-4 px-8 max-w-7xl mx-auto text-text-primary flex items-center justify-between'>
                <div className='text-xl font-bold'>
                    <img src={themeData.logo || Logo} alt='Logo' className='h-10' />
                </div>
                <ul className='flex flex-row items-center gap-3 text-sm text-text-secondary'>
                    <li className='hover:text-text-primary transition-all cursor-pointer hover:font-semibold'>
                        Home
                    </li>
                    <li className='hover:text-text-primary transition-all cursor-pointer hover:font-semibold'>
                        About Us
                    </li>
                    <li className='hover:text-text-primary transition-all cursor-pointer hover:font-semibold'>
                        Pricing
                    </li>
                    <a
                        href={`mailto:${businessEmail}`}
                        className='hover:text-text-primary p-2  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all cursor-pointer rounded-sm text-white hover:font-semibold'
                    >
                        Contact Us
                    </a>
                </ul>
            </nav>

            <header className='w-full max-w-[55rem] leading-[1.2] tracking-tighter font-medium mx-auto text-7xl text-center min-h-[80vh] flex flex-col gap-8 items-center justify-center'>
                <div className='flex flex-col gap-5 items-center'>
                    <h1 className='leading-[1.3]'>{themeData.pageContent}</h1>
                    <p className='text-sm leading-[1.7] tracking-wide text-text-secondary'></p>
                </div>

                <a
                    className='text-[1rem] text-white tracking-wide p-2 rounded-full bg-gradient-to-r from-pink-500 px-8 via-red-500 to-yellow-500 btn-hover transition-all'
                    href='#pricings'
                >
                    Get started <span className='transition-all'>&rarr;</span>
                </a>
            </header>

            <section className='py-24'>
                <div className='max-w-[55rem] mx-auto text-center flex flex-col gap-4 bg-gray-50 p-8 rounded-md'>
                    <div className='flex flex-col w-full items-center gap-4 justify-center'>
                        <h2 className='text-xl font-medium'>Join Wailist</h2>
                        <input
                            type='text'
                            placeholder='example@email.com'
                            className='max-w-96 min-w-48 w-72 text-sm border p-3 bg-white'
                        />
                        <button className='text-sm text-white tracking-wide p-2 px-6 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 btn-hover transition-all'>
                            Join <span className='transition-all'>&rarr;</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className='py-24'>
                <div className='max-w-[55rem] mx-auto text-center flex flex-col gap-4 px-8'>
                    <h2 className='text-3xl font-medium'>About Us</h2>
                    <div className='flex flex-col gap-2 text-text-secondary'>
                        <p>{themeData.aboutUs}</p>
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-8 py-16' id='pricings'>
                <h2 className='text-3xl font-medium text-center'>Pricing</h2>
                <div className='max-w-[55rem] mx-auto text-center grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] px-6 gap-8'>
                    {pricings.map((pricing, pricingIndex) => {
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
                                        <span className='text-sm text-text-secondary'>/month</span>
                                    </p>
                                </div>

                                <button className='text-sm text-white tracking-wide p-2 px-6 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 btn-hover transition-all'>
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

            <section className='py-24 bg-gray-100'>
                <footer className='max-w-[55rem] mx-auto text-center flex flex-col gap-4 px-8'>
                    <nav className='w-full relative z-10 p-4 px-8 max-w-[70rem] mx-auto text-text-primary flex items-center justify-between'>
                        <div className='text-xl font-bold'>
                            <img src={themeData.logo || Logo} alt='Logo' className='h-10' />
                        </div>
                        <ul className='flex flex-row items-center gap-3 text-sm text-text-secondary'>
                            <li className='hover:text-text-primary transition-all cursor-pointer hover:font-semibold'>
                                Home
                            </li>
                            <li className='hover:text-text-primary transition-all cursor-pointer hover:font-semibold'>
                                About Us
                            </li>
                            <li className='hover:text-text-primary transition-all cursor-pointer hover:font-semibold'>
                                Pricing
                            </li>
                            <li className='hover:text-text-primary p-2  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all cursor-pointer rounded-sm text-white hover:font-semibold'>
                                Contact Us
                            </li>
                        </ul>
                    </nav>
                </footer>
            </section>
        </main>
    );
}

export default Theme0Desktop;
