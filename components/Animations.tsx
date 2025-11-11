"use client";
import { useState, useEffect } from "react";
import { TestimonialCard } from "./Cards";

interface TestimonialCardProps {
  testimonialsData: {
    title: string;
    description: string;
    greScore: number | `${number}`;
    name: string;
    linkedin: string;
    designation: string;
    imgSrc: string;
  }[];
}

export function TestimonialCarousel({
  testimonialsData,
}: TestimonialCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalTestimonials = testimonialsData.length;

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, totalTestimonials]);

  const getCardStyle = (index: number) => {
    const offset =
      (index - currentIndex + totalTestimonials) % totalTestimonials;

    let transform = "";
    let opacity = "0";
    let zIndex = 0;
    let display = "hidden";

    switch (offset) {
      case 0:
        transform = "translateX(5%) translateY(0) scale(1)";
        opacity = "1";
        zIndex = 30;
        display = "block";
        break;
      case 1: 
        transform = "translateX(130%) translateY(20%) scale(0.95)";
        opacity = "1";
        zIndex = 20;
        display = "hidden xl:block";
        break;
      case totalTestimonials - 1:
        transform = "translateX(-120%) translateY(20%) scale(0.95)";
        opacity = "1";
        zIndex = 20;
        display = "hidden xl:block";
        break;
      case totalTestimonials - 2: 
        transform = "translateX(-180%) translateY(40%) scale(0.8)";
        opacity = "0";
        zIndex = 10;
        display = "hidden";
        break;
      default:
        transform = "translateX(180%) translateY(40%) scale(0.8)";
        opacity = "0";
        zIndex = 10;
        display = "hidden";
        break;
    }

    return {
      transform,
      opacity,
      zIndex,
      display,
    };
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative flex min-h-[200px] w-full items-center justify-center sm:min-h-[300px] lg:min-h-[450px]"
    >
      {testimonialsData.map((testimonial, index) => (
        <div
          key={index}
          className="absolute flex transition-all duration-1000 ease-in-out"
          style={getCardStyle(index)}
        >
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </div>
  );
}
