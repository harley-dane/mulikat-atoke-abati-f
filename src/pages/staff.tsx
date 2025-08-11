import { useState, useEffect } from "react";
import StaffCard from "../components/StaffCard";
import type { StaffMember } from "../types/index";

const Staff: React.FC = () => {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      setIsLoading(true);
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        if (!apiUrl) {
          throw new Error(
            "VITE_API_URL is not defined in environment variables"
          );
        }
        const url = `${apiUrl}/api/staff`;
        console.log("Fetching from:", url);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `HTTP error! Status: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setStaff(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
          console.error("Fetch error:", err);
        } else {
          setError("An unknown error occurred");
          console.error("Fetch error:", err);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchStaff();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
        Our Staff
      </h2>
      {isLoading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {!isLoading && staff.length === 0 && !error && (
        <p className="text-center">No staff found.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {staff.map((member) => (
          <StaffCard key={member._id} staff={member} />
        ))}
      </div>
    </div>
  );
};

export default Staff;
