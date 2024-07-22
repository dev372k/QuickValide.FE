import Logo from "../assets/logo-no-background.svg";
import LogoWhite from "../assets/logo-white.svg";
import Hero from "../assets/hero-4.svg";
import PriceCard from "../components/PriceCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

function LandingPage() {
  const [pricings, setPricings] = useState([
    {
      Title: "Free",
      Price: "$0/Month",
      Features: [
        {
          Name: "1 Team Member",
          IsOffer: true,
        },
        {
          Name: "2GB Storage",
          IsOffer: true,
        },
        {
          Name: "Add Custom Domain",
          IsOffer: false,
        },
        {
          Name: "24 hour Support",
          IsOffer: false,
        },
      ],
      IsRecommended: false,
    },
    {
      Title: "Standard",
      Price: "$10/Month",
      Features: [
        {
          Name: "3 Team Member",
          IsOffer: true,
        },
        {
          Name: "5GB Storage",
          IsOffer: true,
        },
        {
          Name: "Add Custom Domain",
          IsOffer: true,
        },
        {
          Name: "24 hour Support",
          IsOffer: false,
        },
      ],
      IsRecommended: true,
    },
    {
      Title: "Premium",
      Price: "$25/Month",
      Features: [
        {
          Name: "10 Team Member",
          IsOffer: true,
        },
        {
          Name: "10GB Storage",
          IsOffer: true,
        },
        {
          Name: "Add Custom Domain",
          IsOffer: true,
        },
        {
          Name: "24 hour Support",
          IsOffer: true,
        },
      ],
      IsRecommended: false,
    },
  ]);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <main className="w-full h-screen ">
      <section className="min-h-screen w-full">
        <nav className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-5 gap-4">
          <div className="h-8">
            <img src={Logo} alt="Logo" className="h-full w-full" />
          </div>

          <div className=" items-center gap-3 text-sm font-semibold text-gray-500 hidden md:flex">
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

          <div
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="md:hidden"
          >
            <Hamburger color="#E67E22" size={30} rounded />
          </div>

          <nav
            className={`fixed top-20 left-1/2 -translate-x-1/2 w-[90%] bg-primary rounded-lg text-white  flex-col gap-2 items-center text-lg overflow-hidden md:hidden ${
              isMobileNavOpen ? "flex" : "hidden"
            } min-h-[80vh]`}
          >
            <a
              href="#"
              className="hover:bg-gray-600 w-full text-center p-2 rounded-md font-semibold mt-10"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:bg-gray-600 w-full text-center p-2 rounded-md font-semibold"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:bg-gray-600 w-full text-center p-2 rounded-md font-semibold mb-auto"
            >
              Pricing
            </a>
            <div className="w-full flex">
              <Link
                to="/login"
                className="p-3 flex items-center justify-center  border-2 border-accent text-white w-1/2 hover:bg-accent"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="p-3 flex items-center justify-center  border-2 border-accent  hover:bg-accent text-white w-1/2"
              >
                Register
              </Link>
            </div>
          </nav>
        </nav>

        <header className="flex flex-col justify-center md:items-center md:flex-row-reverse gap-3 md:gap-8 px-4 md:px-16 lg:px-36 mt-24 md:mt-36 h-[calc(100vh-300px)]">
          <div className=" self-center h-full">
            <img src={Hero} alt="Hero image" className="w-full h-full" />
          </div>
          <div className="w-[90%]  self-center text-center text-text-dark md:text-left font-semibold flex flex-col gap-6 items-start ">
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

      <section className="py-24 md:py-32 lg:py-36  px-4 md:px-8 lg:px-12 w-full flex items-center justify-center bg-primary mt-16">
        <div className="p-5 bg-white rounded-lg shadow-sm flex flex-col items-center gap-3 md:w-[500px] lg:w-[700px] md:justify-center w-full">
          <h2 className="text-2xl md:text-3xl font-medium">
            Join our Waitlist
          </h2>
          <input
            type="email"
            placeholder="your@gmail.com"
            className="bg-gray-50 w-full p-2 text-lg rounded-md focus:outline-none focus:border-accent border-2 border-transparent font-medium text-gray-500"
          />
          <button className="text-md bg-accent text-white w-full p-2 rounded-md">
            Join Waitlist
          </button>
        </div>
      </section>

      <section className="py-24 md:py-32 lg:py-36  px-4 md:px-8 lg:px-12 w-full flex items-center justify-center">
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/lPrjP4A_X4s?si=bSY7qw8u_iXuRFKj"}
          title="YouTube video player"
          frameBorder="0"
          allow=""
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>

      <section className="py-24 md:py-32 lg:py-36  px-4 md:px-8 lg:px-12 w-full flex items-center justify-center bg-accent">
        <div className="flex items-center gap-8 flex-col flex-wrap md:flex-row  w-full">
          {pricings.map((pricing) => (
            <PriceCard card={pricing} />
          ))}
        </div>
      </section>

      <footer className="py-24 md:py-32 lg:py-32  px-4 md:px-8 lg:px-12 w-full flex justify-betwen bg-black  items-center">
        <div className="w-full flex items-center justify-between flex-wrap mx-auto">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>
        <div className="w-full ">
          <ul className="text-white text-lg flex items-end justify-end gap-5 w-full self-end">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Pricing</li>
          </ul>
        </div>
      </footer>
    </main>
  );
}

export default LandingPage;
