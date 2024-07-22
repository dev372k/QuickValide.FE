import Logo from "../assets/logo-no-background.svg";
import Hero from "../assets/hero-2.svg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main className="w-full h-screen h">
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
            <Link to="/login" className="p-2 py-1 border-b-2 border-[#E67E22]">
              Login
            </Link>
            <Link
              to="/register"
              className="p-2 py-1 border-b-2 border-[#E67E22]"
            >
              Register
            </Link>
          </div>
        </nav>

        <header className="flex flex-col md:items-center md:flex-row-reverse gap-8 px-4 md:px-16 lg:px-24 mt-12">
          <div className="w-3/4 self-center h-[80vh]">
            <img src={Hero} alt="Hero image" className="w-full h-full" />
          </div>
          <div className="w-3/4 md:w-full self-center md:self-center text-4xl text-center md:text-left md:text-6xl font-bold">
            <h1>
              Transforming ideas into reality with Cutting-Edge Technology
            </h1>
          </div>
        </header>
      </section>
    </main>
  );
}

export default LandingPage;
