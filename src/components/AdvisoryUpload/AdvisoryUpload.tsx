// src/components/CourseRecommendations.tsx
import React, { FC } from "react";

interface Recommendation {
  id: number;
  code: string;
  name: string;
}

interface CourseRecommendationsProps {
  recommendations: Recommendation[];
}

const CourseRecommendations: FC<CourseRecommendationsProps> = ({
  recommendations,
}) => {
  // ... component logic
};

export default CourseRecommendations;
