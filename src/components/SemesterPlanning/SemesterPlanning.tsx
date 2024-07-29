import React, { useState } from "react";

interface Course {
  course: string;
  title: string;
  credits: number;
}

interface SemesterPlan {
  semester: string;
  year: number;
  courses: Course[];
}

interface SemesterPlanningProps {
  availableCourses: Course[];
  onPlanUpdate: (plans: SemesterPlan[]) => void;
}

const SemesterPlanning: React.FC<SemesterPlanningProps> = ({
  availableCourses,
  onPlanUpdate,
}) => {
  const [plans, setPlans] = useState<SemesterPlan[]>([
    { semester: "Fall", year: new Date().getFullYear(), courses: [] },
  ]);

  const addSemester = () => {
    const lastPlan = plans[plans.length - 1];
    let newSemester = "Fall";
    let newYear = lastPlan.year;
    if (lastPlan.semester === "Fall") {
      newSemester = "Spring";
      newYear++;
    } else if (lastPlan.semester === "Spring") {
      newSemester = "Summer";
    } else {
      newSemester = "Fall";
    }
    setPlans([...plans, { semester: newSemester, year: newYear, courses: [] }]);
  };

  const addCourseToSemester = (semesterIndex: number, course: Course) => {
    const newPlans = [...plans];
    newPlans[semesterIndex].courses.push(course);
    setPlans(newPlans);
    onPlanUpdate(newPlans);
  };

  const removeCourseFromSemester = (
    semesterIndex: number,
    courseIndex: number,
  ) => {
    const newPlans = [...plans];
    newPlans[semesterIndex].courses.splice(courseIndex, 1);
    setPlans(newPlans);
    onPlanUpdate(newPlans);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Semester Planning</h2>
      {plans.map((plan, planIndex) => (
        <div key={planIndex} className="mb-4 p-2 border rounded">
          <h3 className="text-lg font-semibold">
            {plan.semester} {plan.year}
          </h3>
          <div className="mt-2">
            <select
              onChange={(e) =>
                addCourseToSemester(planIndex, JSON.parse(e.target.value))
              }
              className="w-full p-2 border rounded"
            >
              <option value="">Add a course...</option>
              {availableCourses.map((course, courseIndex) => (
                <option key={courseIndex} value={JSON.stringify(course)}>
                  {course.course} - {course.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-2">
            {plan.courses.map((course, courseIndex) => (
              <div
                key={courseIndex}
                className="flex justify-between items-center p-2 bg-gray-100 rounded mb-1"
              >
                <span>
                  {course.course} - {course.title} ({course.credits} credits)
                </span>
                <button
                  onClick={() =>
                    removeCourseFromSemester(planIndex, courseIndex)
                  }
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={addSemester}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Semester
      </button>
    </div>
  );
};

export default SemesterPlanning;
