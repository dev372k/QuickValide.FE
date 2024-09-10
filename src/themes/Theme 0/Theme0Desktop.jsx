import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../assets/logo-no-background.svg';
import { RxCross1 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import AppStoreIcon from '../../assets/appstore.png';
import PlayStoreIcon from '../../assets/playstore.png';
import { FaAppStoreIos } from 'react-icons/fa6';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

function Theme0Desktop() {
    const themeData = useSelector((state) => state?.builder);
    const pricings = themeData?.pricing ? JSON.parse(themeData?.pricing) : [];

    const businessEmail = useSelector((state) => state?.builder?.email);

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

    const shadeRgb = hexToRgb(themeData?.style?.shade);
    const colorRgb = hexToRgb(themeData?.style?.color);
    const backgroundRgb = hexToRgb(themeData?.style?.background);

    return (
        <main
            className={`relative z-10 text-text-primary w-full min-h-screen `}
            style={{
                fontFamily: themeData?.style?.font,
                color: `rgb(${colorRgb})`,
                background: `rgb(${backgroundRgb})`,
            }}
        >
            <div
                className='absolute w-full h-[80vh] -z-10 clip'
                style={{
                    background: `radial-gradient(circle at 30% 30%, ${themeData.style.background}, transparent),
                    radial-gradient(circle at 70% 70%, rgba(${backgroundRgb}, 0.1), transparent),
                    radial-gradient(circle at 30% 70%, rgba(${backgroundRgb}, 0.5), transparent),
                    radial-gradient(circle at 70% 30%,rgba(${backgroundRgb}, 0.4), transparent),
                    radial-gradient(circle at 50% 50%, rgba(${shadeRgb}, 0.1), transparent)`,
                }}
            ></div>
            <nav
                className='w-full relative z-10 p-4 px-8 max-w-7xl mx-auto text-text-primary flex items-center justify-between'
                style={{ color: themeData.style.shade }}
            >
                <div className='text-xl font-bold'>
                    {themeData.logo ? (
                        <img src={themeData.logo} alt='Logo' className='h-10' />
                    ) : (
                        <p className='text-xl md:text-2xl text-text-primary font-semibold tracking-tighter'>
                            {themeData.name}
                        </p>
                    )}
                </div>
                <ul className='flex flex-row items-center gap-3 text-sm '>
                    <li className='hover:opacity-75 transition-all cursor-pointer hover:font-semibold'>
                        Home
                    </li>
                    <li className='hover:opacity-75 transition-all cursor-pointer hover:font-semibold'>
                        About Us
                    </li>
                    {pricings.length > 0 && (
                        <li className='hover:opacity-75 transition-all cursor-pointer hover:font-semibold'>
                            Pricing
                        </li>
                    )}
                    <a
                        href={`mailto:${businessEmail}`}
                        className={`hover:text-text-primary p-2 bg-gradient-to-r  transition-all cursor-pointer rounded-sm text-white hover:font-semibold`}
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(${shadeRgb}, 1), rgba(${shadeRgb}, 0.4)`,
                        }}
                    >
                        Contact Us
                    </a>
                </ul>
            </nav>

            <header className='w-full px-16 leading-[1.2] tracking-tighter font-medium mx-auto text-5xl text-center min-h-[80vh] flex flex-col gap-8 items-center justify-center'>
                <div className='flex flex-col gap-5 items-center'>
                    <h1 className='leading-[1.3]'>{themeData.pageContent}</h1>
                </div>

                <a
                    className='text-[1rem] text-white tracking-wide p-2 rounded-full bg-gradient-to-r btn-hover transition-all'
                    href='#pricings'
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(${shadeRgb}, 1), rgba(${shadeRgb}, 0.4))`,
                    }}
                >
                    Get started <span className='transition-all'>&rarr;</span>
                </a>
            </header>

            {themeData.videolink && (
                <section className='py-24 max-w-[55rem] mx-auto flex items-center justify-center'>
                    <iframe
                        width='700'
                        height='400'
                        src={themeData.videolink}
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerpolicy='strict-origin-when-cross-origin'
                        allowfullscreen
                    ></iframe>
                </section>
            )}

            <section className='py-24'>
                <div
                    className='max-w-[55rem] mx-auto text-center flex flex-col gap-4  p-8 rounded-md'
                    style={{ backgroundColor: 'rgba(0, 0, 0, .2)' }}
                >
                    <div className='flex flex-col w-full items-center gap-4 justify-center'>
                        <h2 className='text-xl font-medium'>Join Wailist</h2>
                        <input
                            type='text'
                            placeholder='example@email.com'
                            className='max-w-96 min-w-48 w-72 text-sm border p-3 bg-white'
                        />
                        <button
                            className='text-sm text-white tracking-wide p-2 px-6 rounded-full bg-gradient-to-r btn-hover transition-all'
                            style={{
                                backgroundImage: `linear-gradient(to right, rgba(${shadeRgb}, 1), rgba(${shadeRgb}, 0.4))`,
                            }}
                        >
                            Join <span className='transition-all'>&rarr;</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className='py-24'>
                <div className='max-w-[55rem] mx-auto text-center flex flex-col gap-4 px-8'>
                    <h2 className='text-3xl font-medium'>About Us</h2>
                    <div
                        className='flex flex-col gap-2'
                        style={{ color: `rgba(${colorRgb}, 0.8)` }}
                    >
                        <p>{themeData.aboutUs}</p>
                    </div>
                </div>
            </section>

            {pricings?.length > 0 && (
                <section className='flex flex-col gap-8 py-16' id='pricings'>
                    <h2 className='text-3xl font-medium text-center'>Pricing</h2>
                    <div className='max-w-[55rem] mx-auto text-center grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] px-6 gap-8'>
                        {pricings.map((pricing, pricingIndex) => {
                            return (
                                <div
                                    className='p-5 rounded-sm border flex flex-col gap-5 w-full'
                                    style={{ borderColor: `rgba(0, 0, 0, .2)` }}
                                    key={pricingIndex}
                                >
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-2xl font-medium'>{pricing.name}</h3>
                                        <p className='text-lg font-normal'>
                                            <span
                                                className='text-transparent bg-clip-text bg-gradient-to-r font-bold text-3xl'
                                                style={{
                                                    backgroundImage: `linear-gradient(to right, rgba(${shadeRgb}, 1), rgba(${shadeRgb}, 0.4))`,
                                                }}
                                            >
                                                ${pricing.price}
                                            </span>
                                            <span
                                                className='text-sm '
                                                style={{ color: `rgba(${colorRgb}, 0.8)` }}
                                            >
                                                /month
                                            </span>
                                        </p>
                                    </div>

                                    <button
                                        className='text-sm text-white tracking-wide p-2 px-6 rounded-full bg-gradient-to-r  btn-hover transition-all'
                                        style={{
                                            backgroundImage: `linear-gradient(to right, rgba(${shadeRgb}, 1), rgba(${shadeRgb}, 0.4))`,
                                        }}
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
                className='py-24 z-10 relative'
                style={{
                    backgroundColor: `rgba(0, 0, 0, .2)`,
                }}
            >
                <footer className='max-w-[55rem] mx-auto text-center flex flex-col gap-4 sm:px-8 '>
                    <nav className='w-full relative z-10 p-4 px-8 max-w-[70rem] mx-auto text-text-primary flex flex-col sm:flex-row items-center justify-between gap-8'>
                        <div className='text-xl font-bold flex flex-col gap-4 sm:items-start'>
                            {themeData.logo ? (
                                <img src={themeData.logo} alt='Logo' className='h-10' />
                            ) : (
                                <p className='text-xl md:text-2xl text-text-primary font-semibold tracking-tighter'>
                                    {themeData.name}
                                </p>
                            )}

                            <div
                                className='flex items-center text-center gap-4'
                                style={{ color: `rgb(${shadeRgb})` }}
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
                        </div>
                        <ul
                            className='flex flex-row items-center gap-3 text-sm '
                            style={{ color: `rgb(${shadeRgb})` }}
                        >
                            <li className='hover:opacity-75 transition-all cursor-pointer hover:font-semibold'>
                                Home
                            </li>
                            <li className='hover:opacity-75 transition-all cursor-pointer hover:font-semibold'>
                                About Us
                            </li>
                            {pricings.length > 0 && (
                                <li className='hover:opacity-75 transition-all cursor-pointer hover:font-semibold'>
                                    Pricing
                                </li>
                            )}
                            <li
                                className='hover:opacity-75 p-2  bg-gradient-to-r transition-all cursor-pointer rounded-sm text-white hover:font-semibold'
                                style={{
                                    backgroundImage: `linear-gradient(to right, rgba(${shadeRgb}, 1), rgba(${shadeRgb}, 0.4))`,
                                }}
                            >
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
