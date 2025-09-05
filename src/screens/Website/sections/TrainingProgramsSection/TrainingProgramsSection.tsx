import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useNavigate } from "react-router-dom";
import "./TrainingProgramsSection.css";

const trainingPrograms = [
  {
    title: "Сушка PRO",
    price: "580₪ → 405₪\n(скидка 30%)",
    priceColor: "white",
    description: "Быстрый результат - жир уходит, тело в тонусе",
    details: "Идеально для тех, кому нужно сжечь максимум за короткий срок",
    featured: false,
    type: "personal",
  },
  {
    title: "Сила и Тонус",
    price: "600₪ → 420₪\n(скидка 30%)",
    priceColor: "red",
    description: "Упругая фигура без перегрузки - через пилатес",
    details: "Женственная сила, гибкость и легкость в теле",
    featured: true,
    type: "personal-diet",
  },
  {
    title: "Стальной пресс",
    price: "550₪ → 385₪\n(скидка 30%)",
    priceColor: "white",
    description: "Глубокие мышцы + идеальная техника = рельеф",
    details: "Для тех, кто хочет не просто \"кубики\", а контроль и уверенность",
    featured: false,
    type: "diet",
  },
];

export const TrainingProgramsSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <div className="training-programs-container">
      <div className="training-programs-content">
        {/* Header */}
        <header className="training-programs-header">
          <h2 className="training-programs-title">
            Выберите любую фитнес-программу под свою цель
          </h2>
          <p className="training-programs-subtitle">
            Каждая программа — это пошаговый план, который поможет вам достичь своей цели с поддержкой тренера.
          </p>
        </header>

        {/* Programs Grid */}
        <div className="programs-grid">
          {trainingPrograms.map((program, index) => (
            <Card
              key={index}
              className={`program-card program-card--${program.type} ${program.featured ? 'program-card--featured' : ''}`}
              style={
                {
                  "--animation-delay": `${400 + index * 200}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="program-card-content">
                <h3 className="program-title">
                  {program.title}
                </h3>

                <div className={`program-price program-price--${program.priceColor}`}>
                  {program.price.includes('\n') ? (
                    <>
                      <div className="price-main">{program.price.split('\n')[0]}</div>
                      <div className="price-discount">{program.price.split('\n')[1]}</div>
                    </>
                  ) : (
                    program.price
                  )}
                </div>

                <p className="program-description">
                  {program.description}
                </p>
              </CardContent>

              <Button className="program-button" onClick={handleGetStarted}>
                <span>Начни сейчас</span>
              </Button>

              <p className="program-details">
                {program.details}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
