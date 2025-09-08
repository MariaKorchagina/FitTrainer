import { Card, CardContent } from "../../../../components/ui/card";
import { useTranslation } from "react-i18next";
import "./CallToActionSection.css";

export const CallToActionSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  const statsData = [
    {
      number: "200+",
      label: t("cta.stats.clients"),
    },
    {
      number: "10",
      label: t("cta.stats.experience"),
    },
    {
      number: "10",
      label: t("cta.stats.sports"),
    },
  ];

  return (
    <div className="cta-container">
      <div className="cta-content">
        {/* Image Section */}
        <div className="cta-image-section">
          <img
            src="/trainer10.png"
            alt={t("cta.imageAlt")}
            className="cta-trainer-image"
          />
        </div>

        {/* Content Section */}
        <div className="cta-text-section">
          {/* Header Content */}
          <div className="cta-header">
            <h2 className="cta-title">
              {t("cta.title")}
            </h2>

            <p className="cta-description">
              {t("cta.description")}
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
