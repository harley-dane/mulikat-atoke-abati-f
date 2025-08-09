// client/src/pages/Leadership.tsx
import { useState, useEffect } from "react";
import ScrollArrows from "../components/ScrollArrows";

interface Leader {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
}

const Leadership: React.FC = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/leadership")
      .then((res) => res.json())
      .then((data) => setLeaders(data))
      .catch((err) => console.error("Error fetching leadership:", err));
  }, []);

  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Our Leadership
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaders.map((leader) => (
          <div
            key={leader.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">
                {leader.name}
              </h3>
              <p className="text-gray-600 font-medium">{leader.title}</p>
              <p className="text-gray-600 mt-2">{leader.bio}</p>
            </div>
          </div>
        ))}
      </div>
      <ScrollArrows />
    </section>
  );
};

export default Leadership;
