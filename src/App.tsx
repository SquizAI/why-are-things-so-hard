// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CalendarPage from "./pages/CalendarPage";
import Onboarding from "./pages/Onboarding";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import RatingReviews from "./components/RatingReviews";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/reviews" element={<RatingReviews />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
