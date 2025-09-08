import { PlusIcon, MinusIcon, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { useTranslation } from "react-i18next";
import "./FAQSection.css";

export const FAQSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  const faqData = [
    {
      id: "item-1",
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      id: "item-2",
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      id: "item-3",
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      id: "item-4",
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-container">
      <div className="faq-content">
        {/* Header */}
        <header className="faq-header">
          <h2 className="faq-title">
            {t("faq.title")}
          </h2>
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
                  <PlusIcon className="faq-icon faq-icon-plus" />
                  <MinusIcon className="faq-icon faq-icon-minus" />
                </AccordionTrigger>
                
                <AccordionContent className="faq-content">
                  <div className="faq-answer">
                    {faq.answer.split('\n').map((line, lineIndex) => {
                      // Check if line starts with bullet point or is a list item
                      if (line.trim().startsWith('•') || (line.trim().length > 0 && !line.trim().startsWith('Все') && !line.trim().startsWith('Это') && !line.trim().startsWith('1') && !line.trim().startsWith('2') && !line.trim().startsWith('3') && !line.trim().startsWith('4') && !line.trim().startsWith('5') && !line.trim().startsWith('6') && !line.trim().startsWith('7') && !line.trim().startsWith('8') && !line.trim().startsWith('9'))) {
                        return (
                          <div key={lineIndex} className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span>{line.trim()}</span>
                          </div>
                        );
                      }
                      return (
                        <div key={lineIndex} className="mb-2">
                          {line}
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      </div>
    </div>
  );
};