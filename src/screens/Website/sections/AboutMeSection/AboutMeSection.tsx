import { PlusIcon, MinusIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import "./AboutMeSection.css";

export const AboutMeSection = (): JSX.Element => {
  const faqData = [
    {
      id: "item-1",
      question: "How often should I exercise?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Velit gravida malesuada quis ullamcorper. Lectus accumsan turpis quisque tempor nisi. Eget morbi vitae neque adipiscing ridiculus feugiat. Lectus ac eleifend iaculis magna.",
    },
    {
      id: "item-2",
      question: "What's the best workout routine for weight loss?",
      answer:
        "A combination of cardiovascular exercise and strength training works best for weight loss. I recommend 3-4 cardio sessions and 2-3 strength training sessions per week, along with a balanced nutrition plan.",
    },
    {
      id: "item-3",
      question: "What should I eat before and after a workout?",
      answer:
        "Before a workout, eat a light snack with carbs and protein 30-60 minutes prior. After your workout, consume protein and carbs within 30 minutes to aid recovery and muscle building.",
    },
    {
      id: "item-4",
      question: "How can I build muscle effectively?",
      answer:
        "Focus on progressive overload, compound movements, adequate protein intake (0.8-1g per lb of body weight), proper rest between sessions, and consistency in your training routine.",
    },
  ];

  return (
    <div className="about-me-container">
      <div className="about-me-content">
        {/* Header */}
        <header className="about-me-header">
          <h2 className="about-me-title">
            COMMONLY ASKED QUESTIONS
          </h2>

          <p className="about-me-subtitle">
            I am here to help!
          </p>
        </header>

        {/* FAQ Accordion */}
        <div className="faq-accordion">
          <Accordion type="single" collapsible className="faq-accordion-content">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="faq-item"
                style={
                  {
                    "--animation-delay": `${400 + index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <AccordionTrigger className="faq-trigger">
                  <div className="faq-question">
                    <div className="faq-question-text">
                      {faq.question}
                    </div>
                  </div>
                  <PlusIcon className="faq-icon" />
                </AccordionTrigger>
                
                <AccordionContent className="faq-content">
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
