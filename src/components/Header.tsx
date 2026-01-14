import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Race Info",
      children: [
        { label: "The Race", path: "/race-info" },
        // { label: "Race Pack Pick Up", path: "/race-pack-pick-up" },
        { label: "Bag Drop", path: "/bag-drop" },
        { label: "Prizes", path: "/prizes" },
        // { label: "Transport", path: "/transport" },
        { label: "Rules & Regulations", path: "/rules-and-regulations" },
      ],
    },
    { label: "Registration", path: "/registration" },
    { label: "Volunteer", path: "/volunteer" },
    // { label: "News", path: "/news" },
    { label: "Results", path: "/results" },
  ];

  const toggleSubmenu = (label: string) => {
    if (activeSubmenu === label) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(label);
    }
  };

  return (
    <header className="h-16 md:h-20 w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="w-full h-full flex items-center justify-between px-4 md:px-8 lg:px-16">
        {/* Logo - Left */}
        <div className="text-xl md:text-2xl font-extrabold tracking-tighter z-50 italic shrink-0 flex-1">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            HIMALAYAN<span className="text-primary">HARMONY</span>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        {/* dark */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                {item.children ? (
                  <div className="relative">
                    <button className="flex items-center gap-1 text-sm font-medium opacity-80 hover:opacity-100 hover:text-primary transition-all py-4 italic whitespace-nowrap">
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-background border border-white/10 overflow-hidden shadow-2xl p-2 skew-x-[-6deg]">
                        <div className="skew-x-[6deg]">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors italic"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path!}
                    className={`text-sm font-medium transition-all relative group italic ${
                      location.pathname === item.path
                        ? "text-primary opacity-100"
                        : "opacity-80 hover:opacity-100 hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        location.pathname === item.path
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons - Right */}
        <div className="hidden md:flex items-center justify-end gap-8 shrink-0 flex-1">
          {/* <Link
            to="/login"
            className="text-sm font-black italic uppercase tracking-wider text-white hover:text-primary transition-colors"
          >
            Login
          </Link> */}
          <a
            href="https://raceresults.com.hk/event/446"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block"
          >
            <span className="absolute inset-0 bg-[#2a6bf2] transform -skew-x-12 translate-x-1.5 translate-y-1.5 border border-white/10"></span>
            <span className="relative block bg-[#ff8fa3] transform -skew-x-12 px-8 py-3 hover:-translate-y-0.5 transition-transform border border-white/10">
              <span className="block font-black italic uppercase text-[#0a193c] tracking-widest text-sm">
                Register Now
              </span>
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-16 left-0 w-full bg-background border-b border-white/10 overflow-hidden"
          >
            <nav className="container px-4 py-6 max-h-[80vh] overflow-y-auto">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(item.label)}
                          className="flex items-center justify-between w-full text-lg font-medium py-3 hover:text-primary transition-colors border-b border-white/5"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              activeSubmenu === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeSubmenu === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden bg-white/5 rounded-lg mt-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.path}
                                  className="block px-6 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path!}
                        className="block text-lg font-medium py-3 hover:text-primary transition-colors border-b border-white/5"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 mt-8 pt-4">
                {/* <Link
                  to="/login"
                  className="btn btn-outline text-center w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link> */}
                <a
                  href="https://raceresults.com.hk/event/446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-block"
                >
                  <span className="absolute inset-0 bg-[#2a6bf2] transform -skew-x-12 translate-x-1.5 translate-y-1.5 border border-white/10"></span>
                  <span className="relative block bg-[#ff8fa3] transform -skew-x-12 px-8 py-3 hover:-translate-y-0.5 transition-transform border border-white/10">
                    <span className="block font-black italic uppercase text-[#0a193c] tracking-widest text-sm">
                      Register Now
                    </span>
                  </span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
