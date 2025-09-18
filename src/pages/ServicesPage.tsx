import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle, Expand } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useMemo } from "react";

// TypeScript declaration for Marquiz
declare global {
  interface Window {
    Marquiz: {
      add: (config: [string, any]) => void;
    };
  }
}
import "../screens/Website/sections/TrainingProgramsSection/TrainingProgramsSection.css";
import "./ServicesPage.css";



export const ServicesPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { t, i18n, ready } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('RUB');
  const [selectedNutritionCurrency, setSelectedNutritionCurrency] = useState<string>('RUB');
  const [selectedTotalResetCurrency, setSelectedTotalResetCurrency] = useState<string>('RUB');
  const [selectedPilatesCurrency, setSelectedPilatesCurrency] = useState<string>('RUB');
  const [selectedSteelAbsCurrency, setSelectedSteelAbsCurrency] = useState<string>('RUB');
  const [selectedTrxFitnessCurrency, setSelectedTrxFitnessCurrency] = useState<string>('RUB');
  const [selectedPostpartumCurrency, setSelectedPostpartumCurrency] = useState<string>('RUB');
  const [selectedStretchingCurrency, setSelectedStretchingCurrency] = useState<string>('RUB');

  // Currency prices for "Сушка PRO"
  const sushkaProPrices = {
    RUB: '8 000 ₽',
    USD: '88 $',
    EUR: '82 €',
    ILS: '300 ₪'
  };

  // Currency prices for "Анализ твоего питания"
  const nutritionAnalysisPrices = {
    RUB: '3 000 ₽',
    USD: '35 $',
    EUR: '35 €',
    ILS: '120 ₪'
  };

  // Currency prices for "Total Reset"
  const totalResetPrices = {
    RUB: '12 000 ₽',
    USD: '92 $',
    EUR: '85 €',
    ILS: '320 ₪'
  };

  // Currency prices for "Сильное тело без прыжков. Пилатес"
  const pilatesPrices = {
    RUB: '6 000 ₽',
    USD: '66 $',
    EUR: '62 €',
    ILS: '225 ₪'
  };

  // Currency prices for "Стальной пресс"
  const steelAbsPrices = {
    RUB: '6 500 ₽',
    USD: '72 $',
    EUR: '67 €',
    ILS: '245 ₪'
  };

  // Currency prices for "TRX: фитнес-зал нового поколения"
  const trxFitnessPrices = {
    RUB: '7 000 ₽',
    USD: '77 $',
    EUR: '72 €',
    ILS: '265 ₪'
  };

  // Currency prices for "Новое тело после родов: живот подтянется, отёки уйдут"
  const postpartumPrices = {
    RUB: '6 000 ₽',
    USD: '66 $',
    EUR: '62 €',
    ILS: '225 ₪'
  };

  // Currency prices for "Растяжка и шпагат: прямая спина, гибкость и минус отёки"
  const stretchingPrices = {
    RUB: '6 500 ₽',
    USD: '72 $',
    EUR: '67 €',
    ILS: '245 ₪'
  };


  const getPriceForService = (service: any) => {
    if (service.title === t("programs.sushkaPro.title")) {
      return sushkaProPrices[selectedCurrency as keyof typeof sushkaProPrices];
    }
    if (service.title === t("programs.strengthTone.title")) {
      return pilatesPrices[selectedPilatesCurrency as keyof typeof pilatesPrices];
    }
    if (service.title === t("programs.steelAbs.title")) {
      return steelAbsPrices[selectedSteelAbsCurrency as keyof typeof steelAbsPrices];
    }
    if (service.title === t("programs.trxFitness.title")) {
      return trxFitnessPrices[selectedTrxFitnessCurrency as keyof typeof trxFitnessPrices];
    }
    if (service.title === t("programs.postpartumRecovery.title")) {
      return postpartumPrices[selectedPostpartumCurrency as keyof typeof postpartumPrices];
    }
    if (service.title === t("programs.stretchingSplits.title")) {
      return stretchingPrices[selectedStretchingCurrency as keyof typeof stretchingPrices];
    }
    return service.price;
  };

  const getPriceForNutritionAnalysis = () => {
    return nutritionAnalysisPrices[selectedNutritionCurrency as keyof typeof nutritionAnalysisPrices];
  };

  const getPriceForTotalReset = () => {
    return totalResetPrices[selectedTotalResetCurrency as keyof typeof totalResetPrices];
  };

  const getPriceForPilates = () => {
    return pilatesPrices[selectedPilatesCurrency as keyof typeof pilatesPrices];
  };

  const getPriceForSteelAbs = () => {
    return steelAbsPrices[selectedSteelAbsCurrency as keyof typeof steelAbsPrices];
  };

  const getPriceForTrxFitness = () => {
    return trxFitnessPrices[selectedTrxFitnessCurrency as keyof typeof trxFitnessPrices];
  };

  const getPriceForPostpartum = () => {
    return postpartumPrices[selectedPostpartumCurrency as keyof typeof postpartumPrices];
  };

  const getPriceForStretching = () => {
    return stretchingPrices[selectedStretchingCurrency as keyof typeof stretchingPrices];
  };


  // Initialize Marquiz inline quiz
  useEffect(() => {
    console.log('ServicesPage: Initializing Marquiz quiz...');
    
    const initMarquizQuiz = () => {
      console.log('ServicesPage: initMarquizQuiz called, window.Marquiz exists:', !!window.Marquiz);
      
      if (window.Marquiz && typeof window.Marquiz.add === 'function') {
        try {
          console.log('ServicesPage: Adding Marquiz quiz...');
          
          // Check if mobile device
          const isMobile = window.innerWidth <= 768;
          
          window.Marquiz.add(['Inline', {
            id: '68c07b95528c4c0019cb5f39',
            buttonText: isMobile ? '' : '«Старт»', // Hide button text on mobile
            bgColor: '#ff2332',
            textColor: '#fff',
            rounded: true,
            shadow: 'rgba(255, 35, 50, 0.5)',
            blicked: true,
            fixed: false,
            buttonOnMobile: !isMobile, // Hide button on mobile
            disableOnMobile: false,
            fullWidth: false,
            autoOpen: isMobile ? 0 : false // Auto open on mobile
          }]);
          console.log('ServicesPage: Marquiz quiz added successfully');
        } catch (error) {
          console.error('ServicesPage: Error adding Marquiz quiz:', error);
        }
      } else {
        console.log('ServicesPage: Marquiz not available, retrying in 1000ms...');
        setTimeout(initMarquizQuiz, 1000);
      }
    };

    // Try immediately
    initMarquizQuiz();

    // Try again after 2 seconds
    const timer = setTimeout(() => {
      console.log('ServicesPage: Second attempt after 2 seconds');
      initMarquizQuiz();
    }, 2000);

    // Also listen for marquizLoaded event
    const handleMarquizLoaded = () => {
      console.log('ServicesPage: marquizLoaded event received');
      initMarquizQuiz();
    };

    // Handle window resize to update quiz behavior
    const handleResize = () => {
      // Reinitialize quiz on resize to update mobile/desktop behavior
      if (window.Marquiz && typeof window.Marquiz.add === 'function') {
        setTimeout(initMarquizQuiz, 500);
      }
    };

    document.addEventListener('marquizLoaded', handleMarquizLoaded);
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('marquizLoaded', handleMarquizLoaded);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [expandedAdditionalCard, setExpandedAdditionalCard] = useState<number | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  // Force refresh when language changes
  useEffect(() => {
    setRefreshKey(prev => prev + 1);
  }, [i18n.language]);

  // Don't render until translations are ready
  if (!ready) {
    return <div>Loading...</div>;
  }

  const handleGetStarted = (serviceTitle?: string) => {
    if (serviceTitle === t("programs.sushkaPro.title")) {
      window.open('https://buy.stripe.com/8x23cndvnfH96HM1J48AE00', '_blank');
    } else if (serviceTitle === t("programs.strengthTone.title")) {
      window.open('https://buy.stripe.com/9B6eV5fDv7aD0jodrM8AE08', '_blank');
    } else if (serviceTitle === t("programs.steelAbs.title")) {
      window.open('https://buy.stripe.com/bJe7sD3UNdz1gim9bw8AE02', '_blank');
    } else if (serviceTitle === t("programs.trxFitness.title")) {
      window.open('https://buy.stripe.com/dRm00b8b30Mfc2673o8AE03', '_blank');
    } else if (serviceTitle === t("programs.postpartumRecovery.title")) {
      window.open('https://buy.stripe.com/7sYdR176ZamP7LQ3Rc8AE09', '_blank');
    } else if (serviceTitle === t("programs.stretchingSplits.title")) {
      window.open('https://buy.stripe.com/7sYdR176ZamP7LQ3Rc8AE09', '_blank');
    } else if (serviceTitle === t("services.additional.groupTraining.title")) {
      window.open('https://buy.stripe.com/4gM7sD2QJ9iLc2673o8AE0b', '_blank');
    } else if (serviceTitle === t("services.additional.totalReset.title")) {
      window.open('https://buy.stripe.com/9B6eV5bnfcuXgim2N88AE0c', '_blank');
    } else {
      window.open('https://wa.me/972549961795', '_blank');
    }
  };


  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const toggleAdditionalExpanded = (index: number) => {
    setExpandedAdditionalCard(expandedAdditionalCard === index ? null : index);
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


  const additionalServices = useMemo(() => [
    {
      title: t("services.additional.groupTraining.title"),
      description: t("services.additional.groupTraining.description"),
      price: t("services.additional.groupTraining.price"),
      intro: t("services.additional.groupTraining.intro"),
      whatIncludes: t("services.additional.groupTraining.whatIncludes"),
      points: {
        nutritionBreakdown: t("services.additional.groupTraining.points.nutritionBreakdown"),
        macroAnalysis: t("services.additional.groupTraining.points.macroAnalysis"),
        hiddenOvereating: t("services.additional.groupTraining.points.hiddenOvereating"),
        realReasons: t("services.additional.groupTraining.points.realReasons"),
        practicalAdvice: t("services.additional.groupTraining.points.practicalAdvice"),
        allFactors: t("services.additional.groupTraining.points.allFactors")
      },
      result: t("services.additional.groupTraining.result")
    },
    {
      title: t("services.additional.totalReset.title"),
      description: t("services.additional.totalReset.description"),
      price: t("services.additional.totalReset.price"),
      intro: t("services.additional.totalReset.intro"),
      whatChanges: t("services.additional.totalReset.whatChanges"),
      changes: {
        body: t("services.additional.totalReset.changes.body"),
        mindset: t("services.additional.totalReset.changes.mindset"),
        habits: t("services.additional.totalReset.changes.habits"),
        nutrition: t("services.additional.totalReset.changes.nutrition"),
        energy: t("services.additional.totalReset.changes.energy"),
        inner: t("services.additional.totalReset.changes.inner")
      },
      whatInside: t("services.additional.totalReset.whatInside"),
      inside: {
        training: t("services.additional.totalReset.inside.training"),
        coaching: t("services.additional.totalReset.inside.coaching"),
        nutrition: t("services.additional.totalReset.inside.nutrition"),
        meditation: t("services.additional.totalReset.inside.meditation"),
        support: t("services.additional.totalReset.inside.support")
      },
      result: t("services.additional.totalReset.result")
    }
  ], [t, i18n.language, refreshKey]);

  return (
    <div className="services-page-container" key={`${i18n.language}-${refreshKey}`}>
      <div className="services-content-wrapper">
        {/* Programs Section Title */}
        <div className="mb-12 -mt-8">
          <h2 className="[font-family:'Anton',Helvetica] font-normal text-white text-3xl md:text-4xl tracking-[-0.40px] leading-[1.2] mb-4 text-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            {t("services.programsTitle")}
          </h2>
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
                    {service.title === t("programs.sushkaPro.title") ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="text-4xl font-bold">
                          {getPriceForService(service)}
                        </div>
                        <select
                          value={selectedCurrency}
                          onChange={(e) => setSelectedCurrency(e.target.value)}
                          className="bg-transparent border border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-[#ff2332]"
                        >
                          <option value="RUB">₽ Рубли</option>
                          <option value="USD">$ Доллары</option>
                          <option value="EUR">€ Евро</option>
                          <option value="ILS">₪ Шекели</option>
                        </select>
                      </div>
                    ) : service.title === t("programs.strengthTone.title") ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="text-4xl font-bold">
                          {getPriceForService(service)}
                        </div>
                        <select
                          value={selectedPilatesCurrency}
                          onChange={(e) => setSelectedPilatesCurrency(e.target.value)}
                          className="bg-transparent border border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-[#ff2332]"
                        >
                          <option value="RUB">₽ Рубли</option>
                          <option value="USD">$ Доллары</option>
                          <option value="EUR">€ Евро</option>
                          <option value="ILS">₪ Шекели</option>
                        </select>
                      </div>
                    ) : service.title === t("programs.steelAbs.title") ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="text-4xl font-bold">
                          {getPriceForService(service)}
                        </div>
                        <select
                          value={selectedSteelAbsCurrency}
                          onChange={(e) => setSelectedSteelAbsCurrency(e.target.value)}
                          className="bg-transparent border border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-[#ff2332]"
                        >
                          <option value="RUB">₽ Рубли</option>
                          <option value="USD">$ Доллары</option>
                          <option value="EUR">€ Евро</option>
                          <option value="ILS">₪ Шекели</option>
                        </select>
                      </div>
                    ) : service.title === t("programs.trxFitness.title") ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="text-4xl font-bold">
                          {getPriceForService(service)}
                        </div>
                        <select
                          value={selectedTrxFitnessCurrency}
                          onChange={(e) => setSelectedTrxFitnessCurrency(e.target.value)}
                          className="bg-transparent border border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-[#ff2332]"
                        >
                          <option value="RUB">₽ Рубли</option>
                          <option value="USD">$ Доллары</option>
                          <option value="EUR">€ Евро</option>
                          <option value="ILS">₪ Шекели</option>
                        </select>
                      </div>
                    ) : service.title === t("programs.postpartumRecovery.title") ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="text-4xl font-bold">
                          {getPriceForService(service)}
                        </div>
                        <select
                          value={selectedPostpartumCurrency}
                          onChange={(e) => setSelectedPostpartumCurrency(e.target.value)}
                          className="bg-transparent border border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-[#ff2332]"
                        >
                          <option value="RUB">₽ Рубли</option>
                          <option value="USD">$ Доллары</option>
                          <option value="EUR">€ Евро</option>
                          <option value="ILS">₪ Шекели</option>
                        </select>
                      </div>
                    ) : service.title === t("programs.stretchingSplits.title") ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="text-4xl font-bold">
                          {getPriceForService(service)}
                        </div>
                        <select
                          value={selectedStretchingCurrency}
                          onChange={(e) => setSelectedStretchingCurrency(e.target.value)}
                          className="bg-transparent border border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-[#ff2332]"
                        >
                          <option value="RUB">₽ Рубли</option>
                          <option value="USD">$ Доллары</option>
                          <option value="EUR">€ Евро</option>
                          <option value="ILS">₪ Шекели</option>
                        </select>
                      </div>
                    ) : service.price.includes("\n") ? (
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
                    <div className="program-extended-description">
                      {service.title === "Сушка PRO" ? (
                        <>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                            Хватит ждать месяцы, чтобы увидеть результат. Эта программа делает тело подтянутым, сильным и рельефным быстрее, чем ты думаешь:
                          </p>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Жир тает даже после тренировки — тело работает на результат круглосуточно.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Целлюлит уменьшается, кожа становится плотнее и ровнее.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Каждая тренировка даёт ощущение силы и контроля над телом.</span>
                          </div>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4 mt-4">
                            Что внутри:
                          </p>
                        </>
                      ) : service.title === "Сильное тело без прыжков. Пилатес" ? (
                        <>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                            Не любишь бег, прыжки и изнуряющее кардио? Пилатес — мягкий, безопасный и при этом эффективный способ привести тело в форму:
                          </p>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Сжигаем жир и формируем рельеф — без перегрузки суставов.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Укрепляем мышцы таза, живота и стабилизаторы — для плоского живота и красивой осанки.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Растяжка и дыхание — улучшает мобильность и общее самочувствие.</span>
                          </div>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4 mt-4">
                            Что внутри:
                          </p>
                        </>
                      ) : service.title === "Стальной пресс" ? (
                        <>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                            Хочешь плоский живот, рельеф и пресс, на который будут оглядываться?
                          </p>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                            Эта программа работает быстро и эффективно. Уже с первых тренировок уходит «мешок» и живот становится крепче.
                          </p>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Кор включается, мышцы начинают формировать рельеф и кубики.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Спина выпрямляется — прощай сутулость и тяжесть.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Руки подтягиваются — никакой дряблости и целлюлита.</span>
                          </div>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                            Первые изменения ты замечаешь уже через несколько занятий.
                          </p>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4 mt-4">
                            Что внутри:
                          </p>
                        </>
                      ) : service.title === "TRX: фитнес-зал нового поколения" ? (
                        <>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                            Что меняется:
                          </p>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Тело — силовые, функциональные и дыхательные практики. Живот подтягивается, появляется рельеф, уходят отёки.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Мышление — учимся убирать саботаж, включать дисциплину и уверенность.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Привычки — ранний подъём, зарядка, бег, контроль сна и питания.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Питание — никакой «диеты», только система, которая встроится в жизнь.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Энергия и фокус — медитации и дыхательные практики снимают стресс и возвращают баланс.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Внутренний настрой — аффирмации и работа с мышлением меняют образ себя и ускоряют результат.</span>
                          </div>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4 mt-4">
                            Что внутри:
                          </p>
                        </>
                      ) : service.title === "Новое тело после родов: живот подтянется, отёки уйдут" ? (
                        <>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                            Эта программа создана специально для женщин после родов: безопасные, но эффективные упражнения для живота, таза и осанки.
                          </p>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                            💫 Что даёт программа:
                          </p>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Подтягиваем живот и работаем с диастазом.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Укрепляем мышцы таза и тазобедренных суставов.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Запускаем лимфоток — уходит отёчность и тяжесть.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Выравниваем осанку, снимаем нагрузку со спины.</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Добавляем дыхательные практики — энергия и антистресс.</span>
                          </div>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4 mt-4">
                            Что внутри:
                          </p>
                        </>
                      ) : service.title === "Растяжка и шпагат: прямая спина, гибкость и минус отёки" ? (
                        <>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                            Программа «Растяжка + шпагат» мягко выравнивает спину, развивает гибкость и запускает лимфоток — уходят отёки и целлюлит.
                          </p>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                            💫 Результат:
                          </p>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Ровная осанка</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Гибкие суставы</span>
                          </div>
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">Подтянутое тело</span>
                          </div>
                          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4 mt-4">
                            Что внутри:
                          </p>
                        </>
                      ) : (
                        <p className="program-extended-description">
                          {service.extendedDescription}
                        </p>
                      )}
                    </div>
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
                  <Button className="service-button program-button" onClick={() => handleGetStarted(service.title)}>
                    <span>
                      {service.title === t("programs.sushkaPro.title") || 
                       service.title === t("programs.strengthTone.title") || 
                       service.title === t("programs.steelAbs.title") || 
                       service.title === t("programs.trxFitness.title") || 
                       service.title === t("programs.postpartumRecovery.title") || 
                       service.title === t("programs.stretchingSplits.title") ? "Оплатить" : t("services.startNow")}
                    </span>
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
          
          <div className="additional-services-grid">
            {additionalServices.map((service, index) => {
              return (
              <Card
                key={index}
                className="additional-service-card bg-[#1f1f1f] border border-[#ffffff33] rounded-[20px] p-6 translate-y-[-1rem] animate-fade-in opacity-0 hover:scale-105 transition-all duration-300"
                style={
                  {
                    "--animation-delay": `${1200 + index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="additional-service-content p-0 text-center">
                  <div className="program-title-container-additional">
                    <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-lg mb-3">
                      {service.title}
                    </h3>
                    {service.title === t("services.additional.totalReset.title") && t("services.additional.totalReset.extendedDescription") && (
                      <button
                        className="expand-button-total-reset"
                        onClick={() => toggleAdditionalExpanded(index)}
                        aria-label="Expand description"
                      >
                        <Expand className="expand-icon-total-reset" />
                      </button>
                    )}
                  </div>

                  {service.title === t("services.additional.groupTraining.title") ? (
                    <div className="text-left mb-4">
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-1">
                        {t("services.additional.groupTraining.intro")}
                      </p>
                      <div className="flex items-start gap-3 mb-1">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.groupTraining.points.nutritionBreakdown")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-1">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.groupTraining.points.macroAnalysis")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-1">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.groupTraining.points.hiddenOvereating")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-1">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.groupTraining.points.realReasons")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-1">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.groupTraining.points.practicalAdvice")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-1">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.groupTraining.points.allFactors")}</span>
                      </div>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mt-4">
                        {t("services.additional.groupTraining.result")}
                      </p>
                    </div>
                  ) : service.title === t("services.additional.totalReset.title") ? (
                    <div className="text-left mb-4">
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-1">
                        {t("services.additional.totalReset.intro")}
                      </p>
                      
                      {/* Extended Description - показывается только при расширении */}
                      {t("services.additional.totalReset.extendedDescription") && expandedAdditionalCard === index && (
                        <div className="program-extended-description">
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
                        </div>
                      )}
                      
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4 mt-4">
                        {t("services.additional.totalReset.whatInside")}
                      </p>
                      <div className="flex items-start gap-3 mb-1">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.inside.training")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-1">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.inside.coaching")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-1">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.inside.nutrition")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-1">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.inside.meditation")}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-1">
                        <CheckCircle className="w-4 h-4 text-[#ff2332] flex-shrink-0 mt-0.5" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">{t("services.additional.totalReset.inside.support")}</span>
                      </div>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mt-4">
                        {t("services.additional.totalReset.result")}
                      </p>
                    </div>
                  ) : (
                    <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mb-4">
                      {service.description}
                    </p>
                  )}
                  {/* Цена для всех услуг */}
                  <div className="additional-service-price [font-family:'Anton',Helvetica] font-normal text-[#ff2332] text-xl">
                    {service.title === t("services.additional.groupTraining.title") ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="text-4xl font-bold">
                          {getPriceForNutritionAnalysis()}
                        </div>
                        <select
                          value={selectedNutritionCurrency}
                          onChange={(e) => setSelectedNutritionCurrency(e.target.value)}
                          className="bg-transparent border border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-[#ff2332]"
                        >
                          <option value="RUB">₽ Рубли</option>
                          <option value="USD">$ Доллары</option>
                          <option value="EUR">€ Евро</option>
                          <option value="ILS">₪ Шекели</option>
                        </select>
                      </div>
                    ) : service.title === t("services.additional.totalReset.title") ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="text-4xl font-bold">
                          {getPriceForTotalReset()}
                        </div>
                        <select
                          value={selectedTotalResetCurrency}
                          onChange={(e) => setSelectedTotalResetCurrency(e.target.value)}
                          className="bg-transparent border border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-[#ff2332]"
                        >
                          <option value="RUB">₽ Рубли</option>
                          <option value="USD">$ Доллары</option>
                          <option value="EUR">€ Евро</option>
                          <option value="ILS">₪ Шекели</option>
                        </select>
                      </div>
                    ) : (
                      service.price
                    )}
                  </div>

                  {/* Кнопки оплаты для дополнительных услуг */}
                  {(service.title === t("services.additional.groupTraining.title") || 
                    service.title === t("services.additional.totalReset.title")) && (
                    <div className="mt-6 flex justify-center">
                      <Button 
                        className="service-button program-button" 
                        onClick={() => handleGetStarted(service.title)}
                      >
                        <span>
                          Оплатить
                        </span>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
          </div>
        </div>

        {/* Quiz Introduction Text */}
        <div className="services-hero-section">
          <h1 className="services-hero-title">
            Не знаете с чего начать?
          </h1>
          <p className="services-hero-subtitle">
            Выберите идеальную программу, чтобы достичь своих целей с персональным сопровождением и поддержкой. Пройди квиз ниже, чтобы найти подходящую именно тебе программу!
          </p>
        </div>

        {/* Marquiz Inline Quiz */}
        <div className="text-center mb-16">
          <div id="marquiz-inline-quiz">
            <div data-marquiz-id="68c07b95528c4c0019cb5f39"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#1f1f1f] rounded-[20px] p-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] mb-16">
          <h2 className="[font-family:'Anton',Helvetica] font-normal text-white text-3xl md:text-4xl tracking-[-0.40px] leading-[1.2] mb-6">
            {t("services.ctaTitle")}
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-lg mb-8 max-w-2xl mx-auto">
            {t("services.ctaDescription")}
          </p>
          <Button className="h-[60px] px-8 bg-[#ff2332] hover:bg-[#e01e2b] rounded-xl transition-all duration-300 hover:scale-105" onClick={() => handleGetStarted()}>
            <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-lg">
              {t("services.ctaButton")}
            </span>
          </Button>
        </div>

      </div>
    </div>
  );
};
