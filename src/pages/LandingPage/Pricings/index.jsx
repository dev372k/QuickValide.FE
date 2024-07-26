import Pricing from "./Pricing";
import { useEffect, useState } from "react";

const pricings = [
  {
    Title: "Free",
    Price: "$0/Month",
    Features: [
      {
        Name: "1 Team Member",
        IsOffer: true,
      },
      {
        Name: "2GB Storage",
        IsOffer: true,
      },
      {
        Name: "Add Custom Domain",
        IsOffer: false,
      },
      {
        Name: "24 hour Support",
        IsOffer: false,
      },
    ],
    IsRecommended: true,
  },
  {
    Title: "Standard",
    Price: "$10/Month",
    Features: [
      {
        Name: "3 Team Member",
        IsOffer: true,
      },
      {
        Name: "5GB Storage",
        IsOffer: true,
      },
      {
        Name: "Add Custom Domain",
        IsOffer: true,
      },
      {
        Name: "24 hour Support",
        IsOffer: false,
      },
    ],
    IsRecommended: false,
  },
  {
    Title: "Premium",
    Price: "$25/Month",
    Features: [
      {
        Name: "10 Team Member",
        IsOffer: true,
      },
      {
        Name: "10GB Storage",
        IsOffer: true,
      },
      {
        Name: "Add Custom Domain",
        IsOffer: true,
      },
      {
        Name: "24 hour Support",
        IsOffer: true,
      },
    ],
    IsRecommended: false,
  },
];

function Pricings() {
  const [showMore, setShowMore] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) setShowMore(true);
  }, [windowWidth]);
  return (
    <section
      className="px-6 py-36 bg-section-background relative z-10 flex flex-col w-full gap-12 lg:px-32"
      id="pricings"
    >
      <div>
        <h2 className="text-center text-3xl font-semibold text-text-primary">
          Pricings
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full align-items-center justify-items-center gap-5 md:w-[35rem] lg:w-[55rem] xl:w-[60rem] mx-auto">
        {pricings.map((pricing) => (
          <Pricing pricing={pricing} showMore={showMore} key={pricing.Title} />
        ))}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="px-3 py-2 text-sm bg-accent-1 self-center text-white rounded-full md:hidden"
      >
        {showMore ? "Show less" : "Show more"}
      </button>
    </section>
  );
}

export default Pricings;
