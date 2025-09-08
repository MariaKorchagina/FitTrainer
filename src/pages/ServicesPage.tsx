import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ServicesPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGetStarted = () => {
    navigate('/contact');
  };
  const services = [
    {
      title: t("services.sushkaPro.title"),
      price: `${t("services.sushkaPro.price")}\n${t("services.sushkaPro.discount")}`,
      period: "",
      description: "",
      features: t("services.sushkaPro.features", { returnObjects: true }) as string[],
      popular: false
    },
    {
      title: t("services.strengthTone.title"),
      price: `${t("services.strengthTone.price")}\n${t("services.strengthTone.discount")}`,
      period: "",
      description: "",
      features: t("services.strengthTone.features", { returnObjects: true }) as string[],
      popular: true
    },
    {
      title: t("services.steelAbs.title"),
      price: `${t("services.steelAbs.price")}\n${t("services.steelAbs.discount")}`,
      period: "",
      description: "",
      features: t("services.steelAbs.features", { returnObjects: true }) as string[],
      popular: false
    },
    {
      title: t("services.trxBalance.title"),
      price: `${t("services.trxBalance.price")}\n${t("services.trxBalance.discount")}`,
      period: "",
      description: "",
      features: t("services.trxBalance.features", { returnObjects: true }) as string[],
      popular: false
    },
    {
      title: t("services.postpartumRecovery.title"),
      price: `${t("services.postpartumRecovery.price")}\n${t("services.postpartumRecovery.period")}`,
      period: "",
      description: "",
      features: t("services.postpartumRecovery.features", { returnObjects: true }) as string[],
      popular: false
    },
    {
      title: t("services.nutritionConsultation.title"),
      price: `${t("services.nutritionConsultation.price")}\n${t("services.nutritionConsultation.type")}`,
      period: "",
      description: "",
      features: t("services.nutritionConsultation.features", { returnObjects: true }) as string[],
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
      title: t("services.additional.onlineCoaching.title"),
      description: t("services.additional.onlineCoaching.description"),
      price: t("services.additional.onlineCoaching.price")
    },
    {
      title: t("services.additional.fitnessAssessment.title"),
      description: t("services.additional.fitnessAssessment.description"),
      price: t("services.additional.fitnessAssessment.price")
    }
  ];

  return (
    <div className="bg-[#1a1a1a] w-full min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="[font-family:'Anton',Helvetica] font-normal text-white text-4xl md:text-6xl tracking-[-0.60px] leading-[1.2] mb-8 translate-y-[-1rem] animate-fade-in opacity-0">
            {t("services.title")}
          </h1>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-xl md:text-2xl tracking-[0] leading-[1.3] max-w-4xl mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative flex flex-col justify-between p-8 bg-[#1f1f1f] rounded-[20px] shadow-[0px_20px_40px_#0000001a] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0 hover:scale-105 transition-all duration-300 ${
                service.popular 
                  ? 'border-2 border-[#ff2332] transform scale-105' 
                  : 'border border-[#ffffff33]'
              }`}
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
              
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-xl mb-2">
                    {service.title}
                  </h3>
                  <div className="mb-2">
                    {service.price.includes("\n") ? (
                      <div className={`program-price ${service.popular ? 'text-[#ff2332]' : 'text-white'}`}>
                        <div className="price-main">{service.price.split("\n")[0]}</div>
                        <div className="price-discount">{service.price.split("\n")[1]}</div>
                      </div>
                    ) : (
                      <div className={`[font-family:'Anton',Helvetica] font-normal text-6xl tracking-[0] leading-[1] ${
                        service.popular ? 'text-[#ff2332]' : 'text-white'
                      }`}>{service.price}</div>
                    )}
                  </div>
                  {service.period && (
                    <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-base">
                      {service.period}
                    </p>
                  )}
                  {service.description && (
                    <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mt-2">
                      {service.description}
                    </p>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#ff2332] flex-shrink-0" />
                      <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <Button className="w-full bg-[#ff2332] hover:bg-[#ff2332]/90 rounded-xl h-12 transition-all duration-300 hover:scale-105" onClick={handleGetStarted}>
                <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-base">
                  {t("services.startNow")}
                </span>
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="[font-family:'Anton',Helvetica] font-normal text-white text-3xl md:text-4xl tracking-[-0.40px] leading-[1.2] mb-12 text-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            {t("services.additionalTitle")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
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
                  <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="[font-family:'Anton',Helvetica] font-normal text-[#ff2332] text-xl">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
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
