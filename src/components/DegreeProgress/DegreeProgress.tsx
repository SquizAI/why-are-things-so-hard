// src/components/DegreeProgress/DegreeProgress.tsx
import React from "react";
import { Box, Heading, Progress, Text, VStack } from "@chakra-ui/react";

interface Requirement {
  name: string;
  completed: number;
  total: number;
}

interface DegreeProgressProps {
  requirements: Requirement[];
  overallProgress: number;
}

const DegreeProgress: React.FC<DegreeProgressProps> = ({
  requirements,
  overallProgress,
}) => {
  return (
    <Box>
      <Heading size="md" mb={4}>
        Degree Progress
      </Heading>
      <Progress value={overallProgress} colorScheme="green" mb={4} />
      <Text mb={4}>Overall Progress: {overallProgress}%</Text>
      <VStack align="stretch" spacing={3}>
        {requirements.map((req, index) => (
          <Box key={index}>
            <Text>{req.name}</Text>
            <Progress
              value={(req.completed / req.total) * 100}
              colorScheme="blue"
              size="sm"
            />
            <Text fontSize="sm">
              {req.completed}/{req.total} completed
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default DegreeProgress;
