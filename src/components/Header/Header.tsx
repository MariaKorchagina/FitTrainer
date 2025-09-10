import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import "./Header.css";

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navigationItems = [
    { label: t("navigation.home"), path: "/", active: location.pathname === "/" },
    { label: t("navigation.about"), path: "/about", active: location.pathname === "/about" },
    { label: t("navigation.certificates"), path: "/qualifications", active: location.pathname === "/qualifications" },
    { label: t("navigation.programs"), path: "/services", active: location.pathname === "/services" },
    { label: t("navigation.testimonials"), path: "/testimonials", active: location.pathname === "/testimonials" },
    { label: t("navigation.faq"), path: "/faq", active: location.pathname === "/faq" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <span className="logo" aria-hidden>
            {t("hero.title")}
          </span>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigationItems.map((item) => (
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
              <span>{t("navigation.contact")}</span>
            </Link>
            <LanguageSwitcher />
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
              <Link to="/contact" className="mobile-nav-button" onClick={() => setIsMenuOpen(false)}>
                <span>{t("navigation.contact")}</span>
              </Link>
            </nav>
            <div className="mobile-language-switcher">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
