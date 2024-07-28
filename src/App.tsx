import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AIDegreeAssistant = () => {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [recommendations, setRecommendations] = useState([]);

  const steps = [
    {
      question:
        "Hi there! I'm your MDC AI Degree Assistant. Are you currently enrolled in the BS in Applied Artificial Intelligence program?",
      options: ["Yes", "No", "I'm interested, but not enrolled yet"],
    },
    {
      question:
        "Great! Let's start by checking your progress. Have you completed your general education requirements?",
      options: [
        "Yes, all of them",
        "Most of them",
        "No, I still need to take some",
        "I'm not sure",
      ],
    },
    {
      question:
        "Which of these core AI courses have you already taken? (Select all that apply)",
      options: [
        "CAI 1001C - Artificial Intelligence (AI) Thinking",
        "COP 1047C - Introduction to Python Programming",
        "CAI 2100C - Machine Learning Foundations",
        "CAI 2300C - Introduction to Natural Language Processing",
        "CAI 2840C - Introduction to Computer Vision",
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
      question:
        "When are you typically available for classes? (Select all that apply)",
      options: ["Mornings", "Afternoons", "Evenings", "Weekends"],
      multiple: true,
    },
  ];

  const handleResponse = (response) => {
    setResponses({ ...responses, [step]: response });
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      generateRecommendations();
    }
  };

  const generateRecommendations = () => {
    // This is where we'd implement the logic to generate course recommendations
    // based on the student's responses. For now, we'll use placeholder recommendations.
    const placeholderRecommendations = [
      {
        code: "CAI 3303C",
        name: "Natural Language Processing",
        schedule: "Online, Asynchronous",
        description:
          "This course builds on your NLP foundations and is a key component of the AI curriculum.",
      },
      {
        code: "COP 2800",
        name: "Java Programming",
        schedule: "Wolfson Campus, Mon/Wed 10:00 AM - 11:15 AM",
        description:
          "Java is crucial for many AI applications. This course will enhance your programming skills.",
      },
      {
        code: "CAI 3821C",
        name: "Computational Methods and Applications for AI 1",
        schedule: "Online, Tues/Thurs 6:00 PM - 7:15 PM (synchronous)",
        description:
          "This course is essential for advancing your understanding of AI computational methods.",
      },
    ];
    setRecommendations(placeholderRecommendations);
  };

  const renderOptions = (options, multiple = false) => {
    return options.map((option, index) => (
      <button
        key={index}
        onClick={() =>
          handleResponse(
            multiple ? [...(responses[step] || []), option] : option,
          )
        }
        className={`mb-2 px-4 py-2 ${multiple ? "bg-blue-100 text-blue-700" : "bg-blue-500 text-white"} rounded hover:bg-blue-600 hover:text-white`}
      >
        {option}
      </button>
    ));
  };

  const renderRecommendations = () => {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">
          Here are my course recommendations for you:
        </h2>
        {recommendations.map((course, index) => (
          <Alert key={index} className="mb-4">
            <AlertTitle>
              {course.code} - {course.name}
            </AlertTitle>
            <AlertDescription>
              Schedule: {course.schedule}
              <br />
              {course.description}
            </AlertDescription>
          </Alert>
        ))}
        <p className="mt-4">
          Remember, these are just suggestions based on your responses. I
          recommend discussing these options with your academic advisor to
          ensure they align with your degree progress and goals.
        </p>
        <button
          onClick={() => window.open("https://www.mdc.edu/advising/", "_blank")}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Schedule an Advising Appointment
        </button>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">
        MDC AI Degree Assistant
      </h1>
      {step < steps.length ? (
        <div>
          <p className="mb-4">{steps[step].question}</p>
          <div className="flex flex-col">
            {renderOptions(steps[step].options, steps[step].multiple)}
          </div>
        </div>
      ) : (
        renderRecommendations()
      )}
    </div>
  );
};

export default AIDegreeAssistant;
