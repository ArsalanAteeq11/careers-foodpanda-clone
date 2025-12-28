import { ChevronDown, Search, Star } from "lucide-react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar2() {
  const navigate = useNavigate();
  const navLinks = [
    {
      name: "About us",
      dropdown: [
        { name: "Culture & Values", path: "/culture-values" },
        { name: "Our teams", path: "/teams" },
      ],
    },
    {
      name: "Why foodpanda?",
      dropdown: [
        { name: "pandapurpose", path: "/pandapurpose" },
        {
          name: "Diversity, Equity & Inclusion",
          path: "/diversity-equity-and-inclusion",
        },
        { name: "Benefits", path: "/benefits" },
      ],
    },
    {
      name: "Jobs",
      dropdown: [
        { name: "All jobs", path: "/jobs" },
        {
          name: "PowerUp! SG Tech Traineeship",
          path: "/powerup-sg-tech-traineeship",
        },
      ],
    },
    {
      name: "Locations",
      path: "/locations",
      dropdown: null, // ❌ NO dropdown
    },
    {
      name: "pandaStories",
      dropdown: [
        { name: "foodpanda Blog", path: "/posts" },
        {
          name: "foodpanda News",
          path: "https://foodpanda-three.vercel.app/newsroom",
          external: true,
        },
      ],
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="shadow-lg w-full flex flex-col transition-all duration-500 relative z-50">
      <div className="flex items-center justify-between gap-8 h-20 px-4 md:px-16 lg:px-24 ">
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          src="./images/foodpanda_logo_2023.svg"
          alt=""
          className="cursor-pointer"
        />

        {/* Search Bar */}
        <div
          className="
    hidden p-1 md:flex max-w-lg flex-1 items-center justify-between
    border-2 border-[#eff2f4] bg-white rounded-full
    focus-within:border-[#ff2b85]
    transition-colors duration-300
  "
        >
          <input
            placeholder="Start your job search here"
            className="pl-4 pr-4 text-lg flex-1 placeholder:text-[#bababa] outline-none"
          />
          <button className="bg-[#ff2b85] hover:bg-[#ff2b85]/90 text-white rounded-full px-2 py-2 text-lg font-semibold">
            <Search className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={() => navigate("/candidateshortlist")}
          className="hidden px-6 py-2.5 lg:flex items-center cursor-pointer rounded-full text-md font-semibold text-[#ff2b85] transition-all duration-500 "
        >
          Saved jobs
          <Star />
        </button>
        <div className="flex items-center gap-3 lg:hidden">
          <svg
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-6 w-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </div>

      <div className="hidden h-16.75 lg:flex items-center  justify-center border-t-2 border-[#ff2b85] ">
        <div className="hidden md:flex items-center text-lg gap-14">
          {navLinks.map((link, i) => (
            <div className="relative group">
              {/* Parent NavLink */}
              <NavLink
                to={link.path}
                className="
                  flex items-center gap-1 font-semibold cursor-pointer "
              >
                {link.name}

                {link.dropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </NavLink>

              {/* Dropdown */}
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-4 w-72 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="flex flex-col p-4">
                    {link.dropdown.map((item, j) =>
                      item.external ? (
                        <a
                          key={j}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 text-lg hover:bg-gray-100 border-b last:border-b-0"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <NavLink
                          key={j}
                          to={item.path}
                          className="py-2 text-lg hover:bg-gray-100 border-b last:border-b-0"
                        >
                          {item.name}
                        </NavLink>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-50 top-0 left-0 w-full h-screen bg-white text-base flex flex-col lg:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {navLinks.map((link, i) => (
          <div className="relative group">
            {/* Parent NavLink */}
            <NavLink
              to={link.path}
              className="
                           flex items-center gap-1 font-semibold cursor-pointer "
            >
              {link.name}

              {link.dropdown && (
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              )}
            </NavLink>

            {/* Dropdown */}
            {link.dropdown && (
              <div className="absolute z-50 top-full left-0 mt-4 w-72 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="flex flex-col p-4">
                  {link.dropdown.map((item, j) =>
                    item.external ? (
                      <a
                        key={j}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 text-lg hover:bg-gray-100 border-b last:border-b-0"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <NavLink
                        key={j}
                        to={item.path}
                        className="py-2 text-lg hover:bg-gray-100 border-b last:border-b-0"
                      >
                        {item.name}
                      </NavLink>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        <button
          onClick={() => navigate("/candidateshortlist")}
          className="bg-[#ff2b85] text-white px-8 py-2.5 rounded-full transition-all duration-500"
        >
          Saved Jobs
        </button>
      </div>
    </nav>
  );
}
