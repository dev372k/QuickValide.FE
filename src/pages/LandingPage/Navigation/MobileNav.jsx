import { Link } from "react-router-dom";
import Backdrop from "../../../components/Backdrop";

function MobileNav({ isMobileNavOpen, setIsMobileNavOpen }) {
  return (
    <>
      {isMobileNavOpen && (
        <>
          <Backdrop />
          <nav className="absolute top-14 left-1/2 -translate-x-1/2 bg-white border-2 border-gray-100 rounded-lg w-[90%] overflow-hidden min-h-[70vh] flex flex-col justify-between md:hidden">
            <ul className="flex flex-col w-full items-center mt-5">
              <li className="hover:bg-gray-100 w-full text-center p-2 text-text-primary text-md font-medium">
                About Us
              </li>
              <li className="hover:bg-gray-100 w-full text-center p-2 text-text-primary text-md font-medium">
                Pricing
              </li>
              <li className="hover:bg-gray-100 w-full text-center p-2 text-text-primary text-md font-medium">
                Contact
              </li>
            </ul>

            <div className="flex items-center">
              <Link
                to="/login"
                className="w-1/2 p-2 text-center text-text-primary bg-gray-50 border-t-[1px] border-r-[1px] hover:bg-accent-1 hover:bg-opacity-50 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="w-1/2 p-2 text-center text-text-primary bg-gray-50 border-t-[1px] hover:bg-accent-1 hover:bg-opacity-50 hover:text-white"
              >
                Register
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
}

export default MobileNav;
