function Pricing({ pricings, btnColor, wishListRef, setSelectedPlan }) {
  function handleSelectPlan(planName) {
    setSelectedPlan(planName);
  }

  return (
    <>
      <div className="text-center text-4xl font-bold my-8 w-full">Pricing</div>
      <div
        className={`flex justify-center items-center w-full flex-col gap-8 md:gap-4 md:flex-row md:space-x-4 mx-auto px-4 sm:px-6 lg:px-8 bg-[${btnColor}] bg-opacity-20 py-24 md:py-36 skew-y-12`}
      >
        {pricings.map((pricing) => {
          return (
            <div
              className="rounded-lg shadow-lg overflow-hidden m-2 w-full -skew-y-12
            bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg border border-white border-opacity-30 p-3
            "
            >
              <div className="px-3 py-8 relative">
                {/* Conditional Badge Rendering */}
                {pricing.IsRecommended && (
                  <div className="absolute top-0 -right-16 bg-yellow-500 text-white text-xs font-bold px-2 py-3 rounded-bl-lg -translate-x-1/2 -translate-y-1/2">
                    Recommended
                  </div>
                )}
                <h2 className="text-lg">{pricing.Title}</h2>
                <p className="text-3xl font-bold mt-2">{pricing.Price}</p>
                <ul className="mt-4">
                  {pricing.Features.map((feature) => {
                    return (
                      <li className="flex items-center" key={feature.Name}>
                        {feature.IsOffer ? (
                          <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        )}
                        <span className="ml-2 my-2 text-gray-700">
                          {feature.Name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <a
                  href="#waitlist"
                  class="w-full mt-6 text-white py-2 rounded-lg  block text-center"
                  style={{ background: btnColor || "#0099ff" }}
                  onClick={() => handleSelectPlan(pricing.Title)}
                >
                  Subscribe
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Pricing;
