// ReviewCard.jsx
import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="p-6 border-[1px] rounded-lg  mb-10 md:mr-5 flex flex-col gap-5">
      <img
        src={review.image}
        alt={review.title}
        className="h-14 w-14 rounded-full object-cover"
      />
      <p className="text-gray-600 text-sm">{review.description}</p>
      <p className="text-gray-900 text-xs">- {review.author}</p>
    </div>
  );
};

export default ReviewCard;
