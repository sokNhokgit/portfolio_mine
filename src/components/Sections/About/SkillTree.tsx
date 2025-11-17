// src/components/about/SkillTree.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SkillItem {
  icon: string; // Path to the icon
  name: string; // Label under the icon
}

interface SkillTreeProps {
  skillItems?: SkillItem[]; // Optional prop for array of {icon, name}
}

export const SkillTree: React.FC<SkillTreeProps> = ({ 
  skillItems = [
    { icon: '/icons/html.png', name: 'HTML' },
    { icon: '/icons/css.png', name: 'CSS' },
    { icon: '/icons/js.png', name: 'JavaScript' },
    { icon: '/icons/vue.png', name: 'Vue.js' },
    { icon: '/icons/php.png', name: 'PHP' },
    { icon: '/icons/nodejs.png', name: 'Node.js' },
  ] 
}) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 0.05); // Gentle increment
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Subtle sway animation using time (like leaves on a tree)
  const swayX = Math.sin(time) * 2; // -2 to +2px horizontal offset

  return (
    <div className="w-full h-full relative flex overflow-x-auto px-4">
      {/* Animated horizontal row */}
      <div 
        className="flex flex-row space-x-4" 
        style={{ transform: `translateX(${swayX}px)` }} // Tie in time-based animation
      >
        {skillItems.map((item, index) => (
          <div
            key={`${item.icon}-${index}`}
            className="flex flex-col items-center flex-shrink-0" // Stack icon + label vertically, centered
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 mb-1"> {/* mb-1 for spacing under icon */}
              {/* <Image
                src={item.icon}
                alt={`${item.name} Icon`}
                className="w-full h-full object-cover p-3" // Removed p-4 to avoid inner padding distortion
                width={64}
                height={64}
                placeholder="blur" // Smooth loading (omit blurDataURL unless providing base64)
                blurDataURL="blur"
                priority={index < 3} // Eager-load first few
              /> */}
              <i className="devicon-devicon-plain"></i>
            </div>
            {/* Label */}
            <p className="text-xs text-gray-600 text-center font-medium leading-tight"> {/* Small, subtle text */}
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};