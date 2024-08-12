import { GrCheckmark } from "react-icons/gr";

function Theme1() {
	return (
		<main>
			<div className='relative'>
				<nav className='p-3 px-6 text-sm flex items-center justify-between fixed w-full bg-white bg-opacity-20 backdrop-blur-sm z-20'>
					<div className='text-lg font-medium'>
						<p>LOGO</p>
					</div>
					<ul className='flex flex-col gap-1 items-start'>
						<li>Home</li>
						<li>About Us</li>
						<li>Pricing</li>
					</ul>
				</nav>

				<header className='p-3 px-6 w-full md:w-[22rem] lg:w-[47rem] mx-auto flex items-center justify-center min-h-screen flex-col gap-6'>
					<h1 className='text-3xl md:text-4xl lg:text-6xl text-center leading-relaxed tracking-tight'>
						Lorem ipsum dolor sit amet consectetur.
					</h1>
					<button className='text-sm p-3 px-5 text-white  border-2 border-black rounded-sm font-medium flex items-center gap-3 relative after:contents-[""] after:w-full after:h-full bg-black z-0 after:border-2 after:border-black  after:absolute after:inset-0 after:-z-10 after:translate-y-2 after:translate-x-2 group'>
						Get started{" "}
						<span className='group-hover:translate-x-1 transition-all'>
							&rarr;
						</span>
					</button>
				</header>

				<section className='py-16 md:py-32 px-6 w-full md:w-[22rem]  lg:w-[47rem] mx-auto flex flex-col gap-5 '>
					<h2 className='text-center text-3xl font-medium'>Join Wailist</h2>

					<div className='text-sm flex flex-col gap-5 text-gray-600 leading-[1.5]'>
						<input
							type='text'
							placeholder='john@gmail.com'
							className='p-3 border-2 border-black'
						/>
						<button className='text-sm p-3 px-5 text-white  border-2 border-black rounded-sm font-medium flex items-center justify-center gap-3 relative after:contents-[""] after:w-full after:h-full bg-black z-0 after:border-2 after:border-black  after:absolute after:inset-0 after:-z-10 after:translate-y-2 after:translate-x-2 group'>
							Join
							<span className='group-hover:translate-x-1 transition-all'>
								&rarr;
							</span>
						</button>
					</div>
				</section>

				<section className='py-16 md:py-32 px-6 w-full md:w-[22rem]  lg:w-[47rem] mx-auto flex flex-col gap-5 '>
					<h2 className='text-center text-3xl font-medium'>About us</h2>

					<div className='text-sm flex flex-col gap-5 text-gray-600 leading-[1.5]'>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
							quisquam nisi veniam hic aliquid natus molestiae libero a nam
							iure.
						</p>

						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
							ad quisquam autem illo similique dicta facilis illum?
						</p>
					</div>
				</section>

				<section className='py-16 md:py-32 w-full md:w-[22rem] lg:w-[47rem] mx-auto flex flex-col gap-5 '>
					<h2 className='text-center text-3xl font-medium'>Pricing</h2>

					<div className='text-sm gap-8 leading-[1.5] grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] px-6'>
						<div className='text-sm p-6 flex flex-col gap-8 border-2 border-black '>
							<div className='flex flex-col gap-1 items-center'>
								<h3 className='text-lg font-bold'>Basic</h3>
								<p className='text-2xl flex items-end font-medium'>
									$5 <span className='text-sm font-normal'>/month</span>
								</p>
							</div>
							<button className='text-sm p-3 px-5 text-white  border-2 border-black rounded-sm font-medium flex items-center justify-center gap-3 relative after:contents-[""] after:w-full after:h-full bg-black z-0 after:border-2 after:border-black   after:absolute after:inset-0 after:-z-10 after:translate-y-2 after:translate-x-2 group'>
								Subscribe
							</button>

							<ul className='flex flex-col gap-3 text-xs '>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem, ipsum dolor.
								</li>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem ipsum dolor sit amet.
								</li>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem, ipsum.
								</li>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem ipsum dolor sit amet consectetur adipisicing.
								</li>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem ipsum dolor sit amet consectetur.
								</li>
							</ul>
						</div>

						<div className='text-sm p-6 flex flex-col gap-8 border-2 border-black'>
							<div className='flex flex-col gap-1 items-center'>
								<h3 className='text-lg font-bold'>Standard</h3>
								<p className='text-2xl flex items-end font-medium'>
									$10 <span className='text-sm font-normal'>/month</span>
								</p>
							</div>
							<button className='text-sm p-3 px-5 text-white  border-2 border-black rounded-sm font-medium flex items-center justify-center gap-3 relative after:contents-[""] after:w-full after:h-full bg-black z-0 after:border-2 after:border-black   after:absolute after:inset-0 after:-z-10 after:translate-y-2 after:translate-x-2 group'>
								Subscribe
							</button>

							<ul className='flex flex-col gap-3 text-xs '>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem, ipsum dolor.
								</li>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem ipsum dolor sit amet.
								</li>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem, ipsum.
								</li>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem ipsum dolor sit amet consectetur adipisicing.
								</li>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem ipsum dolor sit amet consectetur.
								</li>
							</ul>
						</div>

						<div className='text-sm p-6 flex flex-col gap-8 border-2 border-black'>
							<div className='flex flex-col gap-1 items-center'>
								<h3 className='text-lg font-bold'>Premium</h3>
								<p className='text-2xl flex items-end font-medium'>
									$15 <span className='text-sm font-normal'>/month</span>
								</p>
							</div>
							<button className='text-sm p-3 px-5 text-white  border-2 border-black rounded-sm font-medium flex items-center justify-center gap-3 relative after:contents-[""] after:w-full after:h-full bg-black z-0 after:border-2 after:border-black   after:absolute after:inset-0 after:-z-10 after:translate-y-2 after:translate-x-2 group'>
								Subscribe
							</button>

							<ul className='flex flex-col gap-3 text-xs '>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem, ipsum dolor.
								</li>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem ipsum dolor sit amet.
								</li>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem, ipsum.
								</li>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem ipsum dolor sit amet consectetur adipisicing.
								</li>
								<li className='grid grid-cols-[auto_1fr] gap-2'>
									<GrCheckmark size={14} />
									Lorem ipsum dolor sit amet consectetur.
								</li>
							</ul>
						</div>
					</div>
				</section>

				<footer className='w-full px-6 py-16 bg-black text-white'>
					<footer className='w-full md:w-[22rem]  lg:w-[47rem] mx-auto flex flex-col gap-5 '>
						<nav className='p-3 px-6 text-sm flex items-center justify-between w-full'>
							<div className='text-lg font-medium'>
								<p>LOGO</p>
							</div>
							<ul className='flex flex-col gap-1 items-start'>
								<li>Home</li>
								<li>About Us</li>
								<li>Pricing</li>
							</ul>
						</nav>
					</footer>
				</footer>
			</div>
		</main>
	);
}

export default Theme1;
