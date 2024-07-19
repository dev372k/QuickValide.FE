import { useState, useEffect } from "react";
import Pricing from "./components/Pricing";
import WaitList from "./components/Waitlist";
import Content from "./components/Content";

import { request } from "./helpers/requestHelper";
import "./App.css";
import Wave from "./components/Wave";
function App() {
  const [content, setContent] = useState({});
  const [isError, setIsError] = useState(false);

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
    }

    getData();
  }, []);

  const AddPricing = (pric) => {};

  return !content ? (
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
      <header class="text-black">
        <div class="container mx-auto flex justify-between items-center py-4 px-2">
          <div class="text-xl font-bold">
            <a href="#">{content?.name}</a>
          </div>
          <nav class="flex space-x-4">
            <a href="#home" class="hover:text-gray-400">
              Home
            </a>

            {content.pricing && (
              <a href="#pricing" class="hover:text-gray-400">
                Pricing
              </a>
            )}

            <a href={`mailto:${content?.email}`} class="hover:text-gray-400">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <div className="min-h-[calc(100vh-150px)] flex flex-col justify-center lg:flex-row items-center lg:justify-between container mx-auto gap-10 lg:gap-6">
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
          frameborder="0"
          allow=""
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      {/* Pricing */}
      {content.pricing && (
        <div className="my-16" id="pricing">
          <Pricing pricings={pricings} btnColor={content?.style?.shade} />
        </div>
      )}
    </div>
  );
}

export default App;
