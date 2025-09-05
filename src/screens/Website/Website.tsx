import React from "react";
import { AboutMeSection } from "./sections/AboutMeSection/AboutMeSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { QualificationsSection } from "./sections/QualificationsSection/QualificationsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { TrainingProgramsSection } from "./sections/TrainingProgramsSection/TrainingProgramsSection";

export const Website = (): JSX.Element => {
  return (
    <div className="bg-[#1a1a1a] w-full min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Logo Section */}
      <section className="w-full h-[200px] bg-[#1a1a1a] flex items-center justify-center">
        <img
          className="w-full h-[200px] object-contain translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]"
          alt="Logo"
          src="https://c.animaapp.com/mf57cyx5gYVcx1/img/logo---3--.svg"
        />
      </section>

      {/* Navigation Section */}
      <NavigationSection />

      {/* Training Programs Section */}
      <section className="w-full py-20 bg-[#1a1a1a]">
        <TrainingProgramsSection />
      </section>

      {/* Call To Action Section */}
      <section className="w-full py-20 bg-[#1a1a1a]">
        <CallToActionSection />
      </section>

      {/* Qualifications Section */}
      <section className="w-full bg-[#1a1a1a]">
        <QualificationsSection />
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-[#1a1a1a]">
        <TestimonialsSection />
      </section>

      {/* About Me Section */}
      <section className="w-full py-20 bg-[#1a1a1a]">
        <AboutMeSection />
      </section>


      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};
