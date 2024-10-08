import { useState, useEffect, useRef } from "react";
import Pricing from "./components/Pricing";
import WaitList from "./components/Waitlist";
import Content from "./components/Content";

import { request } from "./helpers/requestHelper";
import "./App.css";
import Wave from "./components/Wave";
function Home() {
  const [content, setContent] = useState([]);
  const [isError, setIsError] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const [pricings, setPricings] = useState([]);

  function modifyAndParsePricing(pricing) {
    let commaPosition;
    for (let i = pricing.length - 1; i >= 0; i--) {
      if (pricing[i] == ",") {
        commaPosition = i;
        break;
      }
    }

    let p = pricing.slice(0, commaPosition) + pricing.slice(commaPosition + 1);
    return JSON.parse(p);
  }

  useEffect(function () {
    async function getData() {
      const response = await request("https://api.quickvalide.com/api/app");
      setPricings(modifyAndParsePricing(response.result.data.pricing));
      setContent(response?.result?.data);
      setIsError(!response?.result?.status);
      document.title = response?.result?.data?.name;
    }

    getData();
  }, []);

  const AddPricing = (pric) => {};

  return content.length === 0 ? (
    <p className="text-center my-4 p-4 bg-emerald-500 text-white font-semibold w-64 mx-auto">
      Loading...
    </p>
  ) : isError ? (
    <p className="text-center my-4 p-4 bg-red-500 text-white font-semibold w-64 mx-auto">
      An error occured while getting the data
    </p>
  ) : (
    <div
      className={`relative text-[${
        content?.style?.color || "#000"
      }] background-[${content?.style?.background || "#ffffff"}]`}
      id="home"
    >
      <div className="absolute inset-0 h-[150vh] w-full -z-10 object-cover">
        <Wave fill={content?.style?.shade} />
      </div>
      {/* Header */}
      <header className="text-black container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="container mx-auto flex justify-between items-center py-4 px-2">
          <div className="text-xl font-bold">
            <a href="#">{content?.name}</a>
          </div>
          <nav className="flex space-x-4">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>

            {content.pricing && (
              <a href="#pricing" className="hover:text-gray-400">
                Pricing
              </a>
            )}

            <a
              href={`mailto:${content?.email}`}
              className="hover:text-gray-400"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <div className="min-h-[calc(100vh-150px)] flex flex-col justify-center lg:flex-row items-center lg:justify-between container mx-auto gap-10 lg:gap-12 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Content */}
        <Content content={content?.content} />

        {/* Wish List */}
        <WaitList btnColor={content?.style?.shade} />
      </div>

      {/* Video */}
      <div className="flex justify-center min-h-screen my-16">
        <iframe
          width="1000"
          height="500"
          src={content?.videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow=""
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      {/* Pricing */}
      {content.pricing && (
        <div className="my-16" id="pricing">
          <Pricing
            pricings={pricings}
            btnColor={content?.style?.shade}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
