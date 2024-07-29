import React, { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  useColorModeValue,
  Container,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import AdvisoryUpload from "../components/AdvisoryUpload/AdvisoryUpload";
import CourseRecommendations from "../components/CourseRecommendations";

interface Recommendation {
  id: number;
  code: string;
  name: string;
}

interface AdvisoryUploadProps {
  onUpload: (file: File) => Promise<void>;
}

const AIDegreeAssistant: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const boxBg = useColorModeValue("white", "gray.700");

  const handleAdvisoryUpload = async (file: File) => {
    setIsAnalyzing(true);
    // TODO: Implement actual file upload and analysis logic
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulating API call
    setIsAnalyzing(false);
    // Mock recommendations
    setRecommendations([
      { id: 1, code: "CS101", name: "Introduction to Computer Science" },
      { id: 2, code: "MATH201", name: "Calculus I" },
    ]);
  };

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="xl" color={textColor} textAlign="center">
            AI Degree Assistant
          </Heading>
          <Text color={textColor} textAlign="center" fontSize="lg">
            Upload your advisory report and get personalized course
            recommendations
          </Text>
          <Box bg={boxBg} p={6} borderRadius="md" boxShadow="md">
            <AdvisoryUpload onUpload={handleAdvisoryUpload} />
          </Box>
          {isAnalyzing && (
            <Flex justify="center" align="center" direction="column">
              <Spinner size="xl" color="teal.500" mb={4} />
              <Text color={textColor}>Analyzing your advisory report...</Text>
            </Flex>
          )}
          {recommendations.length > 0 && (
            <Box bg={boxBg} p={6} borderRadius="md" boxShadow="md">
              <CourseRecommendations recommendations={recommendations} />
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default AIDegreeAssistant;
