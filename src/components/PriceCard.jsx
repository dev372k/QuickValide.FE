import { IoMdCheckmarkCircle } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

function PriceCard({ card }) {
  return (
    <div className="w-full sm:flex-1 bg-white p-8 px-6 rounded-lg relative overflow-hidden">
      {card.IsRecommended && (
        <p className="p-2 px-8 text-sm text-white bg-emerald-500 font-semibold absolute top-6 -right-10 rotate-45">
          Recommended
        </p>
      )}
      <div className="flex flex-col items-start gap-2 py-6 border-b-[1px] border-gray-300">
        <p className="text-lg text-slate-400 font-medium">{card.Title}</p>
        <p className="font-bold text-2xl md:text-3xl text-slate-600">
          {card.Price}
        </p>
      </div>

      <div className="py-10">
        {card.Features.map((feature) => {
          return (
            <div
              className={`flex items-center  py-3 gap-2 text-md md:text-lg font-medium ${
                feature.IsOffer ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {feature.IsOffer ? (
                <IoMdCheckmarkCircle size={24} className="text-accent" />
              ) : (
                <RxCrossCircled size={24} />
              )}

              <p>{feature.Name}</p>
            </div>
          );
        })}
      </div>

      <button
        className="w-full p-3 py-2 text-lg text-white bg-primary rounded-lg font-medium disabled:cursor-not-allowed disabled:bg-gray-500"
        disabled={card.Title !== "Free"}
      >
        Subscribe
      </button>
    </div>
  );
}

export default PriceCard;
