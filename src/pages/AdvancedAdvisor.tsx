import React from "react";
import {
  Box,
  VStack,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import CourseListing from "../components/CourseSelection/CourseListing";
import ScheduleVisualization from "../components/Schedule/ScheduleVisualization";
import DegreeProgress from "../components/DegreeProgress/DegreeProgress";
import SemesterPlanning from "../components/SemesterPlanning/SemesterPlanning";
import { Section, Course } from "../utils/loadCourseData";

interface AdvancedAdvisorProps {
  selectedCourses: Section[];
  setSelectedCourses: React.Dispatch<React.SetStateAction<Section[]>>;
}

const AdvancedAdvisor: React.FC<AdvancedAdvisorProps> = ({
  selectedCourses,
  setSelectedCourses,
}) => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const tabBg = useColorModeValue("white", "gray.700");

  // Mock data for DegreeProgress and SemesterPlanning
  const degreeRequirements = [
    { name: "Core Courses", required: 30, completed: 15 },
  ];
  const totalCredits = 120;
  const completedCredits = 60;
  const availableCourses: Course[] = selectedCourses.map((section) => ({
    course: section.class,
    title: section.class, // You might want to add a title field to your Section type
    sections: [section],
    credits: section.credits,
  }));

  return (
    <Box bg={bgColor} minH="100vh" p={5}>
      <VStack spacing={8}>
        <Heading
          as="h1"
          size="xl"
          color={useColorModeValue("gray.700", "white")}
        >
          Advanced Advisor
        </Heading>
        <Tabs variant="enclosed" width="full" colorScheme="teal">
          <TabList mb="1em">
            <Tab _selected={{ bg: tabBg }}>Course Selection</Tab>
            <Tab _selected={{ bg: tabBg }}>Schedule</Tab>
            <Tab _selected={{ bg: tabBg }}>Degree Progress</Tab>
            <Tab _selected={{ bg: tabBg }}>Semester Planning</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CourseListing
                selectedCourses={selectedCourses}
                setSelectedCourses={setSelectedCourses}
              />
            </TabPanel>
            <TabPanel>
              <ScheduleVisualization selectedCourses={selectedCourses} />
            </TabPanel>
            <TabPanel>
              <DegreeProgress
                degreeRequirements={degreeRequirements}
                totalCredits={totalCredits}
                completedCredits={completedCredits}
              />
            </TabPanel>
            <TabPanel>
              <SemesterPlanning
                availableCourses={availableCourses}
                onPlanUpdate={(plans) =>
                  console.log("Semester plans updated:", plans)
                }
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
};

export default AdvancedAdvisor;
