import React from "react";

export const SkillDetail: React.FC = () => {
  const skills = [
    {
      icon: "💬",
      title: "Communication",
      desc: "Articulate in conveying complex ideas clearly, fostering open dialogue, and active listening to align teams effectively.",
      color: "from-purple-50 to-purple-100 border-purple-200",
    },
    {
      icon: "👥",
      title: "Teamwork & Collaboration",
      desc: "Excel in cross-functional teams, contributing diverse perspectives while supporting collective goals and shared success.",
      color: "from-green-50 to-green-100 border-green-200",
    },
    {
      icon: "🧠",
      title: "Problem-Solving",
      desc: "Analytical mindset for tackling challenges creatively, breaking down issues, and implementing innovative, efficient solutions.",
      color: "from-orange-50 to-orange-100 border-orange-200",
    },
    {
      icon: "⚡",
      title: "Adaptability",
      desc: "Quick to embrace change, learn new tools, and pivot strategies in fast-paced environments to deliver consistent results.",
      color: "from-blue-50 to-blue-100 border-blue-200",
    },
    {
      icon: "🎯",
      title: "Time Management",
      desc: "Prioritize tasks effectively, meet deadlines under pressure, and balance multiple projects without compromising quality.",
      color: "from-indigo-50 to-indigo-100 border-indigo-200",
    },
    {
      icon: "💡",
      title: "Leadership",
      desc: "Motivate teams, delegate responsibilities, and guide initiatives toward success with empathy and strategic vision.",
      color: "from-pink-50 to-pink-100 border-pink-200",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-6">
      <h2 className="text-xl font-extrabold py-6 text-[#15b48c]">
        Soft Skills
      </h2>

      <p className="text-sm text-gray-600 max-w-xl text-center px-2">
        Complementing my technical abilities, I thrive in dynamic team settings with exceptional interpersonal skills and a proactive approach to growth.
      </p>

      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`p-6 bg-gradient-to-br ${skill.color} rounded-xl shadow-md border hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-4">{skill.icon}</span>
              <h3 className="text-lg font-semibold text-[#15b48c]">
                {skill.title}
              </h3>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
