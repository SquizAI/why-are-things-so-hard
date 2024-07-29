#!/bin/bash

# Create main directories
mkdir -p src/{components,pages,services,utils}

# Create component directories
mkdir -p src/components/{CourseSelection,Schedule,AdvisoryUpload}

# Create main App file and index
touch src/App.tsx
touch src/index.tsx

# Create component files
touch src/components/CourseSelection/CourseListing.tsx
touch src/components/Schedule/ScheduleVisualization.tsx
touch src/components/AdvisoryUpload/AdvisoryUpload.tsx

# Create service files
touch src/services/courseService.ts
touch src/services/advisoryService.ts

# Create utility files
touch src/utils/types.ts
touch src/utils/helpers.ts

# Create a basic README
echo "# Smart Advisory Platform

This project is a course advisory system for students pursuing a double major in AI and Data Science.

## Features
- Course listing and selection
- Schedule visualization
- Advisory report upload (coming soon)
- Course recommendations (coming soon)

## Tech Stack
- React
- TypeScript
- Tailwind CSS

## Getting Started
1. Clone the repository
2. Run \`npm install\`
3. Run \`npm start\`

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details" > README.md

# Output success message
echo "Project structure created successfully!"