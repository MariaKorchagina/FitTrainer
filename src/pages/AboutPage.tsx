import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import "./AboutPage.css";

export const AboutPage = (): JSX.Element => {
  const achievements = [
    { number: "2000+", label: "Satisfied Clients" },
    { number: "10", label: "Years of Experience" },
    { number: "15", label: "Years in Sport" },
    { number: "50+", label: "Certifications" },
  ];

  return (
    <div className="about-page">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="about-hero">
          <h1 className="about-title">
            ABOUT JOHN DOE
          </h1>
          <p className="about-subtitle">
            Passionate fitness professional dedicated to transforming lives through personalized training and nutrition guidance.
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Image */}
          <div className="about-image">
            <img
              alt="John Doe - Personal Trainer"
              src="https://c.animaapp.com/mf57cyx5gYVcx1/img/handsome-strong-man-exercising-gym-1.png"
            />
          </div>

          {/* Content */}
          <div className="about-text">
            <h2>MY STORY</h2>
            <div className="space-y-6">
              <p>
                My fitness journey began over 15 years ago when I discovered the transformative power of exercise and proper nutrition. What started as a personal quest for health became a lifelong passion for helping others achieve their goals.
              </p>
              <p>
                With over 10 years of professional experience, I've had the privilege of working with clients from all walks of life - from beginners taking their first steps into fitness to athletes pushing their limits.
              </p>
              <p>
                My approach combines evidence-based training methods with personalized nutrition strategies, ensuring each client receives a program tailored to their unique needs, goals, and lifestyle.
              </p>
            </div>

            <button className="about-button">
              <span>Start Your Journey</span>
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
          <h2>MY PHILOSOPHY</h2>
          <p>
            "Fitness is not about being better than someone else. It's about being better than you used to be. 
            Every small step forward is a victory worth celebrating, and I'm here to guide you through every rep, 
            every meal, and every milestone on your journey to becoming the best version of yourself."
          </p>
        </div>
      </div>
    </div>
  );
};
