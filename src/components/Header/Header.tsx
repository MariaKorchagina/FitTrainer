import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: "Главная", path: "/", active: location.pathname === "/" },
    { label: "Обо мне", path: "/about", active: location.pathname === "/about" },
    { label: "Сертификаты", path: "/qualifications", active: location.pathname === "/qualifications" },
    { label: "Программы", path: "/services", active: location.pathname === "/services" },
    { label: "Отзывы", path: "/testimonials", active: location.pathname === "/testimonials" },
    { label: "Вопросы", path: "/faq", active: location.pathname === "/faq" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <span className="logo" aria-hidden>
            Личный тренер
          </span>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigationItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.path}
                className={`nav-link ${item.active ? 'nav-link--active' : 'nav-link--inactive'}`}
              >
                {item.label}
              </Link>
            ))}

            <Link 
              to="/contact"
              className="nav-button"
            >
              <span>Начни сейчас</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <nav className="mobile-nav-content">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`mobile-nav-link ${item.active ? 'mobile-nav-link--active' : 'mobile-nav-link--inactive'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="mobile-nav-button">
                <span>Начни сейчас</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
