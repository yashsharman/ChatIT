"use client";
import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import React, { useState } from "react";

function page() {
  const [results, setReseult] = useState();
  async function run() {
    const result = await streamText({
      model: google("models/gemini-1.5-flash"),

      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
      prompt: "write me a poem about taj mahal in 10 words",
    });

    //   for await (const textPart of result.textStream) {
    //     process.stdout.write(textPart);
    //   }
    setReseult(result);
    console.log(result);
  }

  run();
  return <div>{results}</div>;
}

export default page;
