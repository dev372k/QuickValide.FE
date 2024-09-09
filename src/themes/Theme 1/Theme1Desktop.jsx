import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../assets/logo-no-background.svg';
import { RxCross1 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import AppStoreIcon from '../../assets/appstore.png';
import PlayStoreIcon from '../../assets/playstore.png';
import { FaAppStoreIos } from 'react-icons/fa6';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

function Theme1Desktop() {
    const themeData = useSelector((state) => state?.builder);
    const pricings = themeData?.pricing ? JSON.parse(themeData?.pricing) : [];
    const svglink = useSelector((state) => state.builder.svglink);

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
            className={`relative z-10 text-text-primary w-full min-h-screen text-text-primary`}
            // style={{
            //     fontFamily: themeData?.style?.font,
            //     color: `rgb(${colorRgb})`,
            //     background: `rgb(${backgroundRgb})`,
            // }}
        >
            <svg
                id='svg'
                viewBox='0 0 1440 690'
                xmlns='http://www.w3.org/2000/svg'
                class='transition duration-300 ease-in-out delay-150 absolute top-0 left-0 right-0 -z-10'
            >
                <path
                    d='M 0,700 L 0,131 C 70.19348306332843,106.92001104565539 140.38696612665686,82.84002209131077 195,111 C 249.61303387334314,139.15997790868923 288.645618556701,219.55992268041234 338,264 C 387.354381443299,308.44007731958766 447.030559646539,316.92028718703983 519,338 C 590.969440353461,359.07971281296017 675.232142857143,392.75892857142856 741,405 C 806.767857142857,417.24107142857144 854.0408689248894,408.043998527246 901,416 C 947.9591310751106,423.956001472754 994.6043814432992,449.06507731958754 1058,487 C 1121.3956185567008,524.9349226804125 1201.5416053019146,575.6956921944036 1268,606 C 1334.4583946980854,636.3043078055964 1387.2291973490428,646.1521539027982 1440,656 L 1440,700 L 0,700 Z'
                    stroke='none'
                    stroke-width='0'
                    fill={svglink || '#ff0080'}
                    fill-opacity='0.4'
                    class='transition-all duration-300 ease-in-out delay-150 path-0'
                    transform='rotate(-180 720 350)'
                ></path>
                <path
                    d='M 0,700 L 0,306 C 53.293630338733436,278.4443114874816 106.58726067746687,250.8886229749632 176,265 C 245.41273932253313,279.1113770250368 330.94458762886603,334.8898195876289 393,358 C 455.05541237113397,381.1101804123711 493.6343888070692,371.5520986745214 542,408 C 590.3656111929308,444.4479013254786 648.5178571428572,526.9017857142858 701,562 C 753.4821428571428,597.0982142857142 800.2941826215022,584.8407584683358 874,615 C 947.7058173784978,645.1592415316642 1048.3054123711343,717.735180412371 1106,735 C 1163.6945876288657,752.264819587629 1178.4841678939615,714.2185198821797 1227,721 C 1275.5158321060385,727.7814801178203 1357.7579160530192,779.3907400589101 1440,831 L 1440,700 L 0,700 Z'
                    stroke='none'
                    stroke-width='0'
                    fill={svglink || '#ff0080'}
                    fill-opacity='0.53'
                    class='transition-all duration-300 ease-in-out delay-150 path-1'
                    transform='rotate(-180 720 350)'
                ></path>
                <path
                    d='M 0,700 L 0,481 C 44.45360824742268,451.2767857142857 88.90721649484536,421.55357142857144 156,446 C 223.09278350515464,470.44642857142856 312.82474226804123,549.0625 372,591 C 431.17525773195877,632.9375 459.7938144329896,638.1964285714286 511,647 C 562.2061855670104,655.8035714285714 636,668.1517857142857 696,685 C 756,701.8482142857143 802.2061855670103,723.1964285714287 870,756 C 937.7938144329897,788.8035714285713 1027.175257731959,833.0625 1100,871 C 1172.824742268041,908.9375 1229.0927835051546,940.5535714285714 1283,962 C 1336.9072164948454,983.4464285714286 1388.4536082474228,994.7232142857142 1440,1006 L 1440,700 L 0,700 Z'
                    stroke='none'
                    stroke-width='0'
                    fill={svglink || '#ff0080'}
                    fill-opacity='1'
                    class='transition-all duration-300 ease-in-out delay-150 path-2'
                    transform='rotate(-180 720 350)'
                ></path>
            </svg>
            <nav
                className='w-full relative z-10 p-4 px-8 max-w-7xl mx-auto text-text-primary flex items-center justify-between text-text-primary'
                // style={{ color: themeData.style.shade }}
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
                        className={`hover:bg-opacity-75 p-2 px-4 rounded-md bg-gradient-to-r  transition-all cursor-pointer  text-black hover:font-semibold bg-blue-500 text-white`}
                        // style={{
                        //     background: `rgba(${shadeRgb}, 1)`,
                        // }}
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
                    className='text-[1rem] text-white tracking-wide p-3 px-8 rounded-md bg-gradient-to-r btn-hover transition-all bg-blue-500'
                    href='#pricings'
                    // style={{
                    //     background: `rgba(${shadeRgb}, 1)`,
                    // }}
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
                <div className='max-w-[55rem] mx-auto text-center flex flex-col gap-4  p-8 rounded-md bg-white shadow-md border'>
                    <div className='flex flex-col w-full items-center gap-4 justify-center'>
                        <h2 className='text-xl font-medium'>Join Wailist</h2>
                        <input
                            type='text'
                            placeholder='example@email.com'
                            className='max-w-96 min-w-48 w-72 text-sm border p-3 bg-white rounded-md'
                        />
                        <button
                            className='text-sm text-white tracking-wide p-3 px-6 rounded-md bg-gradient-to-r btn-hover transition-all max-w-96 min-w-48 w-72 bg-blue-500'
                            // style={{
                            //     background: `rgba(${shadeRgb}, 1)`,
                            // }}
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
                        className='flex flex-col gap-2 text-text-secondary'
                        // style={{ color: `rgba(${colorRgb}, 0.8)` }}
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
                                    className='p-5 rounded-lg border flex flex-col gap-5 w-full bg-white shadow-md '
                                    key={pricingIndex}
                                >
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-2xl font-medium'>{pricing.name}</h3>
                                        <p className='text-lg font-normal'>
                                            <span
                                                className='  font-bold text-3xl text-blue-500'
                                                // style={{
                                                //     color: `rgba(${shadeRgb}, 1)`,
                                                // }}
                                            >
                                                ${pricing.price}
                                            </span>
                                            <span
                                                className='text-sm text-text-secondary'
                                                // style={{ color: `rgba(${colorRgb}, 0.8)` }}
                                            >
                                                /month
                                            </span>
                                        </p>
                                    </div>

                                    <button
                                        className='text-sm text-white tracking-wide p-2 px-6 rounded-md   btn-hover transition-all bg-blue-500'
                                        // style={{
                                        //     background: `rgba(${shadeRgb}, 1)`,
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

            <section className='py-24 z-10 relative bg-white border-t'>
                <footer className='max-w-[55rem] mx-auto text-center flex flex-col gap-4 sm:px-8 '>
                    <nav className='w-full relative z-10 p-4 px-8 max-w-[70rem] mx-auto text-text-primary flex flex-col sm:flex-row items-center justify-between gap-8'>
                        <div className='text-xl font-bold flex flex-col gap-4 sm:items-start'>
                            <img src={themeData?.logo || Logo} alt='Logo' className='h-10' />

                            <div
                                className='flex items-center text-center gap-4 text-text-secondary'
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
                        </div>
                        <ul
                            className='flex flex-row items-center gap-3 text-sm text-text-secondary'
                            // style={{ color: `rgb(${shadeRgb})` }}
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
                                className='hover:opacity-75 p-2  bg-gradient-to-r transition-all cursor-pointer rounded-sm text-black hover:font-semibold bg-blue-500 text-white'
                                style={
                                    {
                                        // background: `rgba(${shadeRgb}, 1)`,
                                    }
                                }
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

export default Theme1Desktop;
