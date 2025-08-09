// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <div className="prose max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          To empower communities in Nigeria through sustainable development and
          education.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-8">Our Vision</h2>
        <p>
          A thriving Nigeria where every community has access to opportunities
          and resources.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-8">Our Team</h2>
        <p>
          We are a dedicated group of volunteers and professionals working
          together to make a difference.
        </p>
      </div>
    </section>
  );
};

export default About;
