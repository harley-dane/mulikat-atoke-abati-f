// src/components/ScrollArrows.tsx
import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Install react-icons for arrow icons

const ScrollArrows: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
      <button
        onClick={scrollToTop}
        className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800 shadow-md"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
      <button
        onClick={scrollToBottom}
        className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800 shadow-md"
        aria-label="Scroll to bottom"
      >
        <FaArrowDown />
      </button>
    </div>
  );
};

export default ScrollArrows;
