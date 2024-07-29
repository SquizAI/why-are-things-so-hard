import React from "react";
import { Box, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { Section } from "../../utils/loadCourseData";

interface ScheduleVisualizationProps {
  selectedCourses: Section[];
}

const ScheduleVisualization: React.FC<ScheduleVisualizationProps> = ({
  selectedCourses,
}) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours = Array.from({ length: 14 }, (_, i) => i + 8); // 8 AM to 9 PM

  const getScheduleDetails = (daysTimes: string) => {
    const [daysStr, timeStr] = daysTimes.split(" ");
    const days = daysStr.split("");
    const [start, end] = timeStr
      .split("-")
      .map((t) => parseInt(t.split(":")[0]));
    return { days, start, end };
  };

  return (
    <Box>
      <SimpleGrid columns={6} spacing={1}>
        <Box></Box>
        {days.map((day) => (
          <Box key={day} p={2} fontWeight="bold" textAlign="center">
            {day}
          </Box>
        ))}
        {hours.map((hour) => (
          <React.Fragment key={hour}>
            <Box p={2} fontWeight="bold" textAlign="right">{`${hour}:00`}</Box>
            {days.map((day) => (
              <Box
                key={`${day}-${hour}`}
                borderWidth={1}
                position="relative"
                height="50px"
              >
                {selectedCourses
                  .filter((course) => {
                    const schedule = getScheduleDetails(course.days_times);
                    return (
                      schedule.days.includes(day[0]) &&
                      schedule.start <= hour &&
                      schedule.end > hour
                    );
                  })
                  .map((course) => (
                    <Box
                      key={course.class}
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bg="teal.100"
                      p={1}
                      overflow="hidden"
                      fontSize="xs"
                    >
                      <Text fontSize="xs" fontWeight="bold">
                        {course.class}
                      </Text>
                      <Text fontSize="xs">{course.section}</Text>
                    </Box>
                  ))}
              </Box>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ScheduleVisualization;
