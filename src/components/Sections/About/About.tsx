// src/components/about/About.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AboutNavigation } from "./AboutNavigation";
import { SkillTree } from "./SkillTree";
import { SkillDetail } from "./SkillDetail";

type TabName = "card1" | "card2";

export default function About() {
  const [activeTab, setActiveTab] = useState<TabName>("card1");
  const [direction, setDirection] = useState<"left" | "right">("right");

  // Track if a tab has already been animated
  const [hasAnimated, setHasAnimated] = useState<Record<TabName, boolean>>({
    card1: false,
    card2: false,
  });

  const variants = {
    enterLeft: { opacity: 0, x: -100 },
    enterRight: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exitLeft: { opacity: 0, x: -100 },
    exitRight: { opacity: 0, x: 100 },
  };

  const fadeOnly = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const tabs: TabName[] = ["card1", "card2"];
  const currentIndex = tabs.indexOf(activeTab);

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection("left");
      setActiveTabWithMemory(tabs[currentIndex - 1]);
    }
  };

  const goNext = () => {
    if (currentIndex < tabs.length - 1) {
      setDirection("right");
      setActiveTabWithMemory(tabs[currentIndex + 1]);
    }
  };

  const setActiveTabWithMemory = (tab: TabName) => {
    setHasAnimated((prev) => ({
      ...prev,
      [tab]: true,
    }));
    setActiveTab(tab);
  };

  const isFirstTime = !hasAnimated[activeTab];

  return (
    <div className="min-h-screen w-full bg-white flex flex-col overflow-hidden">
      <AboutNavigation
        tabs={tabs}
        activeTab={activeTab}
        currentIndex={currentIndex}
        goPrev={goPrev}
        goNext={goNext}
        setActiveTab={setActiveTabWithMemory}
        setDirection={setDirection}
      />

      <div className="relative w-full max-w-7xl mx-auto h-[500px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            variants={isFirstTime ? variants : fadeOnly}
            initial={
              isFirstTime
                ? direction === "right"
                  ? "enterRight"
                  : "enterLeft"
                : "initial"
            }
            animate={isFirstTime ? "center" : "animate"}
            exit={isFirstTime ? (direction === "right" ? "exitLeft" : "exitRight") : "exit"}
            transition={{ duration: isFirstTime ? 0.5 : 0.25 }}
            className="absolute top-0 left-0 w-full h-full z-0"
          >
            {activeTab === "card1" ? <SkillTree /> : <SkillDetail />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
