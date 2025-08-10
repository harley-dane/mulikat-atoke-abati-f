// client/src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import AboutUs from "./pages/AboutUs";
import Leadership from "./pages/Leadership";
import Staff from "./pages/Worker";
import Reports from "./pages/Reports";
import Employment from "./pages/Employment";
import FAQs from "./pages/FAQs";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
