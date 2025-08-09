// client/src/components/Header.tsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo2 from "../assets/logo2.jpg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // 300ms delay before closing
  };

  return (
    <header className="bg-green-700 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src={logo2} alt="Naija friend" className="h-20 rounded-full" />
        </Link>
        <button
          type="button"
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <FaBars />
        </button>
        <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Home
              </NavLink>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer">About Amigos</span>
              <ul
                className={`absolute ${
                  isDropdownOpen ? "block" : "hidden"
                } bg-green-700 text-white p-2 rounded shadow-lg w-40`}
              >
                <li>
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      isActive ? "font-bold block py-1" : "block py-1"
                    }
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/leadership"
                    className={({ isActive }) =>
                      isActive ? "font-bold block py-1" : "block py-1"
                    }
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Leadership
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/staff"
                    className={({ isActive }) =>
                      isActive ? "font-bold block py-1" : "block py-1"
                    }
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Staff
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reports"
                    className={({ isActive }) =>
                      isActive ? "font-bold block py-1" : "block py-1"
                    }
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Reports
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/employment"
                    className={({ isActive }) =>
                      isActive ? "font-bold block py-1" : "block py-1"
                    }
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Employment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faqs"
                    className={({ isActive }) =>
                      isActive ? "font-bold block py-1" : "block py-1"
                    }
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    FAQs
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donate"
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
              >
                Donate Now
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
