// src/pages/CalendarPage.tsx
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, Heading } from "@chakra-ui/react";
import { Section } from "../utils/loadCourseData";

moment.locale("en-US");
const localizer = momentLocalizer(moment);

interface CalendarPageProps {
  selectedCourses: Section[];
}

const CalendarPage: React.FC<CalendarPageProps> = ({ selectedCourses }) => {
  const events = selectedCourses.map((course) => ({
    title: `${course.class} - ${course.section}`,
    start: moment(course.days_times.split(" ")[1], "HH:mm").toDate(),
    end: moment(course.days_times.split(" ")[3], "HH:mm").toDate(),
  }));

  return (
    <Box p={5}>
      <Heading mb={5}>Course Schedule</Heading>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </Box>
  );
};

export default CalendarPage;
