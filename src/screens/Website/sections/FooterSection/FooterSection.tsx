import React from "react";
import { Button } from "../../../../components/ui/button";
import "./FooterSection.css";

export const FooterSection = (): JSX.Element => {
  const handleGetStarted = () => {
    window.open('https://wa.me/972549961795', '_blank');
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
                <h2 className="footer-title">Не знаете с чего начать?</h2>

                <p className="footer-description">
                  Напишите мне в WhatsApp — помогу выбрать программу и ответить на все ваши вопросы.
                </p>
              </div>

              <div className="footer-button-wrap">
                <Button className="footer-button" onClick={handleGetStarted}>
                  <span>Написать в WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="footer-gradient" />
        </div>
      </div>
    </div>
  );
};
