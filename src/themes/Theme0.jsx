import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Theme0() {
    useEffect(function () {
        console.log('This is theme ');
        document.title = 'Theme 0';
    }, []);

    const themeData = useSelector((state) => state.builder);
    console.log(themeData);
    return (
        <main className='relative z-10 text-text-primary w-full min-h-screen bg-white'>
            <div className='absolute w-full h-[30vh] bg-red-100 -z-10 clip'></div>
            <nav className='w-full relative z-10 p-4 px-8 max-w-[70rem] mx-auto text-text-primary flex items-center justify-between'>
                <div className='text-xl font-bold'>
                    <p>LOGO</p>
                </div>
                <ul className='flex flex-col sm:flex-row items-center gap-3 text-sm text-text-secondary'>
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

            <header className='w-full md:max-w-[25rem] px-8 lg:max-w-[55rem] leading-[1.2] tracking-tighter font-medium mx-auto text-3xl md:text-4x lg:text-7xl text-center min-h-[80vh] flex flex-col gap-8 items-center justify-center'>
                <div className='flex flex-col gap-5 items-center'>
                    <h1 className='leading-[1.3]'>{themeData.hero.heading}</h1>
                    <p className='text-sm leading-[1.7] tracking-wide text-text-secondary'>
                        {themeData.hero.description}
                    </p>
                </div>

                <button className='text-[1rem] text-white tracking-wide p-2 px-6 rounded-full bg-gradient-to-r from-pink-500 px-8 via-red-500 to-yellow-500 btn-hover transition-all'>
                    Get started <span className='transition-all'>&rarr;</span>
                </button>
            </header>

            <section className='py-24'>
                <div className='w-full md:max-w-[25rem] lg:max-w-[55rem] mx-auto text-center flex flex-col gap-4 bg-gray-50 p-8 rounded-md'>
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
                <div className='w-full md:max-w-[25rem] lg:max-w-[55rem] mx-auto text-center flex flex-col gap-4 px-8'>
                    <h2 className='text-3xl font-medium'>About Us</h2>
                    <div className='flex flex-col gap-2 text-text-secondary'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quis
                            quasi itaque accusantium repellat sint saepe cumque harum nesciunt,
                            impedit officiis libero ipsa consectetur magni sapiente architecto
                            laborum inventore. Sed!
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste eos velit
                            illo expedita sint quaerat sed soluta laudantium odio, reiciendis quae
                            animi similique reprehenderit debitis, ex unde totam tempora quam id
                            fugit, laborum possimus suscipit!
                        </p>
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-8 py-16'>
                <h2 className='text-3xl font-medium text-center'>Pricing</h2>
                <div className='w-full md:max-w-[25rem] lg:max-w-[55rem] mx-auto text-center grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] px-6 gap-8'>
                    <div className='p-5 rounded-sm border flex flex-col gap-5 w-full'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-2xl font-medium'>Basic</h3>
                            <p className='text-lg font-normal'>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold text-3xl'>
                                    $5
                                </span>
                                <span className='text-sm text-text-secondary'>/month</span>
                            </p>
                        </div>

                        <button className='text-sm text-white tracking-wide p-2 px-6 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 btn-hover transition-all'>
                            Subscribe
                        </button>

                        <ul className='flex flex-col gap-2 text-sm self-start text-left'>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem, ipsum.</li>
                        </ul>
                    </div>
                    <div className='p-5 rounded-sm border flex flex-col gap-5 w-full'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-2xl font-medium'>Basic</h3>
                            <p className='text-lg font-normal'>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold text-3xl'>
                                    $5
                                </span>
                                <span className='text-sm text-text-secondary'>/month</span>
                            </p>
                        </div>

                        <button className='text-sm text-white tracking-wide p-2 px-6 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 btn-hover transition-all'>
                            Subscribe
                        </button>

                        <ul className='flex flex-col gap-2 text-sm self-start text-left'>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem, ipsum.</li>
                        </ul>
                    </div>
                    <div className='p-5 rounded-sm border flex flex-col gap-5 w-full'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-2xl font-medium'>Basic</h3>
                            <p className='text-lg font-normal'>
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold text-3xl'>
                                    $5
                                </span>
                                <span className='text-sm text-text-secondary'>/month</span>
                            </p>
                        </div>

                        <button className='text-sm text-white tracking-wide p-2 px-6 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 btn-hover transition-all'>
                            Subscribe
                        </button>

                        <ul className='flex flex-col gap-2 text-sm self-start text-left'>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem, ipsum.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='py-24 bg-gray-100'>
                <footer className='w-full md:max-w-[25rem] lg:max-w-[55rem] mx-auto text-center flex flex-col gap-4 px-8'>
                    <nav className='w-full relative z-10 p-4 px-8 max-w-[70rem] mx-auto text-text-primary flex items-center justify-between'>
                        <div className='text-xl font-bold'>
                            <p>LOGO</p>
                        </div>
                        <ul className='flex flex-col sm:flex-row items-center gap-3 text-sm text-text-secondary'>
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

export default Theme0;
