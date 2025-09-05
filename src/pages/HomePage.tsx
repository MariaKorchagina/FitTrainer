import React from "react";
import { AboutMeSection } from "../screens/Website/sections/AboutMeSection/AboutMeSection";
import { CallToActionSection } from "../screens/Website/sections/CallToActionSection/CallToActionSection";
import { FAQSection } from "../screens/Website/sections/FAQSection/FAQSection";
import { HeroSection } from "../screens/Website/sections/HeroSection/HeroSection";
import { QualificationsSection } from "../screens/Website/sections/QualificationsSection/QualificationsSection";
import { TestimonialsSection } from "../screens/Website/sections/TestimonialsSection/TestimonialsSection";
import { TrainingProgramsSection } from "../screens/Website/sections/TrainingProgramsSection/TrainingProgramsSection";
import "./HomePage.css";

export const HomePage = (): JSX.Element => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection />
      

      {/* Training Programs Section */}
      <section id="services" className="training-programs-section">
        <TrainingProgramsSection />
      </section>

      {/* Call To Action Section */}
      <section className="call-to-action-section">
        <CallToActionSection />
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="qualifications-section">
        <QualificationsSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <TestimonialsSection />
      </section>

      {/* About Me Section */}
      <section id="about" className="about-me-section">
        <AboutMeSection />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <FAQSection />
      </section>
    </div>
  );
};
