// client/src/pages/Leadership.tsx
import { useState, useEffect } from "react";
import LeaderCard from "../components/LeaderCard";
import type { Leader } from "../types";

const Leadership: React.FC = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        if (!apiUrl) {
          throw new Error(
            "VITE_API_URL is not defined in environment variables"
          );
        }
        const url = `${apiUrl}/api/leadership`;
        console.log("Fetching from:", url);
        const response = await fetch(url);
        console.log("Response status:", response.status, response.statusText);

        if (!response.ok) {
          const text = await response.text();
          console.log("Response body:", text.slice(0, 200)); // Log first 200 chars
          throw new Error(
            `HTTP error! Status: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log("Fetched leaders:", data);
        setLeaders(data);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message);
      }
    };
    fetchLeaders();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
        Our Leadership
      </h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {leaders.length === 0 && !error && (
        <p className="text-center">No leaders found.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leaders.map((leader) => (
          <LeaderCard key={leader._id} leader={leader} />
        ))}
      </div>
    </div>
  );
};

export default Leadership;
