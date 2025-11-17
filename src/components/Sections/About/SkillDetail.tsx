// src/components/about/CardTwo.tsx
import React from "react";

export const SkillDetail: React.FC = () => (
  <div className="flex flex-col items-center justify-center p-8 h-full bg-white rounded-lg">
    <h2 className="text-4xl font-extrabold text-[#15b48c] mb-6">
      🚀 Core Competencies
    </h2>
    <p className="text-xl text-gray-600 mb-10 max-w-2xl text-center">
      My professional focus lies in building efficient, scalable, and highly interactive user interfaces.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
      {/* Competency Item 1 */}
      <div className="p-4 border-l-4 border-yellow-500 bg-gray-50 rounded-md shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          React & Next.js
        </h3>
        <p className="text-sm text-gray-500">
          Deep expertise in component architecture, state management (Zustand/Redux), and server components.
        </p>
      </div>

      {/* Competency Item 2 */}
      <div className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded-md shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          Styling & UX
        </h3>
        <p className="text-sm text-gray-500">
          Proficient in Tailwind CSS, responsive design, and animations using Framer Motion.
        </p>
      </div>

      {/* Competency Item 3 */}
      <div className="p-4 border-l-4 border-red-500 bg-gray-50 rounded-md shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          Testing & Quality
        </h3>
        <p className="text-sm text-gray-500">
          Unit testing with Jest/RTL and E2E testing with Cypress to ensure stability.
        </p>
      </div>

      {/* Competency Item 4 */}
      <div className="p-4 border-l-4 border-[#15b48c] bg-gray-50 rounded-md shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          TypeScript
        </h3>
        <p className="text-sm text-gray-500">
          Strong focus on type safety and robust, predictable codebase development.
        </p>
      </div>
    </div>
  </div>
);