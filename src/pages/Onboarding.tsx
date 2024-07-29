import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const steps = [
  {
    question:
      "Are you currently enrolled in the BS in Applied Artificial Intelligence program?",
    options: ["Yes", "No", "I'm interested, but not enrolled yet"],
  },
  {
    question: "Have you completed your general education requirements?",
    options: [
      "Yes, all of them",
      "Most of them",
      "No, I still need to take some",
      "I'm not sure",
    ],
  },
  {
    question: "Which core AI courses have you already taken?",
    options: [
      "CAI 1001C",
      "COP 1047C",
      "CAI 2100C",
      "CAI 2300C",
      "CAI 2840C",
      "None of these yet",
    ],
    multiple: true,
  },
  {
    question:
      "Do you prefer online classes, in-person at Wolfson campus, or a mix?",
    options: [
      "Online only",
      "Wolfson campus only",
      "Mix of online and Wolfson campus",
    ],
  },
  {
    question: "Are you a full-time or part-time student?",
    options: ["Full-time", "Part-time"],
  },
  {
    question: "When are you typically available for classes?",
    options: ["Mornings", "Afternoons", "Evenings", "Weekends"],
    multiple: true,
  },
];

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState<any>({});
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const handleResponse = (response: any) => {
    setResponses({ ...responses, [step]: response });
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      generateRecommendations();
    }
  };

  const generateRecommendations = () => {
    setRecommendations([
      {
        code: "CAI 3303C",
        name: "Natural Language Processing",
        schedule: "Online, Asynchronous",
      },
      {
        code: "COP 2800",
        name: "Java Programming",
        schedule: "Wolfson Campus, Mon/Wed 10:00 AM - 11:15 AM",
      },
      {
        code: "CAI 3821C",
        name: "Computational Methods and Applications for AI 1",
        schedule: "Online, Tues/Thurs 6:00 PM - 7:15 PM",
      },
    ]);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Onboarding</h1>
      {step < steps.length ? (
        <div>
          <p className="mb-4">{steps[step].question}</p>
          <div className="flex flex-col space-y-2">
            {steps[step].options.map((option, index) => (
              <button
                key={index}
                onClick={() =>
                  handleResponse(
                    steps[step].multiple
                      ? [...(responses[step] || []), option]
                      : option
                  )
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">
            Here are my course recommendations for you:
          </h2>
          {recommendations.map((course, index) => (
            <Alert status="info" key={index} className="mb-4">
              <AlertIcon />
              <AlertTitle mr={2}>
                {course.code} - {course.name}
              </AlertTitle>
              <AlertDescription>Schedule: {course.schedule}</AlertDescription>
            </Alert>
          ))}
          <button
            onClick={() =>
              window.open("https://www.mdc.edu/advising/", "_blank")
            }
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Schedule an Advising Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
