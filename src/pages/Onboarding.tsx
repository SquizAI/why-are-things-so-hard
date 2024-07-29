// src/pages/Onboarding.tsx
import React, { useState } from "react";
import { Box, Button, Input, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Onboarding: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      // TODO: Implement the file upload logic using OpenAI API
      console.log("File uploaded:", file);
      // Navigate to the recommendations page after upload
      navigate("/");
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Onboarding</Heading>
      <Input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload} mt={2}>
        Upload
      </Button>
    </Box>
  );
};

export default Onboarding;
