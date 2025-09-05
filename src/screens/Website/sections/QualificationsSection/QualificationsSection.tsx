import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const QualificationsSection = (): JSX.Element => {
  const certifications = [
    { id: 1, title: "CPT" },
    { id: 2, title: "CFT" },
    { id: 3, title: "CN" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Content Section */}
        <div className="flex flex-col items-start gap-[30px] flex-1 translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="flex flex-col items-start gap-1.5">
            <h2 className="[font-family:'Anton',Helvetica] font-normal text-white text-4xl md:text-6xl tracking-[-0.60px] leading-[1.2] mb-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              QUALIFICATIONS
            </h2>

            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-xl md:text-2xl tracking-[0] leading-[1.3] max-w-[477px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              I'm a certified fitness trainer with over 10 years of
              experience, specializing in personal training and nutrition.
              I'm passionate about helping individuals transform their
              lives and aim to create a welcoming environment where everyone can
              thrive, regardless of fitness level.
            </p>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap gap-4 items-start translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            {certifications.map((cert, index) => (
              <Card
                key={cert.id}
                className="bg-[#1f1f1f] border-none rounded-[10px] shadow-[0px_20px_40px_#0000001a] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0 hover:scale-105 transition-all duration-300"
                style={
                  {
                    "--animation-delay": `${800 + index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="px-6 py-2.5 flex flex-col items-center justify-center">
                  <div className="w-[145px] h-[52px] [font-family:'Anton',Helvetica] font-normal text-[#ff2332] text-[50px] text-center tracking-[0] leading-[0.1px] flex items-center justify-center">
                    {cert.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-[544px] h-[452px] opacity-70 bg-[url(https://c.animaapp.com/mf57cyx5gYVcx1/img/couple-training-together-gym.png)] bg-cover bg-center rounded-lg flex-shrink-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1100ms] hover:opacity-90 transition-opacity duration-300" />
      </div>
    </div>
  );
};
