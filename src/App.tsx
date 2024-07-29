// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Onboarding from "./pages/Onboarding";
import AIDegreeAssistant from "./pages/AIDegreeAssistant";
import AdvancedAdvisor from "./pages/AdvancedAdvisor";
import CalendarPage from "./pages/CalendarPage";
import { Section } from "./utils/loadCourseData";

const App: React.FC = () => {
  const [selectedCourses, setSelectedCourses] = useState<Section[]>([]);

  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/assistant" element={<AIDegreeAssistant />} />
          <Route
            path="/advisor"
            element={
              <AdvancedAdvisor
                selectedCourses={selectedCourses}
                setSelectedCourses={setSelectedCourses}
              />
            }
          />
          <Route
            path="/calendar"
            element={<CalendarPage selectedCourses={selectedCourses} />}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
