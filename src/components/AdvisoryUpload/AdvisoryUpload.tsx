// src/components/AdvisoryUpload.tsx
import React, { useState } from "react";
import { parsePDF } from "../utils/openaiUtils";

const AdvisoryUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result) {
          const content = e.target.result.toString();
          const parsedData = await parsePDF(content);
          console.log(parsedData); // Handle parsed data (e.g., update state, display to user)
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default AdvisoryUpload;
