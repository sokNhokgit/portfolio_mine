// src/components/about/CardOne.tsx
import React from "react";

interface Node {
  id: string;
  label: string;
  top: string;
  left: string;
  color: string;
}

const nodes: Node[] = [
  { id: "1", label: "A", top: "60%", left: "25%", color: "#15b48c" },
  { id: "2", label: "B", top: "40%", left: "50%", color: "#facc15" }, // yellow-400
  { id: "3", label: "C", top: "60%", left: "75%", color: "#ef4444" }, // red-500
  { id: "4", label: "D", top: "20%", left: "50%", color: "#3b82f6" }, // blue-500
];

// Define connections between nodes by index
const connections: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
];

export const SkillTree: React.FC = () => (
  <div className="w-full h-full relative">
    {/* Lines */}
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {connections.map(([from, to], i) => {
        const fromNode = nodes[from];
        const toNode = nodes[to];

        // Convert percentages to numbers for path calculation
        const fromX = parseFloat(fromNode.left) / 100;
        const fromY = parseFloat(fromNode.top) / 100;
        const toX = parseFloat(toNode.left) / 100;
        const toY = parseFloat(toNode.top) / 100;

        // Use cubic Bezier curve for crooked/curved lines
        const path = `
          M ${fromX * 100}% ${fromY * 100}%
          C ${(fromX * 100 + toX * 100) / 2}% ${fromY * 100}%,
            ${(fromX * 100 + toX * 100) / 2}% ${toY * 100}%,
            ${toX * 100}% ${toY * 100}%
        `;

        return (
          <path
            key={i}
            d={path}
            stroke="#ccc"
            strokeWidth="2"
            fill="none"
          />
        );
      })}
    </svg>

    {/* Nodes */}
    {nodes.map((node) => (
      <div
        key={node.id}
        className="absolute w-12 h-12 rounded-full flex items-center justify-center text-white cursor-pointer"
        style={{ top: node.top, left: node.left, backgroundColor: node.color }}
        title={`Node ${node.label}`}
      >
        {node.label}
      </div>
    ))}
  </div>
);
