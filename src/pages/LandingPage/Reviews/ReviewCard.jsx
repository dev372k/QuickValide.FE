// ReviewCard.jsx
import React from "react";

const ReviewCard = ({ review, className }) => {
  return (
    <div
      className={`mx-12 py-6 border-[1px] bg-white  rounded-lg  flex flex-col gap-2 px-8 w-full ${className}`}
    >
      <img
        src={review.image}
        alt={review.title}
        className="h-14 w-14 rounded-full  object-cover"
      />
      <h3 className="text-lg text-text-primary font-semibold">
        {review.title}
      </h3>
      <p className="text-gray text-md text-text-secondary">
        {review.description}
      </p>
      <p className="text-text-primary text-sm">- {review.author}</p>
    </div>
  );
};

export default ReviewCard;
