// ReviewCarousel.jsx
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import "./carousel.css"; // Make sure to create and import the CSS file

const reviews = [
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Great Service",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Mary Smith",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Amazing Experience",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Jane Smith",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521310192545-4ac7951413f0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Highly Recommend",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Michael Johnson",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Best in Town",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Emily Davis",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664199486587-37f325d15182?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Will Come Again",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "William Brown",
  },
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="px-6 py-36  w-full flex flex-col gap-12 md:px-32">
      <div className="text-4xl font-semibold text-text-primary text-center">
        <h2>Reviews</h2>
      </div>

      <div className="w-full place-items-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:grap-6">
        {reviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
      {/* <div className="relative w-full  mx-auto">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 h-full bg-white backdrop-blur-md text-4xl text-accent-1 bg-opacity-50 rounded-lg border-[1px]"
        >
          {"<"}
        </button>
        <div className="overflow-hidden relative">
          <div
            className="whitespace-nowrap transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="inline-block w-full h-full"
                style={{
                  transform: `scale(${index === currentIndex ? 1 : 0.8})`,
                  opacity: index === currentIndex ? 1 : 0.5,
                  transition: "transform 0.5s, opacity 0.5s",
                }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform h-full -translate-y-1/2 z-10 p-2 bg-white backdrop-blur-md text-4xl text-accent-1 bg-opacity-50 rounded-lg border-[1px]"
        >
          {">"}
        </button>
      </div> */}
    </section>
  );
};

export default ReviewCarousel;
