import { PlusIcon, MinusIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import "./FAQSection.css";

export const FAQSection = (): JSX.Element => {
  const faqData = [
    {
      id: "item-1",
      question: "Какие задачи возможно решить со мной?",
      answer:
        "🏃🏻‍♂️ Похудеть\n🏋🏻‍♀️ Получить рельеф и развить силу\n💪 Укрепить сердечно-сосудистую систему\n🥑 Скорректировать питание и образ жизни навсегда\n🤰 Восстановиться после родов: похудеть, приобрести легкость и гибкость в теле",
    },
    {
      id: "item-2",
      question: "Кому подойдут мои программы?",
      answer:
        "• Если нет времени на долгие тренировки и постоянные походы в зал\n• Если ты не можешь собраться с силами и начать заниматься\n• Если раньше начинала, но бросала из-за отсутствия мотивации\n• Если чувствуешь усталость, тревожность и стресс и не знаешь, как это изменить\n• Если хочешь заниматься, но не знаешь, с чего начать и как правильно тренироваться\n• Если нужна поддержка и простой план, который реально впишется в твою жизнь\n• Если хочешь заниматься дома или в зале, но тебе нужен гибкий и понятный подход",
    },
    {
      id: "item-3",
      question: "Как проходят тренировки?",
      answer:
        "Все тренировки — онлайн, но это не запись и не групповое занятие.\nЭто формат, где только ты и тренер.\n1 на 1. Без отвлечений. Только твой результат.\n\nТакого на рынке практически нет.\nЯ полностью с тобой на каждом занятии:\n✅ Я всё вижу\n✅ Я контролирую технику\n✅ Я подбираю упражнения именно под тебя\n✅ Я знаю, когда ты можешь больше — и мягко веду туда\n\nЯ много училась и прошла это сама — на своём примере знаю, как восстановить форму быстро и эффективно.\nИ главное — как полюбить спорт без напряга, без стресса, каждый день.",
    },
    {
      id: "item-4",
      question: "Какой минимальный инвентарь?",
      answer:
        "Все занятия можно проводить дома, без сложного инвентаря. На курсе даны список и рекомендации по покупке или бесплатные домашние аналоги.",
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-container">
      <div className="faq-content">
        {/* Header */}
        <header className="faq-header">
          <h2 className="faq-title">
            Часто задаваемые вопросы
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
                    {faq.answer}
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