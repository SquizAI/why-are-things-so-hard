// src/utils/courseUtils.ts

interface Section {
  class: string;
  section: string;
  days_times: string;
  room: string;
  instructor: string;
  meeting_dates: string;
  status: string;
}

const parseTime = (timeStr: string): number => {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
};

const parseDaysTimes = (daysTimes: string) => {
  if (daysTimes === "TBA") return null;
  const [daysStr, timesStr] = daysTimes.split(" ");
  const days = daysStr.match(/.{2}/g) || [];
  const [startStr, endStr] = timesStr.split("-");
  const start = parseTime(startStr);
  const end = parseTime(endStr);
  return { days, start, end };
};

export const detectConflicts = (
  selectedCourses: Section[],
): [Section, Section][] => {
  const conflicts: [Section, Section][] = [];

  for (let i = 0; i < selectedCourses.length; i++) {
    for (let j = i + 1; j < selectedCourses.length; j++) {
      const course1 = parseDaysTimes(selectedCourses[i].days_times);
      const course2 = parseDaysTimes(selectedCourses[j].days_times);

      if (course1 && course2) {
        const daysOverlap = course1.days.some((day) =>
          course2.days.includes(day),
        );
        const timesOverlap =
          course1.start < course2.end && course2.start < course1.end;

        if (daysOverlap && timesOverlap) {
          conflicts.push([selectedCourses[i], selectedCourses[j]]);
        }
      }
    }
  }

  return conflicts;
};

export const formatDaysTimes = (daysTimes: string): string => {
  if (daysTimes === "TBA") return "To Be Announced";

  const days = {
    Mo: "Monday",
    Tu: "Tuesday",
    We: "Wednesday",
    Th: "Thursday",
    Fr: "Friday",
    Sa: "Saturday",
    Su: "Sunday",
  };

  const formattedDays = daysTimes
    .split(" ")[0]
    .match(/.{1,2}/g)
    ?.map((day) => days[day as keyof typeof days])
    .join(", ");

  const times = daysTimes.split(" ").slice(1).join(" ");

  return `${formattedDays} ${times}`;
};
