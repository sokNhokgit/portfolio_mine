// src/components/about/CardOne.tsx
import React from "react";

interface SkillItem {
  name: string;
  iconClass: string;
}

export const SkillTree: React.FC = () => {
  const skillItems: SkillItem[] = [
    { name: "HTML", iconClass: "devicon-html5-plain" },
    { name: "CSS", iconClass: "devicon-css3-plain" },
    { name: "Tailwind", iconClass: "devicon-tailwindcss-original" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain" },
    { name: "BootStrap", iconClass: "devicon-bootstrap-plain" },
    { name: "Vue.JS", iconClass: "devicon-vuejs-plain" },
    { name: "Node JS", iconClass: "devicon-nodejs-plain" },
    { name: "PHP", iconClass: "devicon-php-plain" },
    { name: "TypeScript", iconClass: "devicon-typescript-plain" },
    { name: "MySql", iconClass: "devicon-mysql-original" },
    { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
    { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
    { name: "VScode", iconClass: "devicon-vscode-plain" },
    { name: "Gitlab", iconClass: "devicon-gitlab-plain" },
    { name: "GitHub", iconClass: "devicon-github-original" },
    { name: "StackOverFlow", iconClass: "devicon-stackoverflow-plain" },
    { name: "Flutter", iconClass: "devicon-flutter-plain" },
    { name: "Next.JS", iconClass: "devicon-nextjs-plain" },
    { name: "Figma", iconClass: "devicon-figma-plain" },
    { name: "webpack", iconClass: "devicon-webpack-plain" },
    { name: "Jquery", iconClass: "devicon-jquery-plain" },
    { name: "Python", iconClass: "devicon-python-plain" },
    { name: "Adroid Studio", iconClass: "devicon-androidstudio-plain" },
    { name: "Visual Studio", iconClass: "devicon-visualstudio-plain" },
    { name: "Ubuntu", iconClass: "devicon-ubuntu-plain" },
    { name: "Algorithms", iconClass: "devicon-thealgorithms-plain" },
    // { name: "Visual Studio", iconClass: "devicon-visualstudio-plain" },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center"> {/* Added items-center for horizontal centering */}
      <div className="w-full flex justify-center py-8"> {/* Title container: full width but centered */}
        <h1 className="text-xl font-bold text-gray-600 text-center">Technologies & Tools</h1> {/* Added text-center for safety */}
      </div>
      <div className="max-w-full w-[80%] relative flex flex-row flex-wrap justify-center gap-2 sm:gap-5 mx-auto"> {/* Added mx-auto to center the 80% block */}
        {skillItems.map((item, index) => (
          <div key={index} className="w-16 sm:w-20 flex flex-col items-center"> {/* Responsive width */}
            <i className={`${item.iconClass} text-3xl sm:text-4xl colored`} /> {/* Responsive icon size */}
            <p className="text-xs mt-1 font-bold text-[#15b48c] italic text-center max-w-full"> {/* Centered label */}
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center py-8"> {/* Title container: full width but centered */}
        <p className="text-sm text-gray-600 text-center">All the things included above are my Skill with hand on experienced.</p> {/* Added text-center for alignment */}
      </div>
    </div>
  );
};