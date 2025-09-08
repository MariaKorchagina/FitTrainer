import { Card, CardContent } from "../../../../components/ui/card";
import { useTranslation } from "react-i18next";
import "./QualificationsSection.css";

export const QualificationsSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  const certifications = [
    { id: 1, image: "/1.jpg" },
    { id: 2, image: "/2.jpg" },
    { id: 3, image: "/3.jpg" },
    { id: 4, image: "/4.jpg" },
    { id: 5, image: "/5.jpg" },
    { id: 6, image: "/6.jpg" },
    { id: 7, image: "/7.jpg" },
    { id: 8, image: "/8.jpg" },
    { id: 9, image: "/9.jpg" },
  ];

  return (
    <div className="qualifications-section">
      <div className="qualifications-container">
      <div className="qualifications-content">
        {/* Content Section */}
        <div className="qualifications-text-section">
          <div className="qualifications-header">
            <h2 className="qualifications-title">
              {t("qualifications.title")}
            </h2>

            <p className="qualifications-description">
              {t("qualifications.description")}
            </p>
          </div>

          {/* Certifications */}
          <div className="qualifications-certs">
            <div className="qualifications-certs-inner">
              {/* First set of certificates */}
              {certifications.map((cert, index) => (
                <Card
                  key={`first-${cert.id}`}
                  className="qualifications-cert-card"
                  style={
                    {
                      "--animation-delay": `${800 + index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <CardContent className="qualifications-cert-content">
                    <img
                      src={cert.image}
                      alt={t("qualifications.certificateAlt", { id: cert.id })}
                      className="qualifications-cert-image"
                    />
                  </CardContent>
                </Card>
              ))}
              {/* Second set for seamless loop */}
              {certifications.map((cert, index) => (
                <Card
                  key={`second-${cert.id}`}
                  className="qualifications-cert-card"
                  style={
                    {
                      "--animation-delay": `${800 + index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <CardContent className="qualifications-cert-content">
                    <img
                      src={cert.image}
                      alt={t("qualifications.certificateAlt", { id: cert.id })}
                      className="qualifications-cert-image"
                    />
                  </CardContent>
                </Card>
              ))}
              {/* Third set for continuous flow */}
              {certifications.map((cert, index) => (
                <Card
                  key={`third-${cert.id}`}
                  className="qualifications-cert-card"
                  style={
                    {
                      "--animation-delay": `${800 + index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <CardContent className="qualifications-cert-content">
                    <img
                      src={cert.image}
                      alt={t("qualifications.certificateAlt", { id: cert.id })}
                      className="qualifications-cert-image"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
};
