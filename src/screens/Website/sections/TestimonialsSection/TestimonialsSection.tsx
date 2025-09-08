import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./TestimonialsSection.css";

const testimonialData = [
  {
    quote:
      "«Я никогда не чувствовала себя такой сильной! Лилия бережно, но требовательно вела меня, объясняла технику и поддерживала на каждом шаге. Минус 7 кг и совершенно иное ощущение тела — рекомендую!»",
    author: "",
    images: [
      {
        src: "/beforeafter1.jpeg",
        alt: "Before/After 1",
        className: "rounded-[10px_0px_0px_10px]",
      },
      {
        src: "/beforeafter2.jpeg",
        alt: "Before/After 2",
        className: "rounded-[0px_10px_10px_0px]",
      },
    ],
  },
  {
    quote:
      "«Занятия 1 на 1 с Лилией — это то, чего мне не хватало. Никаких сомнений и хаоса: чёткий план, внимание к технике и поддержка на каждом шаге. Минус 6 кг за месяц и ощущение силы и контроля над телом — я в восторге!»",
    author: "",
    images: [
      {
        src: "/beforeafter3.jpeg",
        alt: "Before/After 3",
        className: "rounded-[10px_0px_0px_10px]",
      },
      {
        src: "/beforeafter4.jpeg",
        alt: "Before/After 4",
        className: "rounded-[0px_10px_10px_0px]",
      },
    ],
  },
  {
    quote:
      "«Через месяц занятий с Лилией ушла тяжесть в теле, появился тонус и энергия. Упражнения понятные, техника под контролем — минус 5 см в талии и уверенность каждый день!»",
    author: "",
    images: [
      {
        src: "/beforeafter5.jpeg",
        alt: "Before/After 5",
        className: "rounded-[10px_0px_0px_10px]",
      },
      {
        src: "/beforeafter6.jpeg",
        alt: "Before/After 6",
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
    <div className="testimonials-container">
      <div className="testimonials-content">
        {/* Background blur effect */}
        <div className="testimonials-background-blur" />

        <div className="testimonials-main">
          {/* Main heading */}
          <h1 className="testimonials-title">
            Отзывы участниц
          </h1>

          {/* Main content container */}
          <div className="testimonials-main-content">
            {/* Testimonial card */}
            <Card className="testimonials-card">
              <CardContent className="testimonials-card-content">
                <blockquote className="testimonials-quote">
                  "{currentData.quote}"
                </blockquote>

                {currentData.author && (
                  <div className="testimonials-author">
                    <cite className="testimonials-author-name">
                      {currentData.author}
                    </cite>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Images container */}
            <div className="testimonials-images-container">
              <img
                className={`testimonials-image ${["/beforeafter3.jpeg", "/beforeafter5.jpeg"].includes(currentData.images?.[0]?.src || "") ? "testimonials-image--contain" : ""}`}
                alt={currentData.images?.[0]?.alt || "Client testimonial"}
                src={currentData.images?.[0]?.src || "/beforeafter1.jpeg"}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="testimonials-navigation">
            {/* Pagination dots */}
            <div className="testimonials-pagination">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials-dot ${
                    index === currentTestimonial ? "testimonials-dot--active" : "testimonials-dot--inactive"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="testimonials-arrows">
              <Button
                className="testimonials-arrow-button"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="testimonials-arrow-icon" />
              </Button>

              <Button
                className="testimonials-arrow-button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="testimonials-arrow-icon" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <img
          className="testimonials-decorative"
          alt="Decorative element"
          src="https://c.animaapp.com/mf57cyx5gYVcx1/img/group-31.png"
        />
      </div>
    </div>
  );
};
