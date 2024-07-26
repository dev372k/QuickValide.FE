import Logo from "../../../assets/logo-no-background.svg";

function Footer() {
  return (
    <footer className="px-6 py-24 flex flex-col gap-16 border-t-2 border-accent-1">
      <div className="flex items-center flex-col gap-5 justify-center">
        <div>
          <img src={Logo} alt="Logo" className="w-36" />
        </div>
        <ul className="flex flex-col items-center gap-3 text-sm">
          <div className="flex gap-4 text-text-primary flex-wrap justify-center">
            <li>Features</li>
            <li>About us</li>
            <li>Pricings</li>
            <li>Reviews</li>
            <li>Contact us</li>
          </div>
          <div className="flex items-center gap-5 justify-center text-text-secondary text-xs">
            <p>Terms and conditions</p>
            <p>Privacy Policy</p>
          </div>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
