import Pricing from "./Pricing";

const pricings = [
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
  return (
    <section className="px-6 py-36 bg-section-background flex flex-col gap-12">
      <div>
        <h2 className="text-center text-3xl font-semibold text-text-primary">
          Pricings
        </h2>
      </div>

      <div className="flex gap-4 justify-between flex-col md:flex-row w-full md:w-[70rem] mx-auto">
        {pricings.map((pricing) => (
          <Pricing pricing={pricing} />
        ))}
      </div>
    </section>
  );
}

export default Pricings;
