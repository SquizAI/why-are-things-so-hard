import React, { useState } from "react";
import { Box, Input, Select, VStack, Text, Button } from "@chakra-ui/react";
import { Section } from "../../utils/loadCourseData";

interface CourseListingProps {
  selectedCourses: Section[];
  setSelectedCourses: React.Dispatch<React.SetStateAction<Section[]>>;
}

const CourseListing: React.FC<CourseListingProps> = ({
  selectedCourses,
  setSelectedCourses,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSubject, setFilterSubject] = useState("");

  // ... (rest of the component logic)

  return (
    <Box>
      <VStack spacing={4}>
        <Input
          placeholder="Search courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select
          placeholder="Filter by subject"
          value={filterSubject}
          onChange={(e) => setFilterSubject(e.target.value)}
        >
          {/* Add subject options */}
        </Select>
        {/* Render filtered and searched courses */}
      </VStack>
    </Box>
  );
};

export default CourseListing;
