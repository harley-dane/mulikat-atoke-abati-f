// client/src/pages/FAQs.tsx
import ScrollArrows from "../components/ScrollArrows";

const faqs = [
  {
    question: "What is Mulikat Atoke Abati Foundation mission?",
    answer:
      "Our mission is to empower Nigerians communities through education, conservation, and sustainable development. We connect donors with impactful local projects.",
  },
  {
    question: "How are donations used?",
    answer:
      "Donations are allocated to specific projects or general operations, with 85% going directly to programs and 15% covering administrative costs, as reported in our 2024 Annual Report.",
  },
  {
    question: "Can I volunteer with Mulikat Atoke Abati Foundation?",
    answer:
      "Yes! We offer volunteer opportunities in community projects and conservation efforts. Visit our Employment page for current openings or contact us for details.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Mulikat Atoke Abati Foundation is a 501(c)(3) nonprofit, and donations are tax-deductible in the U.S. to the extent allowed by law. Consult a tax professional for details.",
  },
  {
    question: "How can I stay updated on your work?",
    answer:
      "Subscribe to our newsletter or follow us on social media for updates on projects, events, and impact stories.",
  },
];

const FAQs: React.FC = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-700">
              {faq.question}
            </h3>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
      <ScrollArrows />
    </section>
  );
};

export default FAQs;
