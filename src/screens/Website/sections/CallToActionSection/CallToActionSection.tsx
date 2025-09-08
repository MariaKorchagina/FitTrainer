import { Card, CardContent } from "../../../../components/ui/card";
import "./CallToActionSection.css";

export const CallToActionSection = (): JSX.Element => {
  const statsData = [
    {
      number: "200+",
      label: "Довольных клиентов",
    },
    {
      number: "10",
      label: "Лет опыта",
    },
    {
      number: "10",
      label: "Лет в спорте",
    },
  ];

  return (
    <div className="cta-container">
      <div className="cta-content">
        {/* Image Section */}
        <div className="cta-image-section">
          <img
            src="/trainer9.png"
            alt="Лилия - фитнес-тренер"
            className="cta-trainer-image"
          />
        </div>

        {/* Content Section */}
        <div className="cta-text-section">
          {/* Header Content */}
          <div className="cta-header">
            <h2 className="cta-title">
              Привет, меня зовут Лилия!
            </h2>

            <p className="cta-description">
              Я — сертифицированный фитнес-тренер, и я здесь, чтобы ты наконец почувствовала: "Я управляю своим телом".

              <br />
              Я провожу тренировки в направлениях Пилатес, TRX и Табата — как онлайн, так и вживую.
              <br />
              Работаю с женщинами, которые устали чувствовать слабость, тяжесть, нестабильность в теле и в жизни.

              <br />
              Моя цель — не просто привести тебя в форму, а помочь вернуть контроль, энергию и уверенность.
              <br />
              Каждая программа подбирается под твои цели, возможности и ритм жизни.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="cta-stats-grid">
            {statsData.map((stat, index) => (
              <Card
                key={index}
                className="cta-stat-card"
              >
                <CardContent className="cta-stat-content">
                  <div className="cta-stat-number">
                    {stat.number}
                  </div>
                  <div className="cta-stat-label">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
