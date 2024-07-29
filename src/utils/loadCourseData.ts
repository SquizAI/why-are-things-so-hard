// src/utils/loadCourseData.ts
import CAIData from "../../public/data/CAI.json";
import CAPData from "../../public/data/CAP.json";
import COPData from "../../public/data/COP.json";

export interface Section {
  class: string;
  section: string;
  days_times: string;
  room: string;
  instructor: string;
  meeting_dates: string;
  status: string;
  credits: number;
}

export interface Course {
  course: string;
  title: string;
  sections: Section[];
}

export interface CourseSubject {
  course_subject: string;
  classes: Course[];
}

export const loadCourseData = (): CourseSubject[] => {
  return [...CAIData, ...CAPData, ...COPData] as CourseSubject[];
};
