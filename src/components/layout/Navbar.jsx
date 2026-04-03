import { useState, useEffect } from "react";
import { navLinks } from "../../data/data";
import useActiveSection from "../../hooks/useActiveSection";
import BtnPrimary from "../ui/BtnPrimary";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleNav = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-accent/20 ${
          scrolled ? "shadow-lg shadow-accent/5" : "bg-[#0A1628]"
        }`}
        style={
          scrolled
            ? {
                WebkitBackdropFilter: "blur(20px)",
                backdropFilter: "blur(20px)",
                background: "rgba(10, 22, 40, 0.85)",
              }
            : {}
        }>
        <nav className="relative max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav("home");
            }}
            className="text-xl font-bold no-underline">
            <span className="text-white">Husnain </span>
            <span className="text-accent">Ahmad</span>
          </a>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-7 list-none">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.id);
                  }}
                  className={`font-semibold text-sm pb-1 border-b-2 transition-all duration-200 ${
                    activeSection === link.id
                      ? "text-accent border-accent"
                      : "text-[#A8B8CC] border-transparent hover:text-accent"
                  }`}>
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <BtnPrimary href="#contact" onClick={() => handleNav("contact")}>
                Hire Me
              </BtnPrimary>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}>
            <i
              className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            />
          </button>

          {/* Mobile Dropdown */}
          <div
            className={`absolute top-full left-0 w-full flex justify-center z-50 transition-all duration-300 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}>
            <div
              className="mt-3 w-[90%] max-w-sm rounded-xl border border-accent/50 shadow-xl py-4"
              style={{
                WebkitBackdropFilter: "blur(20px)",
                backdropFilter: "blur(20px)",
                background: "rgba(13, 31, 56, 0.95)",
              }}>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.id);
                  }}
                  className={`block text-center py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    activeSection === link.id
                      ? "text-accent bg-accent/10 active:text-white"
                      : "text-[#A8B8CC] hover:text-accent  hover:bg-accent/5 active:bg-accent/80 active:text-white"
                  }`}>
                  {link.label}
                </a>
              ))}

              <div className="mt-3 flex justify-center">
                <BtnPrimary
                  href="#contact"
                  onClick={() => handleNav("contact")}>
                  Hire Me
                </BtnPrimary>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
