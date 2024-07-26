import Logo from "../../../assets/logo-no-background.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-6 py-24 flex flex-col gap-16 border-t-[1px] ">
      <div className="flex items-center flex-col gap-5 justify-center">
        <a href="#">
          <img src={Logo} alt="Logo" className="w-36" />
        </a>
        <ul className="flex flex-col items-center gap-3 text-sm">
          <div className="flex gap-4 text-text-primary flex-wrap justify-center">
            <a href="#features">
              <li className="hover:text-accent-1 cursor-pointer border-b-[1px] transition-all duration-150 border-transparent font-medium hover:border-accent-1 py-1">
                Features
              </li>
            </a>
            <a href="#about-us">
              <li className="hover:text-accent-1 cursor-pointer border-b-[1px] transition-all duration-150 border-transparent font-medium hover:border-accent-1 py-1">
                About us
              </li>
            </a>
            <a href="#pricings">
              <li className="hover:text-accent-1 cursor-pointer border-b-[1px] transition-all duration-150 border-transparent font-medium hover:border-accent-1 py-1">
                Pricings
              </li>
            </a>
            <a href="#reviews">
              <li className="hover:text-accent-1 cursor-pointer border-b-[1px] transition-all duration-150 border-transparent font-medium hover:border-accent-1 py-1">
                Reviews
              </li>
            </a>
            <a href="#contact-us">
              <li className="hover:text-accent-1 cursor-pointer border-b-[1px] transition-all duration-150 border-transparent font-medium hover:border-accent-1 py-1">
                Contact us
              </li>
            </a>
          </div>
          <div className="flex items-center gap-5 justify-center text-text-secondary text-xs">
            <Link
              to="terms-and-conditions"
              className="hover:text-text-primary cursor-pointer"
            >
              Terms and conditions
            </Link>
            <Link
              to="privacy-policy"
              className="hover:text-text-primary cursor-pointer"
            >
              Privacy Policy
            </Link>
          </div>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
