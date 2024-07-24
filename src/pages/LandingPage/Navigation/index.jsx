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
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <MobileNav
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />

      {/* Links  */}
      <ul className="md:flex items-center gap-3 text-sm text-text-primary hidden">
        <li>About Us</li>
        <li>Pricing</li>
        <li>Contact</li>
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
        <Hamburger size={28} color="#E91E63" />
      </div>
    </nav>
  );
}

export default Navigation;
