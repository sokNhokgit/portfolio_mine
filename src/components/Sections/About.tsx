"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"card1" | "card2">("card1");
  const [direction, setDirection] = useState<"left" | "right">("right");

  const variants = {
    enterLeft: { opacity: 0, x: -100 },
    enterRight: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exitLeft: { opacity: 0, x: -100 },
    exitRight: { opacity: 0, x: 100 },
  };

  const tabs: ("card1" | "card2")[] = ["card1", "card2"];
  const currentIndex = tabs.indexOf(activeTab);

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection("left");
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const goNext = () => {
    if (currentIndex < tabs.length - 1) {
      setDirection("right");
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col px-6 overflow-hidden">

      <div className="flex justify-center items-center mb-12 gap-4">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="p-3 rounded-full hover:bg-gray-100 transition"
          aria-label="switcher"
        >
          <ChevronLeft
            size={24}
            className={currentIndex === 0 ? "text-gray-300" : "text-[#15b48c]"}
          />
        </button>

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setDirection(tabs.indexOf(tab) > currentIndex ? "right" : "left");
              setActiveTab(tab);
            }}
            aria-label="active-bullet"
          >
            <span
              className={`w-5 h-5 rounded-full block transition-all duration-200 ${
                activeTab === tab ? "bg-[#15b48c]" : "bg-gray-300"
              }`}
            />
          </button>
        ))}

        <button
          onClick={goNext}
          disabled={currentIndex === tabs.length - 1}
          className="p-3 rounded-full hover:bg-gray-100 transition"
          aria-label="switcher"
        >
          <ChevronRight
            size={24}
            className={currentIndex === tabs.length - 1 ? "text-gray-300" : "text-[#15b48c]"}
          />
        </button>
      </div>

      {/* --- Content Container --- */}
      <div className="relative w-full max-w-4xl mx-auto h-[500px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            variants={variants}
            initial={direction === "right" ? "enterRight" : "enterLeft"}
            animate="center"
            exit={direction === "right" ? "exitLeft" : "exitRight"}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            {activeTab === "card1" ? (
              <div className="w-full h-full relative">
                {/* Lines */}
                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="25%" y1="60%" x2="50%" y2="40%" stroke="#ccc" strokeWidth="2"/>
                  <line x1="50%" y1="40%" x2="75%" y2="60%" stroke="#ccc" strokeWidth="2"/>
                  <line x1="50%" y1="40%" x2="50%" y2="20%" stroke="#ccc" strokeWidth="2"/>
                </svg>

                {/* Nodes */}
                <div
                  className="absolute top-[60%] left-[25%] w-12 h-12 rounded-full bg-[#15b48c] flex items-center justify-center text-white cursor-pointer"
                  title="Node 1"
                >
                  A
                </div>
                <div
                  className="absolute top-[40%] left-[50%] w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white cursor-pointer"
                  title="Node 2"
                >
                  B
                </div>
                <div
                  className="absolute top-[60%] left-[75%] w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white cursor-pointer"
                  title="Node 3"
                >
                  C
                </div>
                <div
                  className="absolute top-[20%] left-[50%] w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white cursor-pointer"
                  title="Node 4"
                >
                  D
                </div>
              </div>
            ) : (
              <div className="text-center px-12">
                <h1 className="text-4xl font-bold mb-4">Page 2</h1>
                <p className="text-lg text-gray-700">
                  This is the content for Page 2.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
