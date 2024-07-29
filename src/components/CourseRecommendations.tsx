// src/components/CourseRecommendations.tsx
import React, { useEffect, useState } from "react";

const CourseRecommendations: React.FC = () => {
  const [courses, setCourses] = useState<string[]>([]);

  useEffect(() => {
    // Fetch course recommendations
    const fetchCourses = async () => {
      // Mock API call
      const recommendedCourses = ["Course 1", "Course 2", "Course 3"];
      setCourses(recommendedCourses);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Recommended Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseRecommendations;
