import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

const CourseRecommendations = () => {
  // TODO: Implement course recommendation logic
  const recommendations = [
    { id: 1, code: "CS101", name: "Introduction to Computer Science" },
    { id: 2, code: "MATH201", name: "Calculus I" },
    // Add more mock recommendations
  ];

  return (
    <Box>
      <VStack spacing={4} align="stretch">
        <Heading as="h2" size="lg">
          Recommended Courses
        </Heading>
        {recommendations.map((course) => (
          <Box key={course.id} p={3} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{course.code}</Heading>
            <Text mt={4}>{course.name}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default CourseRecommendations;
