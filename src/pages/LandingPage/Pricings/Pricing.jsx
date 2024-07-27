import SetupIcon from "../../../assets/setup.svg";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import FreeIcon from "../../../assets/basic-pricing.svg";
import StandardIcon from "../../../assets/standard-pricing.svg";
import PremiumIcon from "../../../assets/premium-pricing.svg";

const icons = {
  Free: FreeIcon,
  Standard: StandardIcon,
  Premium: PremiumIcon,
};

function Pricing({ pricing, showMore }) {
  return (
    <div
      className={`max-w-72 bg-white p-8 md:p-10 rounded-xl flex flex-col  gap-4 border-[1px]  overflow-hidden relative -z-10 ${
        pricing.IsRecommended ? "border-accent-2" : "border-gray-200"
      } ${!showMore ? (pricing.Title === "Free" ? "flex" : "hidden") : "flex"}`}
    >
      {pricing.IsRecommended && (
        <p className="absolute right-0 top-0 p-2 text-xs bg-accent-2 rounded-bl-lg text-white font-medium">
          Recommended
        </p>
      )}
      <div className="flex flex-col w-full items-center gap-3">
        <img src={icons[pricing.Title]} alt="Icon" className="w-12" />
        <div>
          <h3 className="text-text-primary font-medium text-xl">
            {pricing.Title}
          </h3>
        </div>
      </div>

      <div className="flex items-start justify-center mt-4">
        <span className="text-3xl md:text-4xl font-semibold text-text-primary">
          {pricing.Price.replace("/Month", "")}
        </span>
        <span className="text-sm text-text-secondary">/month</span>
      </div>

      <button
        className="w-full p-2 rounded-full bg-accent-1 text-white text-sm font-medium hover:bg-opacity-80 md:text-md disabled:bg-opacity-35"
        disabled={pricing.Title !== "Free"}
      >
        Subscribe
      </button>

      <ul className="flex flex-col gap-3 py-6">
        {pricing.Features.map((feature, index) => {
          return (
            <li
              className={`flex items-center gap-2 ${
                feature.IsOffer ? "text-text-primary" : "text-text-secondary"
              } `}
              key={index}
            >
              {feature.IsOffer ? (
                <IoMdCheckmarkCircle size={24} className="text-accent-1" />
              ) : (
                <RxCrossCircled size={24} />
              )}
              <p className="text-sm">{feature.Name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pricing;
