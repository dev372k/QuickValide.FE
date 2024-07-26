import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const texts = ["Fast", "Simple", "and Effective"];

function Content() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  function handleClick() {
    console.log("I was clicked");
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col gap-8 items-center z-10 relative ">
      <div className="absolute top-0 left-0 w-24 h-24 md:w-64 md:h-64 rounded-full bg-opacity-10 blur-lg bg-accent-1 -z-10 animate-pinkCircle "></div>
      <div className="absolute top-12 left-24 w-24 h-24 md:w-64 md:h-64 rounded-full bg-accent-2  bg-opacity-10 bg-blend-screen blur-lg -z-10 animate-blueCircle delay-300"></div>

      <h1 className="flex flex-col gap-4 text-5xl md:text-6xl lg:text-7xl font-bold text-center text-text-primary mt-16">
        <div>
          <span className="text-text-primary" onClick={() => handleClick()}>
            Turn your <span className="bright-bulb">brightest</span>
          </span>
        </div>
        <span>
          <span>ideas into Reality - </span>
          <span
            onClick={() => handleClick()}
            className="text-accent-1 text-container relative p-2 mt-4"
          >
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
        to="register"
        onClick={() => handleClick()}
        className="p-2 bg-accent-1 text-md z-100 text-white font-medium px-4 rounded-lg text-md"
      >
        Get started &rarr;
      </Link>
    </div>
  );
}
export default Content;
