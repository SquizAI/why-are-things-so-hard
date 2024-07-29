// src/components/Navbar.tsx
import React from "react";
import { Box, Flex, Spacer, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/prjct-code-logo.png"; // Make sure to add your logo to the assets folder

const Navbar = () => {
  return (
    <Box bg="gray.100" px={4} py={2}>
      <Flex alignItems="center">
        <Image src={logo} alt="PRJCT {code} SMART ADVISOR" height="40px" />
        <Spacer />
        <Box>
          <Link to="/">
            <Button colorScheme="pink" variant="ghost" mr={3}>
              Home
            </Button>
          </Link>
          <Link to="/assistant">
            <Button colorScheme="pink" variant="ghost" mr={3}>
              AI Assistant
            </Button>
          </Link>
          <Link to="/advisor">
            <Button colorScheme="pink" variant="ghost" mr={3}>
              Advanced Advisor
            </Button>
          </Link>
          <Link to="/calendar">
            <Button colorScheme="pink" variant="ghost">
              Calendar
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
