import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logoLight from "../assets/logo-light.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { text: "Accueil", type: "link", to: "/" },
    { text: "Consultation Gratuite", type: "link", to: "/consultation" },
    { text: "Votre Dossier", type: "link", to: "/dossier" },
    { text: "Création CV", type: "link", to: "/cv" },
    { text: "A propos de nous", type: "scroll", to: "a-propos-de-nous" },
    { text: "Notre service", type: "scroll", to: "notre-service" },
    { text: "Contact", type: "scroll", to: "contact" },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const linkClasses = `px-3 py-2 text-md font-medium cursor-pointer transition duration-200 hover:scale-105`;
  const activeColor = isScrolled ? "text-blue-600" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={isScrolled ? logo : logoLight}
              alt="Logo"
              width={120}
              className="transition duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {links.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.text}
                  to={item.to}
                  className={`${linkClasses} ${activeColor}`}
                >
                  {item.text}
                </Link>
              ) : (
                <button
                  key={item.text}
                  onClick={() => handleScrollTo(item.to)}
                  className={`${linkClasses} ${activeColor}`}
                >
                  {item.text}
                </button>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Language */}
            <button
              className={`hidden md:block px-4 py-1.5 rounded-full border transition ${
                isScrolled
                  ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                  : "bg-white text-blue-600 border-white hover:bg-gray-100"
              }`}
            >
              FR
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={`md:hidden p-2 rounded-md transition ${
                isScrolled ? "text-blue-600" : "text-white"
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-[80px] left-0 w-full bg-white shadow-md transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col px-4 py-4 space-y-2">
          {links.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.text}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg"
              >
                {item.text}
              </Link>
            ) : (
              <button
                key={item.text}
                onClick={() => handleScrollTo(item.to)}
                className="text-gray-700 hover:text-blue-600 text-left px-3 py-2 rounded-lg"
              >
                {item.text}
              </button>
            )
          )}
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            FR
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
