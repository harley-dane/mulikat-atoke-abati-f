import React from "react";
import type { StaffMember } from "../types";

interface StaffCardProps {
  staff: StaffMember;
}

const StaffCard: React.FC<StaffCardProps> = ({ staff }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={staff.image}
        alt={staff.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          console.error(`Failed to load image: ${staff.image}`);
          e.currentTarget.src = "https://via.placeholder.com/150";
        }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-green-700">{staff.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{staff.role}</p>
        <p className="text-gray-700 text-base">{staff.bio}</p>
      </div>
    </div>
  );
};

export default StaffCard;
