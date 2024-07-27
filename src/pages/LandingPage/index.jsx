import Navigation from "./Navigation/index.jsx";
import Header from "./Header/index.jsx";
import Video from "./Video/index.jsx";
import Features from "./Features/index.jsx";
import AboutUs from "./About Us/index.jsx";
import Pricing from "./Pricings/index.jsx";
import ContactUs from "./Contact Us/index.jsx";
import Reviews from "./Reviews/index.jsx";
import Footer from "./Footer/index.jsx";

import { useState, useEffect } from "react";

function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(function () {
    document.title = "QuickValide | Home";

    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", setScrollY(window.scrollY));
    };
  }, []);

  return (
    <main className="w-full min-h-screen relative">
      <a
        href="#"
        className={`text-xs fixed p-3 px-4 leading-none bg-text-primary text-white rounded-full gap-1 bottom-5 right-5 z-[1000]  flex-col items-center ${
          scrollY >= 1000 ? "flex" : "hidden"
        }`}
      >
        <span>&uarr;</span>
        <span className="text-center">
          Back <br />
          to top
        </span>
      </a>
      <Navigation />
      <Header />
      <Video />
      <Features />
      <AboutUs />
      <Pricing />
      <Reviews />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default LandingPage;
