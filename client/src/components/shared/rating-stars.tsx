import { Star, StarHalf } from "lucide-react";
import React from "react";

type propTypes = {
  rating: number;
};
const RatingStars = ({ rating }: propTypes) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        if (starValue <= rating) {
          return <Star key={index} className="w-5 h-5 text-yellow-500" />;
        } else if (starValue - 0.5 === rating) {
          return <StarHalf key={index} className="w-5 h-5 text-yellow-500" />;
        } else {
          return <Star key={index} className="w-5 h-5 text-gray-300" />;
        }
      })}
    </div>
  );
};

export default RatingStars;
