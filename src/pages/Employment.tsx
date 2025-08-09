// client/src/pages/Employment.tsx
import { useState, useEffect } from "react";
import ScrollArrows from "../components/ScrollArrows";

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  postedDate: string;
}

const Employment: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      // Placeholder for form submission (e.g., send to backend or email service)
      alert("Application submitted! We will contact you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setError("Failed to submit application. Please try again.");
    }
  };

  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Employment Opportunities
      </h1>
      <div className="space-y-6 mb-10">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-700">
              {job.title}
            </h3>
            <p className="text-gray-600 mt-2">{job.description}</p>
            <p className="text-gray-600 mt-2">Location: {job.location}</p>
            <p className="text-gray-500 text-sm mt-2">
              Posted: {new Date(job.postedDate).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
        Apply Now
      </h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Cover Letter
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-2 border rounded"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
        >
          Submit Application
        </button>
      </form>
      <ScrollArrows />
    </section>
  );
};

export default Employment;
