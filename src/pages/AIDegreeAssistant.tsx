// src/pages/AIDegreeAssistant.tsx
import React, { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Input,
  Spinner,
} from "@chakra-ui/react";
import AdvisoryUpload from "../components/AdvisoryUpload/AdvisoryUpload";
import CourseRecommendations from "../components/CourseRecommendations";

const AIDegreeAssistant: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const handleAdvisoryUpload = async (file: File) => {
    setIsAnalyzing(true);
    // TODO: Implement actual file processing and AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setRecommendations([
        { id: 1, code: "CS101", name: "Introduction to Computer Science" },
        { id: 2, code: "MATH201", name: "Calculus I" },
      ]);
    }, 2000);
  };

  return (
    <Box p={5}>
      <VStack spacing={5} align="stretch">
        <Heading>AI Degree Assistant</Heading>
        <Text>
          Upload your advisory report to get personalized course
          recommendations.
        </Text>
        <AdvisoryUpload onUpload={handleAdvisoryUpload} />
        {isAnalyzing && (
          <Box textAlign="center">
            <Spinner size="xl" />
            <Text mt={3}>Analyzing your advisory report...</Text>
          </Box>
        )}
        {recommendations.length > 0 && (
          <CourseRecommendations recommendations={recommendations} />
        )}
      </VStack>
    </Box>
  );
};

export default AIDegreeAssistant;
