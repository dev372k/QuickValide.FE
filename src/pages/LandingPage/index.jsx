import Navigation from "./Navigation/index.jsx";
import Header from "./Header/index.jsx";
import Features from "./Features/index.jsx";

function LandingPage() {
  return (
    <main className="w-full min-h-screen">
      <Navigation />
      <Header />
      <Features />
    </main>
  );
}

export default LandingPage;
