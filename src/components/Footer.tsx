// src/components/Footer.tsx
import { useState } from "react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      alert("Subscribed successfully!");
      setEmail("");
    } catch {
      alert("Failed to subscribe.");
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Supporting sustainable projects and community development in
              Nigeria .[](https://www.mulkatatokeabati.org/about-us)
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/projects" className="hover:text-blue-400">
                  Projects & Affiliates
                </a>
              </li>
              <li>
                <a href="/how-we-help" className="hover:text-blue-400">
                  How We Help
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col space-y-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="p-2 rounded text-black"
                required
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 p-2 rounded"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-blue-400 hover:text-blue-600"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                className="text-blue-400 hover:text-blue-600"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/muli.katatokefoundation/"
                className="text-blue-400 hover:text-blue-600"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@user49500879921058"
                className="text-blue-400 hover:text-blue-600"
              >
                Tiktok
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Mulikat Atoke Abati Foundation
          design by harley Clair. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
