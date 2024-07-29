import React, { useState, useEffect } from "react";
import CourseListing from "./components/CourseSelection/CourseListing";
import ScheduleVisualization from "./components/Schedule/ScheduleVisualization";
import DegreeProgress from "./components/DegreeProgress/DegreeProgress";
import SemesterPlanning from "./components/SemesterPlanning/SemesterPlanning";
import { Section, Course } from "./types";
import { detectConflicts } from "./utils/courseUtils";
import { loadCourseData } from "./utils/dataLoader";

const App: React.FC = () => {
  const [selectedCourses, setSelectedCourses] = useState<Section[]>([]);
  const [conflicts, setConflicts] = useState<[Section, Section][]>([]);
  const [availableCourses, setAvailableCourses] = useState<Course[]>([]);

  useEffect(() => {
    const courseData = loadCourseData();
    setAvailableCourses(courseData.flatMap((subject) => subject.classes));
  }, []);

  useEffect(() => {
    const newConflicts = detectConflicts(selectedCourses);
    setConflicts(newConflicts);
  }, [selectedCourses]);

  const handleCourseClick = (course: Course) => {
    console.log("Course clicked:", course);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Smart Advisory Platform
      </h1>
      <CourseListing
        selectedCourses={selectedCourses}
        setSelectedCourses={setSelectedCourses}
        conflicts={conflicts}
        onCourseClick={handleCourseClick}
      />
      <ScheduleVisualization selectedCourses={selectedCourses} />
      <DegreeProgress
        degreeRequirements={[]} // TODO: Add actual degree requirements
        totalCredits={120} // TODO: Replace with actual total credits required
        completedCredits={selectedCourses.reduce(
          (sum, course) => sum + course.credits,
          0,
        )}
      />
      <SemesterPlanning
        availableCourses={availableCourses}
        onPlanUpdate={(plans) => console.log("Semester plans updated:", plans)}
      />
      {conflicts.length > 0 && (
        <div className="mt-8 p-4 bg-red-100 rounded">
          <h2 className="text-xl font-bold mb-2">Course Conflicts Detected:</h2>
          <ul>
            {conflicts.map(([course1, course2], index) => (
              <li key={index} className="mb-2">
                Conflict between {course1.class} (Section {course1.section}) and{" "}
                {course2.class} (Section {course2.section})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
