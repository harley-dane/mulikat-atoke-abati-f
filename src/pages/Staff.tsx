import { useState, useEffect } from "react";
import StaffCard from "../components/StaffCard";
import { type StaffMember } from "../types"; // Updated to  Staffm

const Staff: React.FC = () => {
  const [staff, setStaff] = useState<StaffMember[]>([]); // Updated to StaffMember
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        console.log(
          "Fetching from:",
          `${import.meta.env.VITE_API_URL}/api/staff`
        );
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/staff`
        );
        if (!response.ok) {
          throw new Error(
            `HTTP error! Status: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setStaff(data);
      } catch (err: Error) {
        // Changed from any to Error
        setError(err.message);
        console.error("Fetch error:", err);
      }
    };
    fetchStaff();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
        Our Staff
      </h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {staff.length === 0 && !error && (
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
