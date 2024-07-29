const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const dataFolder = path.join(__dirname, "data");

app.get("/api/courses", (req, res) => {
  const files = fs.readdirSync(dataFolder);
  const courses = files
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const filePath = path.join(dataFolder, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(fileContent);
    });

  res.json(courses);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
