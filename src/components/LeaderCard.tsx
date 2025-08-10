// client/src/components/LeaderCard.tsx
import React from "react";
import type { Leader } from "../types";

interface LeaderCardProps {
  leader: Leader;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ leader }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={leader.image}
        alt={leader.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          console.error(`Failed to load image: ${leader.image}`);
          e.currentTarget.src = "/placeholder.jpg"; // Fallback image
        }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-green-700">{leader.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{leader.position}</p>
        <p className="text-gray-700 text-base">{leader.bio}</p>
      </div>
    </div>
  );
};

export default LeaderCard;
