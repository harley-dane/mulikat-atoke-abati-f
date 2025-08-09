// src/pages/Donate.tsx
import React from "react";
import DonationForm from "../components/DonationForm";

const Donate: React.FC = () => {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Support Our Cause</h1>
      <p className="text-lg text-center mb-8">
        Your donation helps us continue our mission to support Nigerian
        communities.
      </p>
      <DonationForm />
    </section>
  );
};

export default Donate;
