import fs from "fs";
import path from "path";

interface Section {
  class: string;
  section: string;
  days_times: string;
  room: string;
  instructor: string;
  meeting_dates: string;
  status: string;
}

interface Course {
  course: string;
  title: string;
  sections: Section[];
}

interface CourseSubject {
  course_subject: string;
  classes: Course[];
}

export const loadCourseData = (): CourseSubject[] => {
  const dataFolder = path.join(process.cwd(), "temp_data");
  const files = fs.readdirSync(dataFolder);

  return files
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const filePath = path.join(dataFolder, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(fileContent) as CourseSubject;
    });
};
