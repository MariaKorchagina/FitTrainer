import React from "react";
import { Button } from "../../../../components/ui/button";

export const FAQSection = (): JSX.Element => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative">
        {/* Background blur effect */}
        <div className="w-[545px] h-[545px] rounded-[272.5px] absolute top-[27px] left-[500px] bg-[#ff2332] blur-[200px] opacity-20 pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[84px] relative">
          {/* Image Section */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] flex-shrink-0">
            <img
              className="w-full max-w-[466px] h-auto object-cover rounded-lg"
              alt="Couple training together"
              src="https://c.animaapp.com/mf57cyx5gYVcx1/img/couple-training-together-gym--1--1.png"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-start gap-[70px] flex-1 max-w-[495px]">
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] [font-family:'Anton',Helvetica] font-normal text-white text-4xl md:text-6xl tracking-[-0.60px] leading-[1.2]">
                YOU WANT TO TRAIN WITH ME?
              </h2>

              <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] [font-family:'Outfit',Helvetica] font-normal text-[#909090] text-xl md:text-2xl tracking-[0] leading-[1.3] max-w-[456px]">
                Feel free to contact me if you want to train with me.
              </p>
            </div>

            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <Button className="h-[74px] px-10 py-0 bg-[#ff2332] hover:bg-[#e01e2b] rounded-2xl transition-all duration-300 hover:scale-105">
                <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-2xl tracking-[0.24px] leading-5 whitespace-nowrap">
                  Get Started
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute w-[471px] h-[162px] top-[440px] left-[3px] bg-[linear-gradient(180deg,rgba(28,25,25,0)_0%,rgba(30,25,26,1)_100%)] pointer-events-none" />
      </div>
    </div>
  );
};
