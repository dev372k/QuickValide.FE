import Navigation from "./Navigation/index.jsx";
import Header from "./Header/index.jsx";
import Features from "./Features/index.jsx";
import AboutUs from "./About Us/index.jsx";
import Pricing from "./Pricings/index.jsx";
import ContactUs from "./Contact Us/index.jsx";

function LandingPage() {
  return (
    <main className="w-full min-h-screen">
      <Navigation />
      <Header />
      <Features />
      <AboutUs />
      <Pricing />
      <ContactUs />
    </main>
  );
}

export default LandingPage;
