import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { FooterSection } from "./screens/Website/sections/FooterSection/FooterSection";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { QualificationsSection } from "./screens/Website/sections/QualificationsSection/QualificationsSection";
import { TestimonialsSection } from "./screens/Website/sections/TestimonialsSection/TestimonialsSection";
import { AboutMeSection } from "./screens/Website/sections/AboutMeSection/AboutMeSection";

export const App = (): JSX.Element => {
  return (
    <Router>
      <div className="bg-[#1a1a1a] w-full min-h-screen overflow-x-hidden">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route 
              path="/qualifications" 
              element={
                <div className="bg-[#1a1a1a] w-full min-h-screen pt-24">
                  <section className="w-full py-20">
                    <QualificationsSection />
                  </section>
                </div>
              } 
            />
            <Route 
              path="/testimonials" 
              element={
                <div className="bg-[#1a1a1a] w-full min-h-screen pt-24">
                  <section className="w-full py-20">
                    <TestimonialsSection />
                  </section>
                </div>
              } 
            />
            <Route 
              path="/faq" 
              element={
                <div className="bg-[#1a1a1a] w-full min-h-screen pt-24">
                  <section className="w-full py-20">
                    <AboutMeSection />
                  </section>
                </div>
              } 
            />
          </Routes>
        </main>

        <FooterSection />
      </div>
    </Router>
  );
};
