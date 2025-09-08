import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Новое сообщение от ${formData.name}`);
      const body = encodeURIComponent(`
Имя: ${formData.name}
Email: ${formData.email}
Телефон: ${formData.phone || 'Не указан'}
Услуга: ${formData.service || 'Не выбрана'}

Сообщение:
${formData.message}
      `);
      
      const mailtoLink = `mailto:kobysheva_maria@mail.ru?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: ""
      });
      
      // Show success message (optional)
      alert("Спасибо за ваше сообщение! Откроется почтовый клиент для отправки.");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Произошла ошибка при отправке сообщения. Попробуйте еще раз.");
    }
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
            СВЯЗАТЬСЯ
          </h1>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-xl md:text-2xl tracking-[0] leading-[1.3] max-w-4xl mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Готовы начать путь к форме? Давайте обсудим ваши цели и подберём персональный план именно для вас.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <Card className="bg-[#1f1f1f] border border-[#ffffff33] rounded-[20px] p-8">
              <CardContent className="p-0">
                <h2 className="[font-family:'Anton',Helvetica] font-normal text-white text-2xl md:text-3xl tracking-[-0.30px] leading-[1.2] mb-8">
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                        Полное имя *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#ffffff33] rounded-lg text-white placeholder-[#909090] focus:border-[#ff2332] focus:outline-none transition-colors"
                        placeholder="Введите ваше полное имя"
                      />
                    </div>
                    
                    <div>
                      <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                        Email адрес *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#ffffff33] rounded-lg text-white placeholder-[#909090] focus:border-[#ff2332] focus:outline-none transition-colors"
                        placeholder="Введите ваш email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                        Номер телефона
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#ffffff33] rounded-lg text-white placeholder-[#909090] focus:border-[#ff2332] focus:outline-none transition-colors"
                        placeholder="Введите ваш номер телефона"
                      />
                    </div>
                    
                    <div>
                      <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                        Интересующая услуга
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#ffffff33] rounded-lg text-white focus:border-[#ff2332] focus:outline-none transition-colors"
                      >
                        <option value="">Выберите услугу</option>
                        <option value="personal-training">Персональные тренировки</option>
                        <option value="training-nutrition">Тренировки + Питание</option>
                        <option value="nutrition-only">Консультации по питанию</option>
                        <option value="group-training">Групповые тренировки</option>
                        <option value="online-coaching">Онлайн коучинг</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#ffffff33] rounded-lg text-white placeholder-[#909090] focus:border-[#ff2332] focus:outline-none transition-colors resize-vertical"
                      placeholder="Расскажите о ваших фитнес-целях и что вы хотели бы достичь..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-[50px] bg-[#ff2332] hover:bg-[#e01e2b] rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-base">
                      Отправить сообщение
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
                  Подписывайтесь
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/lili_fit_zone"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-[#1f1f1f] border border-[#ffffff33] rounded-lg flex items-center justify-center text-[#909090] hover:text-white hover:border-[#ff2332] transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://t.me/+79152994659"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-[#1f1f1f] border border-[#ffffff33] rounded-lg flex items-center justify-center text-[#909090] hover:text-white hover:border-[#ff2332] transition-all duration-300 hover:scale-110"
                    aria-label="Telegram"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M9.04 15.54 8.9 19.4c.4 0 .58-.18.79-.4l1.9-1.83 3.94 2.9c.72.4 1.24.18 1.44-.66l2.61-12.26h.01c.23-1.06-.38-1.47-1.08-1.21L3.2 10.2c-1.03.4-1.01.98-.18 1.24л4.64 1.45 10.78-6.8c.51-.33.98-.15.6.18L9.04 15.54Z"/></svg>
                  </a>
                  <a
                    href="https://wa.me/972549961795"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-[#1f1f1f] border border-[#ffffff33] rounded-lg flex items-center justify-center text-[#909090] hover:text-white hover:border-[#ff2332] transition-all duration-300 hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                  </a>
                </div>
              </div>

              {/* Quick Response */}
              <Card className="bg-[#ff2332]/10 border border-[#ff2332]/30 rounded-[15px] p-6">
                <CardContent className="p-0">
                  <h3 className="[font-family:'Outfit',Helvetica] font-bold text-[#ff2332] text-lg mb-2">
                    Гарантия быстрого ответа
                  </h3>
                  <p className="[font-family:'Outfit',Helvetica] font-normal text-[#909090] text-sm">
                    Обычно я отвечаю на все запросы в течение 24 часов. По срочным вопросам 
                    звоните напрямую для немедленной помощи.
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
