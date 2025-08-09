// client/src/pages/AboutUs.tsx
import ScrollArrows from "../components/ScrollArrows";

const AboutUs: React.FC = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Mulikat Atoke Abati Fondation
      </h1>
      <div className="prose max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 mb-4">
          Mulikat Atoke Abati Foundation is a nonprofit organization dedicated
          to supporting community-driven initiatives in Nigeria. Founded in
          2025, we connect donors with impactful projects in education,
          conservation, and sustainable development.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to empower Nigerian communities by providing resources,
          fostering partnerships, and promoting sustainable solutions. We work
          closely with local organizations to ensure donations make a meaningful
          difference.
        </p>
        <p className="text-lg text-gray-700">
          With a focus on transparency and accountability, Mulikat Atoke Abati
          Foundation ensures that every contribution supports initiatives
          aligned with our values of equity, environmental stewardship, and
          community empowerment.
        </p>
      </div>
      <ScrollArrows />
    </section>
  );
};

export default AboutUs;
