// src/components/RatingReviews.tsx
import React, { useEffect, useState } from "react";

const RatingReviews: React.FC = () => {
  const [ratings, setRatings] = useState<
    { professor: string; rating: number; review: string }[]
  >([]);

  useEffect(() => {
    // Fetch ratings from Rate My Professors and internal reviews
    const fetchRatings = async () => {
      // Mock API call
      const fetchedRatings = [
        { professor: "Professor A", rating: 4.5, review: "Great professor" },
        { professor: "Professor B", rating: 3.8, review: "Good but tough" },
      ];
      setRatings(fetchedRatings);
    };

    fetchRatings();
  }, []);

  return (
    <div>
      <h2>Ratings and Reviews</h2>
      <ul>
        {ratings.map((rating, index) => (
          <li key={index}>
            {rating.professor} - {rating.rating}/5
            <p>{rating.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingReviews;
