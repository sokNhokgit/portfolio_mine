import React from "react";

export const SkillDetail: React.FC = () => (
  <div className="flex flex-col justify-center items-center">
    <h2 className="text-xl font-extrabold py-8 text-[#15b48c]">
      Soft Skills
    </h2>
    <p className="text-sm py-2 text-gray-600 max-w-xl text-center">
      Complementing my technical abilities, I thrive in dynamic team settings with exceptional interpersonal skills and a proactive approach to growth.
    </p>

    <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"> {/* Increased max-w for wider layout */}
      <div className="p-6 px-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md border border-purple-200 hover:shadow-lg transition-shadow"> {/* Added px-8 for extra horizontal padding */}
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-4">💬</span>
          <h3 className="text-xl font-semibold text-gray-900">
            Communication
          </h3>
        </div>
        <p className="text-base text-gray-600 leading-relaxed">
          Articulate in conveying complex ideas clearly, fostering open dialogue, and active listening to align teams effectively.
        </p>
      </div>

      <div className="p-6 px-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md border border-green-200 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-4">👥</span>
          <h3 className="text-xl font-semibold text-gray-900">
            Teamwork & Collaboration
          </h3>
        </div>
        <p className="text-base text-gray-600 leading-relaxed">
          Excel in cross-functional teams, contributing diverse perspectives while supporting collective goals and shared success.
        </p>
      </div>

      <div className="p-6 px-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-md border border-orange-200 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-4">🧠</span>
          <h3 className="text-xl font-semibold text-gray-900">
            Problem-Solving
          </h3>
        </div>
        <p className="text-base text-gray-600 leading-relaxed">
          Analytical mindset for tackling challenges creatively, breaking down issues, and implementing innovative, efficient solutions.
        </p>
      </div>

      <div className="p-6 px-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-4">⚡</span>
          <h3 className="text-xl font-semibold text-gray-900">
            Adaptability
          </h3>
        </div>
        <p className="text-base text-gray-600 leading-relaxed">
          Quick to embrace change, learn new tools, and pivot strategies in fast-paced environments to deliver consistent results.
        </p>
      </div>

      <div className="p-6 px-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl shadow-md border border-indigo-200 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-4">🎯</span>
          <h3 className="text-xl font-semibold text-gray-900">
            Time Management
          </h3>
        </div>
        <p className="text-base text-gray-600 leading-relaxed">
          Prioritize tasks effectively, meet deadlines under pressure, and balance multiple projects without compromising quality.
        </p>
      </div>

      <div className="p-6 px-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl shadow-md border border-pink-200 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-4">💡</span>
          <h3 className="text-xl font-semibold text-gray-900">
            Leadership
          </h3>
        </div>
        <p className="text-base text-gray-600 leading-relaxed">
          Motivate teams, delegate responsibilities, and guide initiatives toward success with empathy and strategic vision.
        </p>
      </div>
    </div>
  </div>
);