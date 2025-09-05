import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialData = [
  {
    quote:
      "I've never felt stronger! John pushed me to my limits while providing the support I needed to succeed. Highly recommended!",
    author: "Daniele Debbians",
    images: [
      {
        src: "https://c.animaapp.com/mf57cyx5gYVcx1/img/danilo-calic-dlgfzg0mvau-unsplash.png",
        alt: "Client testimonial",
        className: "rounded-[10px_0px_0px_10px]",
      },
      {
        src: "https://c.animaapp.com/mf57cyx5gYVcx1/img/alexander-jawfox-kl2t5u6gkm0-unsplash.png",
        alt: "Client testimonial",
        className: "rounded-[0px_10px_10px_0px]",
      },
    ],
  },
  {
    quote:
      "John's personalized approach helped me achieve my fitness goals faster than I ever imagined. The results speak for themselves!",
    author: "Sarah Johnson",
    images: [
      {
        src: "https://c.animaapp.com/mf57cyx5gYVcx1/img/danilo-calic-dlgfzg0mvau-unsplash.png",
        alt: "Client testimonial",
        className: "rounded-[10px_0px_0px_10px]",
      },
      {
        src: "https://c.animaapp.com/mf57cyx5gYVcx1/img/alexander-jawfox-kl2t5u6gkm0-unsplash.png",
        alt: "Client testimonial",
        className: "rounded-[0px_10px_10px_0px]",
      },
    ],
  },
  {
    quote:
      "Professional, knowledgeable, and motivating. John transformed not just my body, but my entire mindset towards fitness.",
    author: "Mike Rodriguez",
    images: [
      {
        src: "https://c.animaapp.com/mf57cyx5gYVcx1/img/danilo-calic-dlgfzg0mvau-unsplash.png",
        alt: "Client testimonial",
        className: "rounded-[10px_0px_0px_10px]",
      },
      {
        src: "https://c.animaapp.com/mf57cyx5gYVcx1/img/alexander-jawfox-kl2t5u6gkm0-unsplash.png",
        alt: "Client testimonial",
        className: "rounded-[0px_10px_10px_0px]",
      },
    ],
  },
];

export const TestimonialsSection = (): JSX.Element => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  const currentData = testimonialData[currentTestimonial];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative">
        {/* Background blur effect */}
        <div className="w-[537px] h-[537px] rounded-[268.5px] absolute top-[54px] left-[43px] bg-[#ff2332] blur-[200px] opacity-20 pointer-events-none" />

        <div className="relative">
          {/* Main heading */}
          <h1 className="[font-family:'Anton',Helvetica] font-normal text-white text-4xl md:text-6xl tracking-[-0.60px] leading-[1.2] mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            HEAR IT FROM THEM
          </h1>

          {/* Main content container */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[43px] mb-16">
            {/* Testimonial card */}
            <Card className="w-full max-w-[556px] bg-[#1f1f1f] rounded-[20px] border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <CardContent className="flex flex-col justify-center gap-8 p-10">
                <blockquote className="[font-family:'Outfit',Helvetica] font-normal text-white text-2xl md:text-[28px] tracking-[0] leading-[1.3]">
                  "{currentData.quote}"
                </blockquote>

                <div className="inline-flex items-center gap-4">
                  <cite className="[font-family:'Outfit',Helvetica] font-medium text-[#909090] text-xl tracking-[0.20px] leading-6 not-italic">
                    {currentData.author}
                  </cite>
                </div>
              </CardContent>
            </Card>

            {/* Images container */}
            <div className="relative w-full max-w-[312px] h-[386px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              {currentData.images.map((image, index) => (
                <img
                  key={index}
                  className={`absolute w-[156px] h-[386px] top-0 ${index === 0 ? "left-0" : "left-[156px]"} ${image.className} backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] object-cover`}
                  alt={image.alt}
                  src={image.src}
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8">
            {/* Pagination dots */}
            <div className="flex gap-[6px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  className={`w-[11px] h-[11px] transition-colors hover:opacity-80 ${
                    index === currentTestimonial ? "bg-[#ff2332]" : "bg-[#909090]"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 p-0 hover:bg-[#ff2332]/20 transition-all duration-300 hover:scale-110"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 p-0 hover:bg-[#ff2332]/20 transition-all duration-300 hover:scale-110"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <img
          className="absolute w-[77px] h-[73px] top-40 left-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
          alt="Decorative element"
          src="https://c.animaapp.com/mf57cyx5gYVcx1/img/group-31.png"
        />
      </div>
    </div>
  );
};
