import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>MDC Smart Advisory</Box>
        <Spacer />
        <Box>
          <Link to="/">
            <Button colorScheme="teal" variant="ghost" mr={3}>
              Home
            </Button>
          </Link>
          <Link to="/assistant">
            <Button colorScheme="teal" variant="ghost" mr={3}>
              AI Assistant
            </Button>
          </Link>
          <Link to="/advisor">
            <Button colorScheme="teal" variant="ghost" mr={3}>
              Advanced Advisor
            </Button>
          </Link>
          <Link to="/calendar">
            <Button colorScheme="teal" variant="ghost">
              Calendar
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
