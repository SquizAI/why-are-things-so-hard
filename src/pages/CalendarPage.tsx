// src/pages/CalendarPage.tsx
import React, { useEffect, useState } from "react";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import { loadCourseData } from "@/utils/dataLoader";

const CalendarPage: React.FC = () => {
  const [courses, setCourses] = useState<string[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      // TODO: Fetch recommended courses based on the uploaded advisory report
      const recommendedCourses = await loadCourseData();
      setCourses(recommendedCourses);
    };

    fetchCourses();
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>Recommended Courses</Heading>
      <List spacing={3}>
        {courses.map((course, index) => (
          <ListItem key={index}>{course}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CalendarPage;
