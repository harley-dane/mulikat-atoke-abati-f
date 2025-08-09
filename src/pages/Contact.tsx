// src/pages/Contact.tsx
import { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch {
      alert("An error occurred.");
    }
  };

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:Mulikatatokeabatifoundation@gmail.com"
              className="text-blue-600"
            >
              Mulikatatokeabatifoundation@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+447438389127" className="text-blue-600">
              + (44) 7438389127
            </a>
          </p>
          <p>Hours: Monday - Friday, 9am - 5pm EST/EDT</p>
          <p className="mt-4">
            Nigeria Address: 6 Oritshe street Ikeja Awolowo way Lagos Nigeria
          </p>
          <p>Uk Address: P.O. Box 748, West Chester, London 19381</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-md p-6 bg-white shadow-md rounded-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
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
              Message
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
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
