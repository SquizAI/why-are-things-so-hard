import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Onboarding: React.FC = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box textAlign="center" fontSize="xl" bg={bgColor} minH="100vh" py={20}>
      <VStack spacing={8} maxW="auto" mx="auto">
        <Image
          src="/src/assets/prjct-code-logo.png"
          alt="PRJCT CODE smart advisor"
          boxSize="150px"
        />
        <Heading as="h1" size="2xl" color={textColor}>
          Welcome to MDC Smart Advisory
        </Heading>
        <Text color={textColor} fontSize="xl">
          Plan your academic journey with AI-powered assistance. Get
          personalized course recommendations, visualize your degree progress,
          and optimize your schedule.
        </Text>
        <Link to="/assistant">
          <Button colorScheme="teal" size="lg" px={8} py={6} fontSize="xl">
            Get Started
          </Button>
        </Link>
        <Box mt={12}>
          <Heading as="h2" size="lg" mb={6} color={textColor}>
            Key Features
          </Heading>
          <VStack spacing={4} align="stretch">
            {[
              "AI-powered course recommendations",
              "Interactive degree progress tracking",
              "Visual schedule planning",
              "Integration with Rate My Professors",
              "Social features to connect with classmates",
            ].map((feature, index) => (
              <Box
                key={index}
                p={4}
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="md"
                boxShadow="md"
              >
                <Text color={textColor}>{feature}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Onboarding;
