import { Card, CardContent } from "../components/ui/card";
import { useNavigate } from "react-router-dom";
import "./AboutPage.css";

export const AboutPage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const achievements = [
    { number: "200+", label: "Довольных клиентов" },
    { number: "10", label: "Лет опыта" },
    { number: "10", label: "Лет в спорте" },
    { number: "50+", label: "Сертификатов" },
  ];

  return (
    <div className="about-page">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="about-hero">
          <h1 className="about-title">
            ОБО МНЕ
          </h1>
          <p className="about-subtitle">
            Я — сертифицированный фитнес‑тренер. Помогаю женщинам вернуть силу, лёгкость и уверенность
            через персональные тренировки и понятные программы, которые вписываются в реальную жизнь.
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Image */}
          <div className="about-image">
            <img
              alt="Personal Trainer"
              src="/trainer7.png"
            />
          </div>

          {/* Content */}
          <div className="about-text">
            <h2>МОЯ ИСТОРИЯ</h2>
            <div className="space-y-6">
              <p>
                Мой путь в фитнесе начался более 10 лет назад. Я прошла через собственные трансформации и убедилась,
                как регулярные тренировки и адекватное питание меняют тело, самочувствие и настроение.
              </p>
              <p>
                Сегодня я работаю с женщинами разного уровня подготовки: от новичков до тех, кто возвращается к спорту
                после паузы. Я бережно веду, объясняю технику и даю только то, что действительно работает.
              </p>
              <p>
                В основе моих программ — персональный подход, грамотная прогрессия нагрузок и внимание к деталям.
                Каждая тренировка адаптируется под ваши цели, ресурсы и ритм жизни.
              </p>
            </div>

            <button className="about-button" onClick={handleGetStarted}>
              <span>Начни сейчас</span>
            </button>
          </div>
        </div>

        {/* Achievements */}
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="achievement-card"
            >
              <CardContent className="achievement-card-content">
                <div className="achievement-number">
                  {achievement.number}
                </div>
                <div className="achievement-label">
                  {achievement.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy */}
        <div className="philosophy">
          <h2>МОЯ ФИЛОСОФИЯ</h2>
          <p>
            «Фитнес — это не про сравнение с другими. Это про ежедневные маленькие шаги к себе сильной и здоровой.
            Моя задача — быть рядом: следить за техникой, давать понятные задания и поддерживать на каждом этапе,
            чтобы результат был не случайным, а устойчивым».
          </p>
        </div>
      </div>
    </div>
  );
};
