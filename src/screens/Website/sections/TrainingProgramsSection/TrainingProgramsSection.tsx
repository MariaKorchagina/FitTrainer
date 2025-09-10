import React, { useState, useCallback } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { CheckCircle, Expand } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./TrainingProgramsSection.css";

export const TrainingProgramsSection = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const trainingPrograms = [
    {
      title: t("programs.sushkaPro.title"),
      price: `${t("programs.sushkaPro.price")}\n${t("programs.sushkaPro.discount")}`,
      priceColor: "white",
      description: t("programs.sushkaPro.description"),
      extendedDescription: t("programs.sushkaPro.extendedDescription"),
      details: t("programs.sushkaPro.details"),
      features: t("programs.sushkaPro.features", { returnObjects: true }) as string[],
      featured: false,
      type: "personal",
    },
    {
      title: t("programs.strengthTone.title"),
      price: `${t("programs.strengthTone.price")}\n${t("programs.strengthTone.discount")}`,
      priceColor: "red",
      description: t("programs.strengthTone.description"),
      extendedDescription: t("programs.strengthTone.extendedDescription"),
      details: t("programs.strengthTone.details"),
      features: t("programs.strengthTone.features", { returnObjects: true }) as string[],
      featured: true,
      type: "personal-diet",
    },
    {
      title: t("programs.steelAbs.title"),
      price: `${t("programs.steelAbs.price")}\n${t("programs.steelAbs.discount")}`,
      priceColor: "white",
      description: t("programs.steelAbs.description"),
      extendedDescription: t("programs.steelAbs.extendedDescription"),
      details: t("programs.steelAbs.details"),
      features: t("programs.steelAbs.features", { returnObjects: true }) as string[],
      featured: false,
      type: "diet",
    },
  ];

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleViewAllPrograms = () => {
    navigate('/services');
  };

  const toggleExpanded = useCallback((index: number) => {
    setExpandedCard(prevExpandedCard => {
      const newValue = prevExpandedCard === index ? null : index;
      return newValue;
    });
  }, []);

  return (
    <div className="training-programs-container">
      <div className="training-programs-content">
        {/* Header */}
        <header className="training-programs-header">
          <h2 className="training-programs-title">
            {t("programs.title")}
          </h2>
          <p className="training-programs-subtitle">
            {t("programs.subtitle")}
          </p>
        </header>

        {/* Programs Grid */}
        <div className="programs-grid">
          {trainingPrograms.map((program, index) => {
            const mainIndex = index; // Используем ту же логику, что и в ServicesPage
            const shouldShow = expandedCard === mainIndex;
            return (
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
                <div className="program-card-top">
                  <div className="program-title-container">
                    <h3 className="program-title">
                      {program.title}
                    </h3>
                    {program.extendedDescription && (
                      <button
                        className="expand-button"
                        onClick={() => toggleExpanded(mainIndex)}
                        aria-label="Expand description"
                      >
                        <Expand className="expand-icon" />
                      </button>
                    )}
                  </div>

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

                  {/* Extended Description */}
                  {program.extendedDescription && shouldShow && (
                    <p className="program-extended-description">
                      {program.extendedDescription}
                    </p>
                  )}

                  {/* Features List */}
                  {program.features && (
                    <div className="program-features text-left">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3 mb-2 text-left">
                          <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                          <span className="text-[#909090] text-sm text-left">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="program-card-bottom">
                  <Button className="program-button" onClick={handleGetStarted}>
                    <span>{t("programs.startNow")}</span>
                  </Button>

                  <p className="program-details">
                    {program.details}
                  </p>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* View All Programs Button */}
        <div className="text-center mt-12">
          <Button 
            className="bg-[#ff2332] hover:bg-[#e01e2b] text-white px-12 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            onClick={handleViewAllPrograms}
          >
            <span className="font-bold text-lg">{t("programs.viewAll")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
