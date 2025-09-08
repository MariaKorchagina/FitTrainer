import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./TrainingProgramsSection.css";

const trainingPrograms = [
  {
    title: "Сушка PRO",
    price: "580₪ → 405₪\n(скидка 30%)",
    priceColor: "white",
    description: "Быстрый результат - жир уходит, тело в тонусе",
    details: "Идеально для тех, кому нужно сжечь максимум за короткий срок",
    features: [
      "8 мощных тренировок Табата (20/10, 40/20)",
      "План питания, запускающий сжигание жира",
      "Домашняя активность + рекомендации по восстановлению",
      "Постоянная поддержка: мотивация, напоминания, ответы на \"можно ли банан?\""
    ],
    featured: false,
    type: "personal",
  },
  {
    title: "Сила и Тонус",
    price: "600₪ → 420₪\n(скидка 30%)",
    priceColor: "red",
    description: "Упругая фигура без перегрузки - через пилатес",
    details: "Женственная сила, гибкость и легкость в теле",
    features: [
      "8 тренировок на стабилизаторы, дыхание, растяжку",
      "Укрепление мышц таза и живота без перегруза",
      "План питания на лёгкость, тонус и антистресс",
      "Мягкая, но постоянная поддержка"
    ],
    featured: true,
    type: "personal-diet",
  },
  {
    title: "Стальной пресс",
    price: "550₪ → 385₪\n(скидка 30%)",
    priceColor: "white",
    description: "Глубокие мышцы + идеальная техника = рельеф",
    details: "Для тех, кто хочет не просто \"кубики\", а контроль и уверенность",
    features: [
      "8 тренировок на глубокие мышцы живота",
      "Правильная техника каждого упражнения",
      "План питания для рельефа и плоского живота",
      "Постоянная поддержка и контроль техники"
    ],
    featured: false,
    type: "diet",
  },
];

export const TrainingProgramsSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleViewAllPrograms = () => {
    navigate('/services');
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

                {/* Features List */}
                {program.features && (
                  <div className="program-features">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0" />
                        <span className="text-[#909090] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
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

        {/* View All Programs Button */}
        <div className="text-center mt-12">
          <Button 
            className="bg-[#ff2332] hover:bg-[#e01e2b] text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            onClick={handleViewAllPrograms}
          >
            <span className="font-bold text-lg">Посмотреть все программы</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
