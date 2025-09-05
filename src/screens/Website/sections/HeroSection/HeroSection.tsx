import React from "react";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

export const HeroSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background">
        <img
          alt="Gym background"
          src="https://c.animaapp.com/mf57cyx5gYVcx1/img/danielle-cerullo-cqfnt66ttzm-unsplash-1.png"
        />
      </div>

      {/* Decorative Light Effects */}
      <div className="hero-lights">
        <div className="hero-lights-container">
          <div className="hero-lights-inner">
            {/* Multiple light beam effects */}
            <div className="absolute w-[628px] h-[958px] top-0 left-[187px]">
              <div className="hero-light-beam hero-light-beam--white" />
              <div className="hero-light-line hero-light-line--white" />
            </div>
            <div className="absolute w-[629px] h-[958px] top-0 left-[38px]">
              <div className="hero-light-beam hero-light-beam--red" />
              <div className="hero-light-line hero-light-line--white-40" />
            </div>
            <div className="hero-light-line hero-light-line--white-70" />
            <div className="absolute w-[625px] h-[957px] top-0 left-[481px]">
              <div className="hero-light-line hero-light-line--white-30" />
              <div className="hero-light-beam hero-light-beam--white-05" />
            </div>
            <div className="absolute w-[626px] h-[958px] top-0 left-[335px]">
              <div className="hero-light-line hero-light-line--white-50" />
              <div className="hero-light-beam hero-light-beam--red-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="hero-content">
        <div className="hero-content-container">
          <div className="hero-text-container">
            <h1 className="hero-title">
              TRANSFORM CHALLENGES INTO TRIUMPHS!
            </h1>
            <p className="hero-description">
              As a passionate personal trainer, I believe in empowering
              individuals to achieve their fitness goals through
              personalized coaching and support.
            </p>
            <button className="hero-button" onClick={handleGetStarted}>
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trainer Image */}
      <img
        className="hero-trainer-image"
        alt="Personal trainer"
        src="/trainer7.png"
        onError={(e) => {
          console.log('Image failed to load, trying alternative path');
          e.currentTarget.src = './trainer7.png';
        }}
      />


      {/* Gradient Overlay */}
      <div className="hero-gradient-overlay" />
      
      {/* Bottom Mask to hide legs */}
      <div className="hero-bottom-mask" />
    </section>
  );
};
