"use client";

import { useRef, useState } from "react";
import { streamComponent } from "../action";

export const saveLocal = (name, data) => {
  // console.log(name, data);
  // if (name && data) {
  //   localStorage.setItem(name, data);
  // }
  return true;
};

export default function Page() {
  const [convo, setConvo] = useState([]);
  const [component, setComponent] = useState([]);
  const inputBox = useRef();

  return (
    <div className="m-auto w-1/2 h-full flex flex-col relative">
      <form
        className="absolute bottom-0 left-0 w-full"
        onSubmit={async (e) => {
          e.preventDefault();
          setConvo((prev) => [
            ...prev,
            <div className="">User: {inputBox.current.value}</div>,
          ]);
          const res = await streamComponent(inputBox.current.value);
          if (res) {
            setConvo((prev) => [...prev, res]);
          }
          inputBox.current.value = "";
        }}
      >
        <div className="w-full flex flex-row gap-2 mb-4">
          <input
            type="text"
            ref={inputBox}
            placeholder="Ask AI"
            className="p-4 text-white bg-black border border-solid border-white outline-none rounded-full flex-1"
          />
          <button className="bg-blue-500 p-1 rounded-full px-6 text-white font-medium">
            Send
          </button>
        </div>
      </form>
      {/* <div>{component}</div> */}
      <div className="convo_container flex flex-col gap-2 text-white font-medium mt-6">
        {convo.length > 0 &&
          convo.map((a, i) => (
            <div className=" p-4 text-lg" key={i}>
              {a}
            </div>
          ))}
      </div>
    </div>
  );
}
