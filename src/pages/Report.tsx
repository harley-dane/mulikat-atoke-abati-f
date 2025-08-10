// src/pages/Reports.tsx
import React from "react";

const Reports: React.FC = () => {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
        Annual Reports
      </h1>
      <div className="prose max-w-3xl mx-auto">
        <p>
          Our annual reports highlight the impact of your donations on Nigerian
          communities. Download our reports below.
        </p>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="/assets/reports/2023-annual-report.pdf"
              className="text-blue-600 hover:underline"
            >
              2024 Annual Report
            </a>
          </li>
          <li>
            <a
              href="/assets/reports/2022-annual-report.pdf"
              className="text-blue-600 hover:underline"
            >
              2023 Annual Report
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Reports;
