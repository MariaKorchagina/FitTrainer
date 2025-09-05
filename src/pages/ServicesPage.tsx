import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle } from "lucide-react";

export const ServicesPage = (): JSX.Element => {
  const services = [
    {
      title: "Personal Training",
      price: "200$",
      period: "Monthly",
      description: "One-on-one personalized training sessions",
      features: [
        "Customized workout plans",
        "Form correction and technique",
        "Progress tracking",
        "Flexible scheduling",
        "Equipment guidance"
      ],
      popular: false
    },
    {
      title: "Personal Training + Nutrition",
      price: "300$",
      period: "Monthly",
      description: "Complete fitness and nutrition package",
      features: [
        "Everything in Personal Training",
        "Custom meal plans",
        "Nutritional guidance",
        "Supplement recommendations",
        "Weekly check-ins",
        "Recipe suggestions"
      ],
      popular: true
    },
    {
      title: "Nutrition Coaching",
      price: "150$",
      period: "Monthly",
      description: "Dedicated nutrition and diet planning",
      features: [
        "Personalized meal plans",
        "Macro calculations",
        "Food tracking support",
        "Healthy recipe ideas",
        "Lifestyle integration"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      title: "Group Training",
      description: "Small group sessions for friends or family",
      price: "From $50/person"
    },
    {
      title: "Online Coaching",
      description: "Remote training and nutrition guidance",
      price: "From $100/month"
    },
    {
      title: "Fitness Assessment",
      description: "Comprehensive fitness evaluation and goal setting",
      price: "$75/session"
    }
  ];

  return (
    <div className="bg-[#1a1a1a] w-full min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="[font-family:'Anton',Helvetica] font-normal text-white text-4xl md:text-6xl tracking-[-0.60px] leading-[1.2] mb-8 translate-y-[-1rem] animate-fade-in opacity-0">
            TRAINING SERVICES
          </h1>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-xl md:text-2xl tracking-[0] leading-[1.3] max-w-4xl mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Choose the perfect program to achieve your fitness goals with personalized coaching and support.
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
                  Most Popular
                </div>
              )}
              
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-xl mb-2">
                    {service.title}
                  </h3>
                  <div className={`[font-family:'Anton',Helvetica] font-normal text-6xl tracking-[0] leading-[0.1px] mb-2 ${
                    service.popular ? 'text-[#ff2332]' : 'text-white'
                  }`}>
                    {service.price}
                  </div>
                  <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-base">
                    {service.period}
                  </p>
                  <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm mt-2">
                    {service.description}
                  </p>
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

              <Button className="w-full bg-[#ff2332] hover:bg-[#ff2332]/90 rounded-xl h-12 transition-all duration-300 hover:scale-105">
                <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-base">
                  Get Started
                </span>
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="[font-family:'Anton',Helvetica] font-normal text-white text-3xl md:text-4xl tracking-[-0.40px] leading-[1.2] mb-12 text-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            ADDITIONAL SERVICES
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
            READY TO START YOUR TRANSFORMATION?
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your goals and find the perfect program for your fitness journey.
          </p>
          <Button className="h-[60px] px-8 bg-[#ff2332] hover:bg-[#e01e2b] rounded-xl transition-all duration-300 hover:scale-105">
            <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-lg">
              Book Free Consultation
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
