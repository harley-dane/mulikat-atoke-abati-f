import ScrollArrows from "../components/ScrollArrows";

const reports = [
  {
    id: 1,
    title: "2024 Annual Report",
    description:
      "A comprehensive overview of our projects, impact, and financials for 2024.",
    link: "https://mulikat-atoke-abati-b.onrender.com/reports/2024-annual-report.pdf",
  },
  {
    id: 2,
    title: "2023 Financial Summary",
    description:
      "Detailed financial breakdown of donations and expenditures for 2023.",
    link: "https://mulikat-atoke-abati-b.onrender.com/reports/2023-financial-summary.pdf",
  },
];

const Reports: React.FC = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Reports
      </h1>
      <div className="space-y-6">
        {reports.map((report) => (
          <div key={report.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-700">
              {report.title}
            </h3>
            <p className="text-gray-600 mt-2">{report.description}</p>
            <a
              href={report.link}
              className="mt-4 inline-block text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Report
            </a>
          </div>
        ))}
      </div>
      <ScrollArrows />
    </section>
  );
};

export default Reports;
