// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <Box bg="blue.500" p={4}>
      <Flex justify="space-between" align="center">
        <Flex>
          <Button as={Link} to="/" color="white" variant="link" mr={4}>
            Home
          </Button>
          <Button as={Link} to="/onboarding" color="white" variant="link">
            Onboarding
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
