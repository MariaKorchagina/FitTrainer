import { Card, CardContent } from "../components/ui/card";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AboutPage.css";

export const AboutPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const achievements = [
    { number: "200+", label: t("about.achievements.clients") },
    { number: "10", label: t("about.achievements.experience") },
    { number: "10", label: t("about.achievements.sport") },
    { number: "50+", label: t("about.achievements.certificates") },
  ];

  return (
    <div className="about-page">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="about-hero">
          <h1 className="about-title">
            {t("about.title")}
          </h1>
          <p className="about-subtitle">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Image */}
          <div className="about-image">
            <img
              alt={t("about.imageAlt")}
              src="/trainer7.png"
            />
          </div>

          {/* Content */}
          <div className="about-text">
            <h2>{t("about.storyTitle")}</h2>
            <div className="space-y-6">
              <p>
                {t("about.story1")}
              </p>
              <p>
                {t("about.story2")}
              </p>
              <p>
                {t("about.story3")}
              </p>
            </div>

            <button className="about-button" onClick={handleGetStarted}>
              <span>{t("about.startNow")}</span>
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
          <h2>{t("about.philosophyTitle")}</h2>
          <p>
            {t("about.philosophy")}
          </p>
        </div>
      </div>
    </div>
  );
};
