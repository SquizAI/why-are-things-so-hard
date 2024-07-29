import React from "react";

interface Section {
  class: string;
  section: string;
  days_times: string;
  room: string;
  instructor: string;
  meeting_dates: string;
  status: string;
}

interface ScheduleVisualizationProps {
  selectedCourses: Section[];
}

const ScheduleVisualization: React.FC<ScheduleVisualizationProps> = ({
  selectedCourses,
}) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hours = Array.from({ length: 14 }, (_, i) => i + 8); // 8 AM to 9 PM

  const getScheduleDetails = (daysTimes: string) => {
    if (daysTimes === "TBA") return null;
    const [daysStr, timeStr] = daysTimes.split(" ");
    const days = daysStr.match(/.{2}/g) || [];
    const [start, end] = timeStr.split("-").map((t) => {
      const [hours, minutes] = t.split(":");
      return parseInt(hours) + (minutes === "30" ? 0.5 : 0);
    });
    return { days, start, end };
  };

  return (
    <div className="mt-8 overflow-x-auto">
      <h3 className="text-xl font-semibold mb-2">Weekly Schedule</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2"></th>
            {days.map((day) => (
              <th key={day} className="border p-2">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td className="border p-2">{`${hour}:00`}</td>
              {days.map((day) => (
                <td key={`${day}-${hour}`} className="border p-2 h-8 relative">
                  {selectedCourses
                    .filter((course) => {
                      const schedule = getScheduleDetails(course.days_times);
                      return (
                        schedule &&
                        schedule.days.includes(day.slice(0, 2)) &&
                        schedule.start <= hour &&
                        schedule.end > hour
                      );
                    })
                    .map((course) => (
                      <div
                        key={course.class}
                        className="absolute inset-0 bg-blue-200 text-xs p-1 overflow-hidden"
                      >
                        {course.class}
                      </div>
                    ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleVisualization;
