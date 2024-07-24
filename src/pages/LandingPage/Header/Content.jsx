import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const texts = ["Fast", "Simple", "and Effective"];

function Content() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col gap-8 items-center -z-10 relative ">
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gray-100 -z-10"></div>

      <h1 className="flex flex-col gap-4 text-4xl md:text-6xl font-bold text-center text-text-primary">
        <div>
          <span className="text-text-primary">
            Turn your <span className="bright-bulb">brightest</span>
          </span>
        </div>
        <span>
          <span>ideas into Reality - </span>
          <span className="text-accent-1 text-container relative p-2 mt-4">
            {texts.map((text, i) => (
              <div
                key={i}
                className={`text ${i === index ? "active" : "inactive"} `}
              >
                {text}
              </div>
            ))}
          </span>
        </span>
      </h1>

      <Link
        to="/register"
        className="p-2 bg-accent-1 text-white font-medium px-4 rounded-lg text-md"
      >
        Get started &rarr;
      </Link>
    </div>
  );
}
export default Content;
