import React, { useState, useEffect } from "react";
import { loadCourseData } from "../../utils/dataLoader";
import { formatDaysTimes } from "../../utils/courseUtils";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const CourseListing: React.FC<CourseListingProps> = ({
  selectedCourses,
  setSelectedCourses,
  conflicts,
  onCourseClick,
}) => {
  const [courseSubjects, setCourseSubjects] = useState<CourseSubject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadCourseData();
        setCourseSubjects(data);
        if (data.length > 0) {
          setSelectedSubject(data[0].course_subject);
        }
      } catch (error) {
        console.error("Error loading course data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleCourseSelection = (section: Section) => {
    setSelectedCourses((prevSelected) =>
      prevSelected.some((c) => c.class === section.class)
        ? prevSelected.filter((c) => c.class !== section.class)
        : [...prevSelected, section]
    );
  };

  const isConflicting = (section: Section) => {
    return conflicts.some(
      ([course1, course2]) =>
        course1.class === section.class || course2.class === section.class
    );
  };

  const filteredCourses =
    courseSubjects
      .find((subject) => subject.course_subject === selectedSubject)
      ?.classes.filter(
        (course) =>
          course.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) || [];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Course Selection
      </h2>
      <div className="mb-6">
        <label htmlFor="subject-select" className="block mb-2 text-gray-600">
          Select Subject:
        </label>
        <select
          id="subject-select"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="w-full p-3 border rounded-lg text-gray-800"
        >
          {courseSubjects.map((subject) => (
            <option key={subject.course_subject} value={subject.course_subject}>
              {subject.course_subject}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded-lg text-gray-800"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Available Courses
          </h3>
          {filteredCourses.map((course) => (
            <div key={course.course} className="mb-6">
              <h4
                className="text-xl font-semibold cursor-pointer text-blue-600 hover:text-blue-800"
                onClick={() => onCourseClick(course)}
              >
                {course.course} - {course.title}
              </h4>
              {course.sections.map((section) => (
                <div
                  key={section.class}
                  className={`p-4 border rounded-lg mb-4 transition-colors duration-300 ${
                    isConflicting(section) ? "bg-red-100" : "bg-green-100"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">
                      Section {section.section}
                    </span>
                    <button
                      onClick={() => toggleCourseSelection(section)}
                      className={`px-4 py-2 rounded-lg font-semibold text-white transition-colors duration-300 ${
                        selectedCourses.some((c) => c.class === section.class)
                          ? "bg-red-500 hover:bg-red-700"
                          : "bg-blue-500 hover:bg-blue-700"
                      }`}
                    >
                      {selectedCourses.some(
                        (c) => c.class === section.class
                      ) ? (
                        <FaTimesCircle className="inline mr-2" />
                      ) : (
                        <FaCheckCircle className="inline mr-2" />
                      )}
                      {selectedCourses.some((c) => c.class === section.class)
                        ? "Remove"
                        : "Add"}
                    </button>
                  </div>
                  <div className="mt-2 text-gray-600">
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
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Selected Courses
          </h3>
          {selectedCourses.length > 0 ? (
            selectedCourses.map((section) => (
              <div
                key={section.class}
                className="p-4 border rounded-lg mb-4 bg-blue-100"
              >
                <h4 className="text-xl font-semibold text-gray-700">
                  {section.class} - Section {section.section}
                </h4>
                <p className="text-gray-600">
                  Schedule: {formatDaysTimes(section.days_times)}
                </p>
                <p className="text-gray-600">
                  Instructor: {section.instructor}
                </p>
                <p className="text-gray-600">Room: {section.room}</p>
                <p className="text-gray-600">Credits: {section.credits}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No courses selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseListing;
