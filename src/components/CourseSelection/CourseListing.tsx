import React, { useState, useEffect } from "react";
import { loadCourseData } from "../../utils/dataLoader";
import { formatDaysTimes } from "../../utils/courseUtils";

interface Section {
  class: string;
  section: string;
  days_times: string;
  room: string;
  instructor: string;
  meeting_dates: string;
  status: string;
  credits: number;
}

interface Course {
  course: string;
  title: string;
  sections: Section[];
  description?: string;
  prerequisites?: string[];
}

interface CourseSubject {
  course_subject: string;
  classes: Course[];
}

interface CourseListingProps {
  selectedCourses: Section[];
  setSelectedCourses: React.Dispatch<React.SetStateAction<Section[]>>;
  conflicts: [Section, Section][];
  onCourseClick: (course: Course) => void;
}

const CourseListing: React.FC<CourseListingProps> = ({
  selectedCourses,
  setSelectedCourses,
  conflicts,
  onCourseClick,
}) => {
  const [courseSubjects, setCourseSubjects] = useState<CourseSubject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [totalCredits, setTotalCredits] = useState<number>(0);

  useEffect(() => {
    const data = loadCourseData();
    setCourseSubjects(data);
    if (data.length > 0) {
      setSelectedSubject(data[0].course_subject);
    }
  }, []);

  useEffect(() => {
    const credits = selectedCourses.reduce(
      (total, course) => total + course.credits,
      0,
    );
    setTotalCredits(credits);
  }, [selectedCourses]);

  const toggleCourseSelection = (section: Section) => {
    setSelectedCourses((prevSelected) =>
      prevSelected.some((c) => c.class === section.class)
        ? prevSelected.filter((c) => c.class !== section.class)
        : [...prevSelected, section],
    );
  };

  const isConflicting = (section: Section) => {
    return conflicts.some(
      ([course1, course2]) =>
        course1.class === section.class || course2.class === section.class,
    );
  };

  const filteredCourses =
    courseSubjects
      .find((subject) => subject.course_subject === selectedSubject)
      ?.classes.filter(
        (course) =>
          course.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ) || [];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Course Selection</h2>
      <div className="mb-4">
        <label htmlFor="subject-select" className="block mb-2">
          Select Subject:
        </label>
        <select
          id="subject-select"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {courseSubjects.map((subject) => (
            <option key={subject.course_subject} value={subject.course_subject}>
              {subject.course_subject}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Available Courses</h3>
          {filteredCourses.map((course) => (
            <div key={course.course} className="mb-4">
              <h4
                className="font-semibold cursor-pointer hover:text-blue-600"
                onClick={() => onCourseClick(course)}
              >
                {course.course} - {course.title}
              </h4>
              {course.sections.map((section) => (
                <div
                  key={section.class}
                  className={`mb-2 p-2 border rounded ${isConflicting(section) ? "bg-red-100" : ""}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">
                      Section {section.section}
                    </span>
                    <button
                      onClick={() => toggleCourseSelection(section)}
                      className={`px-2 py-1 rounded ${
                        selectedCourses.some((c) => c.class === section.class)
                          ? "bg-red-500 text-white"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      {selectedCourses.some((c) => c.class === section.class)
                        ? "Remove"
                        : "Add"}
                    </button>
                  </div>
                  <div className="mt-1 text-sm">
                    <p>Schedule: {formatDaysTimes(section.days_times)}</p>
                    <p>Instructor: {section.instructor}</p>
                    <p>Room: {section.room}</p>
                    <p>Credits: {section.credits}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Selected Courses</h3>
          <p className="mb-2 font-bold">Total Credits: {totalCredits}</p>
          {selectedCourses.length > 0 ? (
            selectedCourses.map((section) => (
              <div key={section.class} className="mb-2 p-2 border rounded">
                <h4 className="font-semibold">
                  {section.class} - Section {section.section}
                </h4>
                <p>Schedule: {formatDaysTimes(section.days_times)}</p>
                <p>Instructor: {section.instructor}</p>
                <p>Room: {section.room}</p>
                <p>Credits: {section.credits}</p>
              </div>
            ))
          ) : (
            <p>No courses selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseListing;
