import React, { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { loadCourseData } from "@/utils/dataLoader";

const CalendarPage: React.FC = () => {
  const [selectedCampus, setSelectedCampus] = useState("");
  const [selectedModality, setSelectedModality] = useState("");
  const [selectedCourses, setSelectedCourses] = useState<any[]>([]);
  const [calendarView, setCalendarView] = useState("week");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showDegreeProgress, setShowDegreeProgress] = useState(false);
  const [recommendedCourses, setRecommendedCourses] = useState<any[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courses = await loadCourseData("COP"); // Adjust the subject code as needed
        setRecommendedCourses(courses);
      } catch (error) {
        console.error("Failed to load course data:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <Alert message="This is an alert message!" />
      <AlertTitle title="Alert Title" />
      <AlertDescription description="This is a description of the alert." />
      {/* Rest of your component */}
      <div>
        <h2>Recommended Courses</h2>
        <ul>
          {recommendedCourses.map((course, index) => (
            <li key={index}>{course.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarPage;
