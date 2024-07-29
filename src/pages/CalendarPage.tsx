// src/pages/CalendarPage.tsx
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Section } from "../utils/loadCourseData";

moment.locale("en-US");
const localizer = momentLocalizer(moment);

interface CalendarPageProps {
  selectedCourses: Section[];
}

const CalendarPage: React.FC<CalendarPageProps> = ({ selectedCourses }) => {
  // ... component logic
};

export default CalendarPage;
