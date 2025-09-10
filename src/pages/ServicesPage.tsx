import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle, Expand } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "../screens/Website/sections/TrainingProgramsSection/TrainingProgramsSection.css";
import "./ServicesPage.css";

export const ServicesPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  const services = [
    {
      title: t("programs.sushkaPro.title"),
      price: `${t("programs.sushkaPro.price")}\n${t("programs.sushkaPro.discount")}`,
      period: "",
      description: t("programs.sushkaPro.description"),
      extendedDescription: t("programs.sushkaPro.extendedDescription"),
      features: t("programs.sushkaPro.features", { returnObjects: true }) as string[],
      details: t("programs.sushkaPro.details"),
      popular: false
    },
    {
      title: t("programs.strengthTone.title"),
      price: `${t("programs.strengthTone.price")}\n${t("programs.strengthTone.discount")}`,
      period: "",
      description: t("programs.strengthTone.description"),
      extendedDescription: t("programs.strengthTone.extendedDescription"),
      features: t("programs.strengthTone.features", { returnObjects: true }) as string[],
      details: t("programs.strengthTone.details"),
      popular: true
    },
    {
      title: t("programs.steelAbs.title"),
      price: `${t("programs.steelAbs.price")}\n${t("programs.steelAbs.discount")}`,
      period: "",
      description: t("programs.steelAbs.description"),
      extendedDescription: t("programs.steelAbs.extendedDescription"),
      features: t("programs.steelAbs.features", { returnObjects: true }) as string[],
      details: t("programs.steelAbs.details"),
      popular: false
    },
    {
      title: t("programs.trxFitness.title"),
      price: t("programs.trxFitness.price"),
      period: "",
      description: t("programs.trxFitness.description"),
      extendedDescription: t("programs.trxFitness.extendedDescription"),
      features: t("programs.trxFitness.features", { returnObjects: true }) as string[],
      details: t("programs.trxFitness.details"),
      popular: false
    },
    {
      title: t("programs.postpartumRecovery.title"),
      price: t("programs.postpartumRecovery.price"),
      period: "",
      description: t("programs.postpartumRecovery.description"),
      extendedDescription: t("programs.postpartumRecovery.extendedDescription"),
      features: t("programs.postpartumRecovery.features", { returnObjects: true }) as string[],
      details: t("programs.postpartumRecovery.details"),
      popular: false
    },
    {
      title: t("programs.stretchingSplits.title"),
      price: t("programs.stretchingSplits.price"),
      period: "",
      description: t("programs.stretchingSplits.description"),
      extendedDescription: t("programs.stretchingSplits.extendedDescription"),
      features: t("programs.stretchingSplits.features", { returnObjects: true }) as string[],
      details: t("programs.stretchingSplits.details"),
      popular: false
    }
  ];


  const additionalServices = [
    {
      title: t("services.additional.groupTraining.title"),
      description: t("services.additional.groupTraining.description"),
      price: t("services.additional.groupTraining.price")
    },
    {
      title: t("services.additional.totalReset.title"),
      description: t("services.additional.totalReset.description"),
      price: t("services.additional.totalReset.price")
    }
  ];

  return (
    <div className="services-page-container">
      <div className="services-content-wrapper">
        {/* Hero Section */}
        <div className="services-hero-section">
          <h1 className="services-hero-title">
            {t("services.title")}
          </h1>
          <p className="services-hero-subtitle">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Main Services */}
        <div className="services-main-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const mainIndex = index; // 0-5 для основных программ
            return (
            <Card
              key={index}
              className={`service-card ${service.popular ? 'service-card--popular' : ''}`}
              style={
                {
                  "--animation-delay": `${400 + index * 200}ms`,
                } as React.CSSProperties
              }
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#ff2332] text-white px-4 py-2 rounded-full text-sm font-bold">
                  {t("services.mostPopular")}
                </div>
              )}
              
              <CardContent className="service-card-content program-card-content">
                <div className="service-card-top program-card-top">
                  <div className="service-title-container program-title-container">
                    <h3 className="program-title">
                      {service.title}
                    </h3>
                    {service.extendedDescription && (
                      <button
                        className="expand-button"
                        onClick={() => toggleExpanded(mainIndex)}
                        aria-label="Expand description"
                      >
                        <Expand className="expand-icon" />
                      </button>
                    )}
                  </div>

                  <div className={`service-price program-price program-price--${service.popular ? 'red' : 'white'}`}>
                    {service.price.includes("\n") ? (
                      <>
                        <div className="price-main">{service.price.split("\n")[0]}</div>
                        <div className="price-discount">{service.price.split("\n")[1]}</div>
                      </>
                    ) : (
                      service.price
                    )}
                  </div>

                  <p className={`service-description program-description ${service.title === "TRX: фитнес-зал нового поколения" || service.title === "Новое тело после родов: живот подтянется, отёки уйдут" ? "!text-sm" : ""}`} style={service.title === "TRX: фитнес-зал нового поколения" || service.title === "Новое тело после родов: живот подтянется, отёки уйдут" ? { fontSize: '0.9rem' } : {}}>
                    {service.description}
                  </p>

                  {/* Extended Description */}
                  {service.extendedDescription && expandedCard === index && (
                    <p className="program-extended-description">
                      {service.extendedDescription}
                    </p>
                  )}

                  <div className="service-features program-features text-left">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 mb-2 text-left">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="text-[#909090] text-sm text-left">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-card-bottom program-card-bottom">
                  <Button className="service-button program-button" onClick={handleGetStarted}>
                    <span>{t("services.startNow")}</span>
                  </Button>

                  <p className="service-details program-details">
                    {service.details}
                  </p>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="[font-family:'Anton',Helvetica] font-normal text-white text-3xl md:text-4xl tracking-[-0.40px] leading-[1.2] mb-12 text-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            {t("services.additionalTitle")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => {
              const additionalIndex = index + 6; // 6-7 для дополнительных услуг
              return (
              <Card
                key={index}
                className="bg-[#1f1f1f] border border-[#ffffff33] rounded-[20px] p-6 translate-y-[-1rem] animate-fade-in opacity-0 hover:scale-105 transition-all duration-300"
                style={
                  {
                    "--animation-delay": `${1200 + index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="p-0 text-center">
                  <div className="program-title-container-additional">
                    <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-lg mb-3" style={service.title === t("services.additional.groupTraining.title") || service.title === t("programs.trxFitness.title") ? { fontSize: '0.9rem' } : {}}>
                      {service.title}
                    </h3>
                    {service.title === t("services.additional.totalReset.title") && (
                      <button
                        className="expand-button-total-reset"
                        onClick={() => toggleExpanded(additionalIndex)}
                        aria-label="Expand description"
                      >
                        <Expand className="expand-icon-total-reset" />
                      </button>
                    )}
                  </div>
                  {service.title === t("services.additional.groupTraining.title") ? (
                    <div className="text-left mb-4">
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                        {t("services.additional.groupTraining.intro")}
                      </p>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.groupTraining.points.nutritionBreakdown")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.groupTraining.points.macroAnalysis")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.groupTraining.points.hiddenOvereating")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.groupTraining.points.realReasons")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.groupTraining.points.practicalAdvice")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.groupTraining.points.allFactors")}</span>
                      </div>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mt-4">
                        {t("services.additional.groupTraining.result")}
                      </p>
                    </div>
                  ) : service.title === t("services.additional.totalReset.title") ? (
                    <div className="text-left mb-4">
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                        {t("services.additional.totalReset.intro")}
                      </p>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                        {t("services.additional.totalReset.whatChanges")}
                      </p>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.changes.body")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.changes.mindset")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.changes.habits")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.changes.nutrition")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.changes.energy")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.changes.inner")}</span>
                      </div>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4 mt-4">
                        {t("services.additional.totalReset.whatInside")}
                      </p>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.inside.training")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.inside.coaching")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.inside.nutrition")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.inside.meditation")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.inside.support")}</span>
                      </div>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mt-4">
                        {t("services.additional.totalReset.result")}
                      </p>
                      {expandedCard === additionalIndex && (
                        <div className="program-extended-description-additional">
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                            {t("services.additional.totalReset.extendedContent")}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                      {service.description}
                    </p>
                  )}
                  <div className="[font-family:'Anton',Helvetica] font-normal text-[#ff2332] text-xl">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            );
          })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#1f1f1f] rounded-[20px] p-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
          <h2 className="[font-family:'Anton',Helvetica] font-normal text-white text-3xl md:text-4xl tracking-[-0.40px] leading-[1.2] mb-6">
            {t("services.ctaTitle")}
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-lg mb-8 max-w-2xl mx-auto">
            {t("services.ctaDescription")}
          </p>
          <Button className="h-[60px] px-8 bg-[#ff2332] hover:bg-[#e01e2b] rounded-xl transition-all duration-300 hover:scale-105" onClick={handleGetStarted}>
            <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-lg">
              {t("services.ctaButton")}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
