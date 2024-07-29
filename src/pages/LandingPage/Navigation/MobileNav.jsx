import { Link } from "react-router-dom";
import Backdrop from "../../../components/Backdrop";

function MobileNav({
  isMobileNavOpen,
  setIsMobileNavOpen,
  isAuthenticated,
  handleLogout,
}) {
  return (
    <>
      {isMobileNavOpen && (
        <>
          <Backdrop />
          <nav className="absolute top-14 left-1/2 -translate-x-1/2 bg-white border-2 border-gray-100 rounded-lg w-[90%] overflow-hidden min-h-[70vh] flex flex-col justify-between md:hidden">
            <ul className="flex flex-col w-full items-center mt-5">
              <a
                href="#"
                className="w-full"
                onClick={() => setIsMobileNavOpen(false)}
              >
                <li className="hover:bg-gray-100 text-center p-2 text-text-primary text-md font-medium">
                  Home
                </li>
              </a>
              <a
                href="#features"
                className="w-full"
                onClick={() => setIsMobileNavOpen(false)}
              >
                <li className="hover:bg-gray-100 text-center p-2 text-text-primary text-md font-medium">
                  Features
                </li>
              </a>
              <a
                href="#about-us"
                className="w-full "
                onClick={() => setIsMobileNavOpen(false)}
              >
                <li className="hover:bg-gray-100 text-center p-2 text-text-primary text-md font-medium">
                  About Us
                </li>
              </a>
              <a
                href="#pricings"
                className="w-full "
                onClick={() => setIsMobileNavOpen(false)}
              >
                <li className="hover:bg-gray-100 text-center p-2 text-text-primary text-md font-medium">
                  Pricings
                </li>
              </a>
              <a
                href="#reviews"
                className="w-full "
                onClick={() => setIsMobileNavOpen(false)}
              >
                <li className="hover:bg-gray-100 text-center p-2 text-text-primary text-md font-medium">
                  Reviews
                </li>
              </a>
              <a
                href="#contact-us"
                className="w-full "
                onClick={() => setIsMobileNavOpen(false)}
              >
                <li className="hover:bg-gray-100 text-center p-2 text-text-primary text-md font-medium">
                  Contact Us
                </li>
              </a>
            </ul>

            {isAuthenticated ? (
              <button
                className="py-3 font-medium text-accent-1 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <div className="flex items-center flex-col gap-2 mb-3 px-12">
                <Link
                  to="/login"
                  className="w-full p-2 text-center  bg-accent-2 rounded-full    hover:bg-opacity-50 text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="w-full p-2 text-center text-white bg-accent-1 border-t-[1px] hover:bg-opacity-75 rounded-full"
                >
                  Register
                </Link>
              </div>
            )}
          </nav>
        </>
      )}
    </>
  );
}

export default MobileNav;
