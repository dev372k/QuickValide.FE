import Navigation from "./Navigation/index.jsx";
import Header from "./Header/index.jsx";
import Video from "./Video/index.jsx";
import Features from "./Features/index.jsx";
import AboutUs from "./About Us/index.jsx";
import Pricing from "./Pricings/index.jsx";
import ContactUs from "./Contact Us/index.jsx";
import Reviews from "./Reviews/index.jsx";

function LandingPage() {
  return (
    <main className="w-full min-h-screen">
      <Navigation />
      <Header />
      <Video />
      <Features />
      <AboutUs />
      <Pricing />
      <Reviews />
      <ContactUs />
    </main>
  );
}

export default LandingPage;
