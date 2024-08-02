"use client";
import React from "react";
import { useEffect } from "react";

function SaveToLocal({ name, value }) {
  useEffect(() => {
    if (value && name) {
      localStorage.setItem(name, value);
    }
  }, []);
  return (
    <div className="border border-neutral-200 p-4 rounded-lg max-w-fit">
      {name} is saved in your localStorage as {value}🥳
    </div>
  );
}

export default SaveToLocal;
