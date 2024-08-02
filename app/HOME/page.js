"use client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect, useRef } from "react";
const genAI = new GoogleGenerativeAI("AIzaSyBQtvI9iIa_zRCoTcrnEeAd1C5nE93dejs");

export default function Home() {
  const inputArea = useRef();
  const [text, setText] = useState("generate");

  function convertToHTML(response) {
    console.log(response[0]);
    const text = response[0].content.parts[0].text;

    // Basic formatting (replace with your desired formatting logic)
    const formattedText = text
      .replace(/\n\n/g, "</p><p>") // Replace double newlines with closing and opening paragraph tags
      .replace(/\n/g, "<br />") // Replace single newlines with HTML line breaks
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") // Bold text wrapped in double asterisks
      .replace(/_(.+?)_/g, "<em>$1</em>"); // Italicize text wrapped in underscores

    return formattedText;
  }

  async function run() {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = inputArea.current.value;

    const result = await model.generateContent(prompt);
    const response = await result.response.candidates;
    const text = convertToHTML(response);
    console.log(response);
    setText(text);
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <textarea name="" id="" ref={inputArea}></textarea>
      <button onClick={run}>Generate</button>
    </div>
  );
}
