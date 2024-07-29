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
  description?: string;
  prerequisites?: string[];
}

export interface CourseSubject {
  course_subject: string;
  classes: Course[];
}
