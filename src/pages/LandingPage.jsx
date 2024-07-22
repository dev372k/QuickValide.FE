import Logo from "../assets/logo-no-background.svg";
import Hero from "../assets/hero-4.svg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main className="w-full h-screen ">
      <section className="min-h-screen">
        <nav className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-5 gap-4">
          <div className="h-8">
            <img src={Logo} alt="Logo" className="h-full w-full" />
          </div>

          <div className="flex items-center gap-3 text-sm font-semibold text-gray-500">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#" className="pr-2 border-r-2 border-r-gray-500">
              Pricing
            </a>
            <Link
              to="/login"
              className="p-2 py-1  bg-accent text-white rounded-md "
            >
              Login
            </Link>
            <Link
              to="/register"
              className="p-2 py-1  bg-accent text-white rounded-md"
            >
              Register
            </Link>
          </div>
        </nav>

        <header className="flex flex-col md:items-center md:flex-row-reverse gap-8 px-4 md:px-16 lg:px-36 mt-12 md:h-[calc(100vh-200px)]">
          <div className="w-3/4 self-center h-full">
            <img src={Hero} alt="Hero image" className="w-full h-full" />
          </div>
          <div className="w-[90%] md:w-[90%] self-center md:self-center  text-center text-text-dark md:text-left font-semibold flex flex-col gap-6 items-start ">
            <div className="flex flex-col items-center md:items-start gap-4">
              <h1 className="leading-none text-4xl  md:text-5xl">
                Transforming ideas into reality with Cutting-Edge Technology
              </h1>
              <p className="text-gray-400 md:w-3/4">
                Turn Your Brightest Ideas into Reality - Fast, Simple, and
                Effective
              </p>
            </div>
            <Link
              to="/register"
              className="p-2 px-3 bg-accent text-white rounded-md self-center md:self-start"
            >
              Get started &rarr;
            </Link>
          </div>
        </header>
      </section>
    </main>
  );
}

export default LandingPage;
