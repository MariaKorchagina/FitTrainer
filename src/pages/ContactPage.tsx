import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const ContactPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["123 Fitness Street", "Los Angeles, CA 90210"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["john@personaltrainer.com", "info@johnfitness.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon-Fri: 6:00 AM - 10:00 PM", "Sat-Sun: 8:00 AM - 8:00 PM"]
    }
  ];

  return (
    <div className="bg-[#1a1a1a] w-full min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="[font-family:'Anton',Helvetica] font-normal text-white text-4xl md:text-6xl tracking-[-0.60px] leading-[1.2] mb-8 translate-y-[-1rem] animate-fade-in opacity-0">
            GET IN TOUCH
          </h1>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-xl md:text-2xl tracking-[0] leading-[1.3] max-w-4xl mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Ready to start your fitness journey? Let's discuss your goals and create a personalized plan just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <Card className="bg-[#1f1f1f] border border-[#ffffff33] rounded-[20px] p-8">
              <CardContent className="p-0">
                <h2 className="[font-family:'Anton',Helvetica] font-normal text-white text-2xl md:text-3xl tracking-[-0.30px] leading-[1.2] mb-8">
                  SEND A MESSAGE
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#ffffff33] rounded-lg text-white placeholder-[#909090] focus:border-[#ff2332] focus:outline-none transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#ffffff33] rounded-lg text-white placeholder-[#909090] focus:border-[#ff2332] focus:outline-none transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#ffffff33] rounded-lg text-white placeholder-[#909090] focus:border-[#ff2332] focus:outline-none transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#ffffff33] rounded-lg text-white focus:border-[#ff2332] focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="personal-training">Personal Training</option>
                        <option value="training-nutrition">Training + Nutrition</option>
                        <option value="nutrition-only">Nutrition Coaching</option>
                        <option value="group-training">Group Training</option>
                        <option value="online-coaching">Online Coaching</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#ffffff33] rounded-lg text-white placeholder-[#909090] focus:border-[#ff2332] focus:outline-none transition-colors resize-vertical"
                      placeholder="Tell me about your fitness goals and what you'd like to achieve..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-[50px] bg-[#ff2332] hover:bg-[#e01e2b] rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-base">
                      Send Message
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="space-y-8">
              <h2 className="[font-family:'Anton',Helvetica] font-normal text-white text-2xl md:text-3xl tracking-[-0.30px] leading-[1.2]">
                CONTACT INFORMATION
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-[#1f1f1f] border border-[#ffffff33] rounded-[15px] p-6 hover:scale-105 transition-all duration-300"
                  >
                    <CardContent className="p-0 flex items-start gap-4">
                      <div className="text-[#ff2332] mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-lg mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-base"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-lg mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#1f1f1f] border border-[#ffffff33] rounded-lg flex items-center justify-center text-[#909090] hover:text-white hover:border-[#ff2332] transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#1f1f1f] border border-[#ffffff33] rounded-lg flex items-center justify-center text-[#909090] hover:text-white hover:border-[#ff2332] transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Response */}
              <Card className="bg-[#ff2332]/10 border border-[#ff2332]/30 rounded-[15px] p-6">
                <CardContent className="p-0">
                  <h3 className="[font-family:'Outfit',Helvetica] font-bold text-[#ff2332] text-lg mb-2">
                    Quick Response Guarantee
                  </h3>
                  <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">
                    I typically respond to all inquiries within 24 hours. For urgent matters, 
                    please call directly for immediate assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
