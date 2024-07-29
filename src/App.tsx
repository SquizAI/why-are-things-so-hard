import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CalendarPage from "./pages/CalendarPage";
import Onboarding from "./pages/Onboarding";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </Router>
  );
};

export default App;
