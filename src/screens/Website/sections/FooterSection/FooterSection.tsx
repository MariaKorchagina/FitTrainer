import { Button } from "../../../../components/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./FooterSection.css";

export const FooterSection = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    window.open('https://wa.me/972549961795', '_blank');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content-wrap">
          <div className="footer-bg-blur" />

          <div className="footer-row">
            {/* Image Section - trainer8 on the left */}
            <div className="footer-image-wrap">
              <img
                className="footer-image"
                alt="Лилия — тренер"
                src="/trainer8.png"
              />
            </div>

            {/* Content Section restored */}
            <div className="footer-text">
              <div className="footer-text-inner">
                <h2 className="footer-title">{t("footer.title")}</h2>

                <p className="footer-description footer-description-mobile">
                  {t("footer.description")}
                </p>
              </div>

              <div className="footer-button-wrap">
                <Button className="footer-button" onClick={handleGetStarted}>
                  <span>{t("footer.whatsapp")}</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="footer-gradient" />
        </div>
      </div>

      {/* Site footer with 3 columns */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          {/* Column 1 */}
          <div className="footer-col">
            <h3 className="footer-col-title">{t("footer.brandTitle")}</h3>
            <p className="footer-col-text">
              {t("footer.brandDescription")}
            </p>
          </div>

          {/* Column 2 (Menu) - middle */}
          <div className="footer-col footer-col--menu">
            <h3 className="footer-col-title">{t("footer.menu")}</h3>
            <nav className="footer-menu">
              <a className="footer-menu-link" href="/">{t("navigation.home")}</a>
              <a className="footer-menu-link" href="/services">{t("navigation.programs")}</a>
              <a className="footer-menu-link" href="/about">{t("navigation.about")}</a>
              <a className="footer-menu-link" href="/contact">{t("footer.contact")}</a>
            </nav>
          </div>

          {/* Column 3 (Contact) - right */}
          <div className="footer-col footer-col--contact">
            <h3 className="footer-col-title" onClick={handleContactClick} style={{ cursor: 'pointer' }}>
              {t("footer.contact")}
            </h3>
            <div className="footer-socials">
              <a className="footer-social" href="https://wa.me/972549961795" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg className="footer-social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.93 11.93 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.54 4.1 1.57 5.89L0 24l6.43-1.66a11.78 11.78 0 0 0 5.64 1.44h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.42-8.43ZM12.08 21.3h-.01a9.77 9.77 0 0 1-4.98-1.36l-.36-.21-3.82.98 1.02-3.72-.24-.38a9.78 9.78 0 0 1-1.5-5.15c0-5.4 4.39-9.79 9.8-9.79 2.61 0 5.06 1.02 6.9 2.87a9.68 9.68 0 0 1 2.86 6.92c0 5.4-4.39 9.79-9.8 9.79Zm5.57-7.28c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.92 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.53-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.15 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" fill="white"/></svg>
              </a>
              <a className="footer-social" href="https://t.me/+79152994659" target="_blank" rel="noreferrer" aria-label="Telegram">
                <svg className="footer-social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M9.04 15.54 8.9 19.4c.4 0 .58-.18.79-.4l1.9-1.83 3.94 2.9c.72.4 1.24.18 1.44-.66l2.61-12.26h.01c.23-1.06-.38-1.47-1.08-1.21L3.2 10.2c-1.03.4-1.01.98-.18 1.24l4.64 1.45 10.78-6.8c.51-.33.98-.15.6.18L9.04 15.54Z"/></svg>
              </a>
              <a className="footer-social" href="https://instagram.com/lili_fit_zone" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg className="footer-social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.49 1.38.91.42.42.7.82.91 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22a3.74 3.74 0 0 1-.91 1.38 3.74 3.74 0 0 1-1.38.91c-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.74 3.74 0 0 1-1.38-.91 3.74 3.74 0 0 1-.91-1.38c-.16-.42-.36-1.05-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.49-.96.91-1.38.42-.42.82-.7 1.38-.91.42-.16 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.52.01-4.76.07-.98.04-1.51.21-1.87.35-.47.18-.8.39-1.15.73-.34.35-.55.68-.73 1.15-.14.36-.31.89-.35 1.87-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04.98.21 1.51.35 1.87.18.47.39.8.73 1.15.35.34.68.55 1.15.73.36.14.89.31 1.87.35 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.98-.04 1.51-.21 1.87-.35.47-.18.8-.39 1.15-.73.34-.35.55-.68.73-1.15.14-.36.31-.89.35-1.87.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.98-.21-1.51-.35-1.87a3.12 3.12 0 0 0-.73-1.15c-.35-.34-.68-.55-1.15-.73-.36-.14-.89-.31-1.87-.35-1.24-.06-1.61-.07-4.76-.07Zm0 3.65a5.57 5.57 0 1 1 0 11.14 5.57 5.57 0 0 1 0-11.14Zm0 1.62a3.95 3.95 0 1 0 0 7.9 3.95 3.95 0 0 0 0-7.9Zm5.65-2.25a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
