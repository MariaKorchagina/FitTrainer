import { PlayIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "./CallToActionSection.css";

export const CallToActionSection = (): JSX.Element => {
  const statsData = [
    {
      number: "2000+",
      label: "Satisfied Clients",
    },
    {
      number: "10",
      label: "Years of Experience",
    },
    {
      number: "15",
      label: "Years in Sport",
    },
  ];

  return (
    <div className="cta-container">
      <div className="cta-content">
        {/* Video Section */}
        <div className="cta-video-section">
          <div
            className="cta-video-background"
            style={{
              backgroundImage:
                "url(https://c.animaapp.com/mf57cyx5gYVcx1/img/woman-doing-workout-gym-with-trainer.png)",
            }}
          >
            {/* Play Button Overlay */}
            <div className="cta-play-overlay">
              <div className="cta-play-button">
                <div className="cta-play-button-bg" />
                <div className="cta-play-icon-container">
                  <PlayIcon className="cta-play-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="cta-text-section">
          {/* Header Content */}
          <div className="cta-header">
            <h2 className="cta-title">
              WHO IS JOHN?
            </h2>

            <p className="cta-description">
              As a passionate personal trainer, I believe in empowering
              individuals to achieve their fitness goals through personalized
              coaching and support.
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
