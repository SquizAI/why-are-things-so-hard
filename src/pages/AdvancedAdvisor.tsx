// src/pages/AdvancedAdvisor.tsx
import React from "react";
import { Box, Grid, Heading } from "@chakra-ui/react";
import CourseListing from "../components/CourseSelection/CourseListing";
import ScheduleVisualization from "../components/Schedule/ScheduleVisualization";
import DegreeProgress from "../components/DegreeProgress/DegreeProgress";
import { Section } from "../utils/loadCourseData";

interface AdvancedAdvisorProps {
  selectedCourses: Section[];
  setSelectedCourses: React.Dispatch<React.SetStateAction<Section[]>>;
}

const AdvancedAdvisor: React.FC<AdvancedAdvisorProps> = ({
  selectedCourses,
  setSelectedCourses,
}) => {
  const mockRequirements = [
    { name: "Core Courses", completed: 3, total: 10 },
    { name: "Electives", completed: 2, total: 5 },
    { name: "General Education", completed: 4, total: 8 },
  ];

  const overallProgress = 45; // This should be calculated based on actual progress

  return (
    <Box p={5}>
      <Heading mb={5}>Advanced Advisor</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <CourseListing
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
        />
        <ScheduleVisualization selectedCourses={selectedCourses} />
        <DegreeProgress
          requirements={mockRequirements}
          overallProgress={overallProgress}
        />
        {/* Add SemesterPlanning component here when implemented */}
      </Grid>
    </Box>
  );
};

export default AdvancedAdvisor;
