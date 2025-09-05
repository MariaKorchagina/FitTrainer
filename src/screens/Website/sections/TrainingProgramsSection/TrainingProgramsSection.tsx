import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useNavigate } from "react-router-dom";
import "./TrainingProgramsSection.css";

const trainingPrograms = [
  {
    title: "Personal Trainings",
    price: "200$",
    priceColor: "white",
    description: "Monthly Membership",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    featured: false,
    type: "personal",
  },
  {
    title: "Personal Training + Diet",
    price: "300$",
    priceColor: "red",
    description: "Monthly Membership",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    featured: true,
    type: "personal-diet",
  },
  {
    title: "Diet",
    price: "150$",
    priceColor: "white",
    description: "Monthly Membership",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    featured: false,
    type: "diet",
  },
];

export const TrainingProgramsSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <div className="training-programs-container">
      <div className="training-programs-content">
        {/* Header */}
        <header className="training-programs-header">
          <h2 className="training-programs-title">
            TRAINING PROGRAMS
          </h2>
          <p className="training-programs-subtitle">
            Choose your program
          </p>
        </header>

        {/* Programs Grid */}
        <div className="programs-grid">
          {trainingPrograms.map((program, index) => (
            <Card
              key={index}
              className={`program-card program-card--${program.type} ${program.featured ? 'program-card--featured' : ''}`}
              style={
                {
                  "--animation-delay": `${400 + index * 200}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="program-card-content">
                <h3 className="program-title">
                  {program.title}
                </h3>

                <div className={`program-price program-price--${program.priceColor}`}>
                  {program.price}
                </div>

                <p className="program-description">
                  {program.description}
                </p>

                <p className="program-details">
                  {program.details}
                </p>
              </CardContent>

              <Button className="program-button" onClick={handleGetStarted}>
                <span>Get Started</span>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
