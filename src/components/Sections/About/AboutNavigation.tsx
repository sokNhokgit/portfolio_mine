// src/components/about/AboutNavigation.tsx
import { ChevronRight, ChevronLeft } from "lucide-react";
import React from "react";

type TabName = "card1" | "card2";

interface AboutNavigationProps {
  tabs: TabName[];
  activeTab: TabName;
  currentIndex: number;
  goPrev: () => void;
  goNext: () => void;
  setActiveTab: (tab: TabName) => void;
  setDirection: (direction: "left" | "right") => void;
}

export const AboutNavigation: React.FC<AboutNavigationProps> = ({
  tabs,
  activeTab,
  currentIndex,
  goPrev,
  goNext,
  setActiveTab,
  setDirection,
}) => {
  return (
    <div className="flex justify-center items-center gap-4 relative z-10">
      {/* Previous Button */}
      <button
        onClick={goPrev}
        disabled={currentIndex === 0}
        className="p-3 rounded-full hover:bg-gray-100 transition cursor-pointer"
        aria-label="Previous card"
      >
        <ChevronLeft
          size={24}
          className={currentIndex === 0 ? "text-gray-300" : "text-[#15b48c]"}
        />
      </button>

      {/* Navigation Dots */}
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setDirection(tabs.indexOf(tab) > currentIndex ? "right" : "left");
            setActiveTab(tab);
          }}
          aria-label={`Go to ${tab}`}
        >
          <span
            className={`w-5 h-5 rounded-full block transition-all duration-200 ${
              activeTab === tab ? "bg-[#15b48c]" : "bg-gray-300"
            }`}
          />
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={goNext}
        disabled={currentIndex === tabs.length - 1}
        className="p-3 rounded-full hover:bg-gray-100 transition cursor-pointer"
        aria-label="Next card"
      >
        <ChevronRight
          size={24}
          className={
            currentIndex === tabs.length - 1 ? "text-gray-300" : "text-[#15b48c]"
          }
        />
      </button>
    </div>
  );
};
