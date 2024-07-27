import Logo from "../../../assets/logo-no-background.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import MobileNav from "./MobileNav";
import { Turn as Hamburger } from "hamburger-react";

function Navigation() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav className="px-8 py-4 fixed top-0 navbar transparent transition-all bg-white bg-opacity-50 backdrop-blur-sm duration-300 z-50 backdrop-filter left-0 right-0  z-100 flex items-center justify-between gap-3">
      {/* Logo  */}
      <div className="w-32">
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      <MobileNav
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />

      {/* Links  */}
      <ul className="md:flex items-center gap-3 text-sm text-text-primary hidden">
        <a
          href="#"
          className="hover:text-accent-1 border-b-2 transition-all duration-150 border-b-transparent hover:border-b-accent-1"
        >
          <li>Home</li>
        </a>
        <a
          href="#features"
          className="hover:text-accent-1 border-b-2 transition-all duration-150 border-b-transparent hover:border-b-accent-1"
        >
          <li>Features</li>
        </a>
        <a
          href="#about-us"
          className="hover:text-accent-1 border-b-2 transition-all duration-150 border-b-transparent hover:border-b-accent-1"
        >
          <li>About Us</li>
        </a>
        <a
          href="#pricings"
          className="hover:text-accent-1 border-b-2 transition-all duration-150 border-b-transparent hover:border-b-accent-1"
        >
          <li>Pricings</li>
        </a>
        <a
          href="#reviews"
          className="hover:text-accent-1 border-b-2 transition-all duration-150 border-b-transparent hover:border-b-accent-1"
        >
          <li>Reviews</li>
        </a>
        <a
          href="#contact-us"
          className="hover:text-accent-1 border-b-2 transition-all duration-150 border-b-transparent hover:border-b-accent-1"
        >
          <li>Contact Us</li>
        </a>
      </ul>

      {/* Buttons  */}
      <div className="md:flex items-center gap-3 text-sm font-medium hidden">
        <Link to="/login" className="text-accent-2">
          Login
        </Link>
        <Link
          to="/Register"
          className="text-white bg-accent-2 p-1 px-2 rounded-xl"
        >
          Register &rarr;
        </Link>
      </div>

      <div
        className="md:hidden"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      >
        <Hamburger size={28} color="#E91E63" toggled={isMobileNavOpen} />
      </div>
    </nav>
  );
}

export default Navigation;
