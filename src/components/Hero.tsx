// src/components/Hero.tsx
import { Link } from "react-router-dom";
import backgroundImage from "../assets/african-children1.webp";

const Hero: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center py-20 text-center min-h-[500px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-white bg-black bg-opacity-50 p-6 rounded">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Support Nigerians Future
        </h1>
        <p className="text-lg mb-6">
          Connect your values with vetted nonprofit solutions to empower
          communities.[](https://mulikat-atoke-abati-f.onrender.com/about-us)
        </p>
        <Link
          to="/donate"
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
        >
          Donate Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
