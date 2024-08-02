import React from "react";
// import { google } from "@ai-sdk/google";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: "AIzaSyBQtvI9iIa_zRCoTcrnEeAd1C5nE93dejs",
});
const { text } = await generateText({
  model: google("models/gemini-1.5-flash"),
  prompt: "discribe taj mahal in a sentence?",
});

// const model = google('models/gemini-1.5-flash');
function page() {
  return <div>{text}</div>;
}

export default page;
