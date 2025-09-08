import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react";

export const NavigationSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", active: true, href: "#home" },
    { label: "About", active: false, href: "#about" },
    { label: "Qualifications", active: false, href: "#qualifications" },
    { label: "Services", active: false, href: "#services" },
    { label: "Testimonials", active: false, href: "#testimonials" },
    { label: "F&Q", active: false, href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1f1f1f]/95 backdrop-blur-[20px] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-[180px] py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] font-bold text-base tracking-[0.16px] leading-6 [font-family:'Outfit',Helvetica] text-white whitespace-nowrap">
            Personal Trainer
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-[30px]">
            {navigationItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${200 + index * 100}ms] relative [font-family:'Outfit',Helvetica] text-base tracking-[0.16px] leading-6 whitespace-nowrap cursor-pointer hover:opacity-100 transition-all duration-300 ${
                  item.active
                    ? "font-bold text-[#ff2332]"
                    : "font-normal text-white opacity-70 hover:text-[#ff2332]"
                }`}
              >
                {item.label}
                {item.active && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff2332] rounded-full" />
                )}
              </a>
            ))}

            <Button className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#ff2332] hover:bg-[#ff2332]/90 rounded-xl h-auto transition-all duration-300 hover:scale-105">
              <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-base tracking-[0.16px] leading-6 whitespace-nowrap">
                Начни сейчас
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#ff2332] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`[font-family:'Outfit',Helvetica] text-base tracking-[0.16px] leading-6 cursor-pointer hover:opacity-100 transition-all duration-300 ${
                    item.active
                      ? "font-bold text-[#ff2332]"
                      : "font-normal text-white opacity-70 hover:text-[#ff2332]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-4 w-full bg-[#ff2332] hover:bg-[#ff2332]/90 rounded-xl">
                <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-base">
                  Начни сейчас
                </span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
