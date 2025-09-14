import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./TestimonialsSection.css";

const getTestimonialData = (t: any) => [
  {
    quote: t("testimonials.quote1"),
    author: "",
    images: [
      {
        src: "/beforeafter1.jpeg",
        alt: t("testimonials.imageAlt1"),
        className: "rounded-[10px_0px_0px_10px]",
      },
    ],
  },
  {
    quote: t("testimonials.quote2"),
    author: "",
    images: [
      {
        src: "/beforeafter2.jpeg",
        alt: t("testimonials.imageAlt2"),
        className: "rounded-[10px_0px_0px_10px]",
      },
    ],
  },
  {
    quote: t("testimonials.quote4"),
    author: "",
    images: [
      {
        src: "/beforeafter4.jpeg",
        alt: t("testimonials.imageAlt4"),
        className: "rounded-[10px_0px_0px_10px]",
      },
    ],
  },
  {
    quote: t("testimonials.quote5"),
    author: "",
    images: [
      {
        src: "/beforeafter5.jpeg",
        alt: t("testimonials.imageAlt5"),
        className: "rounded-[10px_0px_0px_10px]",
      },
    ],
  },
  {
    quote: t("testimonials.quote6"),
    author: "",
    images: [
      {
        src: "/beforeafter6.jpeg",
        alt: t("testimonials.imageAlt6"),
        className: "rounded-[10px_0px_0px_10px]",
      },
    ],
  },
  {
    quote: t("testimonials.quote7"),
    author: "",
    images: [
      {
        src: "/beforeafter7.jpeg",
        alt: t("testimonials.imageAlt7"),
        className: "rounded-[10px_0px_0px_10px]",
      },
    ],
  },
  {
    quote: t("testimonials.quote8"),
    author: "",
    images: [
      {
        src: "/beforeafter8.jpeg",
        alt: t("testimonials.imageAlt8"),
        className: "rounded-[10px_0px_0px_10px]",
      },
    ],
  },
  {
    quote: t("testimonials.quote9"),
    author: "",
    images: [
      {
        src: "/beforeafter9.jpeg",
        alt: t("testimonials.imageAlt9"),
        className: "rounded-[10px_0px_0px_10px]",
      },
    ],
  },
  {
    quote: t("testimonials.quote10"),
    author: "",
    images: [
      {
        src: "/beforeafter10.jpeg",
        alt: t("testimonials.imageAlt10"),
        className: "rounded-[10px_0px_0px_10px]",
      },
    ],
  },
  {
    quote: t("testimonials.quote11"),
    author: "",
    images: [
      {
        src: "/beforeafter11.jpeg",
        alt: t("testimonials.imageAlt11"),
        className: "rounded-[10px_0px_0px_10px]",
      },
    ],
  },
  {
    quote: t("testimonials.quote12"),
    author: "",
    images: [
      {
        src: "/beforeafter12.jpeg",
        alt: t("testimonials.imageAlt12"),
        className: "rounded-[10px_0px_0px_10px]",
      },
    ],
  },
];

interface TestimonialsSectionProps {
  showCommentsCarousel?: boolean;
}

export const TestimonialsSection = ({ showCommentsCarousel = false }: TestimonialsSectionProps): JSX.Element => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonialData = getTestimonialData(t);

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
            {t("testimonials.title")}
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
                className={`testimonials-image ${["/beforeafter4.jpeg", "/beforeafter5.jpeg", "/beforeafter8.jpeg", "/beforeafter9.jpeg", "/beforeafter10.jpeg", "/beforeafter11.jpeg", "/beforeafter12.jpeg"].includes(currentData.images?.[0]?.src || "") ? "testimonials-image--contain" : ""}`}
                alt={currentData.images?.[0]?.alt || t("testimonials.defaultImageAlt")}
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
                  aria-label={t("testimonials.goToTestimonial", { number: index + 1 })}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="testimonials-arrows">
              <Button
                className="testimonials-arrow-button"
                onClick={prevTestimonial}
                aria-label={t("testimonials.previousTestimonial")}
              >
                <ChevronLeft className="testimonials-arrow-icon" />
              </Button>

              <Button
                className="testimonials-arrow-button"
                onClick={nextTestimonial}
                aria-label={t("testimonials.nextTestimonial")}
              >
                <ChevronRight className="testimonials-arrow-icon" />
              </Button>
            </div>
          </div>
        </div>

        {/* Comments Carousel - Only show on testimonials page */}
        {showCommentsCarousel && (
          <div className="comments-carousel">
            <div className="comments-carousel-track">
              <div className="comments-carousel-item">
                <img src="/comment1.jpeg" alt="Comment 1" className="comments-image" />
              </div>
              <div className="comments-carousel-item">
                <img src="/comment2.jpeg" alt="Comment 2" className="comments-image" />
              </div>
              <div className="comments-carousel-item">
                <img src="/comment3.jpeg" alt="Comment 3" className="comments-image" />
              </div>
              <div className="comments-carousel-item">
                <img src="/comment4.jpeg" alt="Comment 4" className="comments-image" />
              </div>
              <div className="comments-carousel-item">
                <video 
                  src="/comment5.mp4" 
                  className="comments-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="comments-carousel-item">
                <img src="/comment1.jpeg" alt="Comment 1" className="comments-image" />
              </div>
              <div className="comments-carousel-item">
                <img src="/comment2.jpeg" alt="Comment 2" className="comments-image" />
              </div>
              <div className="comments-carousel-item">
                <img src="/comment3.jpeg" alt="Comment 3" className="comments-image" />
              </div>
              <div className="comments-carousel-item">
                <img src="/comment4.jpeg" alt="Comment 4" className="comments-image" />
              </div>
              <div className="comments-carousel-item">
                <video 
                  src="/comment5.mp4" 
                  className="comments-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
              </div>
            </div>
          </div>
        )}

        {/* Decorative element */}
        <img
          className="testimonials-decorative"
          alt={t("testimonials.decorativeAlt")}
          src="https://c.animaapp.com/mf57cyx5gYVcx1/img/group-31.png"
        />
      </div>
    </div>
  );
};
