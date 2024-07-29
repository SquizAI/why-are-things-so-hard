import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
import path from "path";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const parsePDF = async (pdfContent: string) => {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "Extract academic details from the provided advisory report PDF content.",
      },
      {
        role: "user",
        content: pdfContent,
      },
    ],
  });

  return response.data.choices[0].message?.content;
};

export const solveMathHomework = async () => {
  const response = await openai.createChatCompletion({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant. Help me with my math homework!",
      },
      { role: "user", content: "Hello! Could you solve 2+2?" },
    ],
  });

  return response.data.choices[0].message.content;
};

export const getAssistantInfo = async () => {
  const response = await openai.createChatCompletion({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content:
          "What is your name and who created you? What is your training cutoff date?",
      },
    ],
  });

  return response.data.choices[0].message.content;
};

export const processImage = async (imagePath: string) => {
  const imageBase64 = encodeImage(imagePath);
  const response = await openai.createChatCompletion({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant that responds in Markdown. Help me with my knowing who the best football team of all time is!",
      },
      {
        role: "user",
        content: [
          { type: "text", text: "What's the name of the best quarterback?" },
          {
            type: "image_url",
            image_url: { url: `data:image/png;base64,${imageBase64}` },
          },
        ],
      },
    ],
    temperature: 0.0,
  });

  return response.data.choices[0].message.content;
};

const encodeImage = (imagePath: string) => {
  const imageFile = fs.readFileSync(imagePath);
  return imageFile.toString("base64");
};
