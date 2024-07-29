import React from "react";

interface Requirement {
  name: string;
  required: number;
  completed: number;
}

interface DegreeProgressProps {
  degreeRequirements: Requirement[];
  totalCredits: number;
  completedCredits: number;
}

const DegreeProgress: React.FC<DegreeProgressProps> = ({
  degreeRequirements,
  totalCredits,
  completedCredits,
}) => {
  const overallProgress = (completedCredits / totalCredits) * 100;

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Degree Progress</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Overall Progress</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
        <p className="mt-2">
          {completedCredits} / {totalCredits} credits completed (
          {overallProgress.toFixed(1)}%)
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Requirement Progress</h3>
        {degreeRequirements.map((req, index) => (
          <div key={index} className="mb-2">
            <p className="font-medium">{req.name}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: `${(req.completed / req.required) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm">
              {req.completed} / {req.required} completed
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DegreeProgress;
