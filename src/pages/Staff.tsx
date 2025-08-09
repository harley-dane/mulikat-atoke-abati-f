// client/src/pages/Staff.tsx
import { useState, useEffect } from "react";
import ScrollArrows from "../components/ScrollArrows";

interface StaffMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const Staff: React.FC = () => {
  const [staff, setStaff] = useState<StaffMember[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/staff")
      .then((res) => res.json())
      .then((data) => setStaff(data))
      .catch((err) => console.error("Error fetching staff:", err));
  }, []);

  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Our Staff
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">
                {member.name}
              </h3>
              <p className="text-gray-600 font-medium">{member.role}</p>
              <p className="text-gray-600 mt-2">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
      <ScrollArrows />
    </section>
  );
};

export default Staff;
