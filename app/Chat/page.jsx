"use client";
import { useChat } from "ai/react";
import React, { useEffect, useRef } from "react";

function Chat() {
  const { message, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
  });
  const chatContainer = useRef();

  const scroll = () => {
    const { offsetHeigth, scrollHeight, scrollTop } = chatContainer.current;
    if (scrollHeight >= scrollTop + offsetHeigth) {
      chatContainer.current?.scrollTo(0, scrollHeight + 200);
    }
  };

  useEffect(() => {
    scroll();
  }, [message]);

  const renderResponse = () => {
    console.log(message);
    return (
      <div className="res">
        {message?.map((m, index) => (
          <div>
            <h4>{m.role}</h4> <p>{m.content}</p>
            <br />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="chat" ref={chatContainer}>
      {renderResponse()}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask gym bro"
          onChange={handleInputChange}
          value={input}
          name=""
          id=""
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
