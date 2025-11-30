"use client";
import { useState, useEffect, useCallback } from "react";
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
  const [targetIndex, setTargetIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const totalTestimonials = testimonialsData.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
  }, [totalTestimonials]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + totalTestimonials) % totalTestimonials,
    );
  }, [totalTestimonials]);

  const handleDotClick = (index: number) => {
    setTargetIndex(index);
    setIsSeeking(true);
    setIsPaused(true);
  };

  useEffect(() => {
    if (!isSeeking) return;

    if (currentIndex === targetIndex) {
      setIsSeeking(false);
      setIsPaused(false);
      return;
    }

    const distance =
      (targetIndex - currentIndex + totalTestimonials) % totalTestimonials;
    const isForward = distance < totalTestimonials / 2;

    const timeout = setTimeout(() => {
      if (isForward) handleNext();
      else handlePrev();
    }, 300);

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    targetIndex,
    isSeeking,
    handleNext,
    handlePrev,
    totalTestimonials,
  ]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
    if (!isSeeking) setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused || isSeeking) return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [isPaused, isSeeking, handleNext]);

  const getCardStyle = (index: number) => {
    const offset =
      (index - currentIndex + totalTestimonials) % totalTestimonials;

    let transform = "";
    let opacity = "0";
    let zIndex = 0;
    let pointerEvents = "none";

    if (!isMobile) {
      if (offset === 0) {
        transform = "translateX(5.5%) translateY(0) scale(1)";
        opacity = "1";
        zIndex = 30;
        pointerEvents = "auto";
      } else if (offset === 1) {
        transform = "translateX(100%) translateY(10%) scale(0.85)";
        opacity = "1";
        zIndex = 20;
      } else if (offset === totalTestimonials - 1) {
        transform = "translateX(-90%) translateY(10%) scale(0.85)";
        opacity = "1";
        zIndex = 20;
      } else if (offset === 2) {
        transform = "translateX(180%) translateY(10%) scale(0.5)";
        opacity = "0";
        zIndex = 10;
      } else if (offset === totalTestimonials - 2) {
        transform = "translateX(-180%) translateY(10%) scale(0.5)";
        opacity = "0";
        zIndex = 10;
      } else {
        transform = "translateX(5.5%) translateY(0) scale(0.5)";
        opacity = "0";
        zIndex = 5;
      }
    }
    // MOBILE LOGIC
    else {
      if (offset === 0) {
        transform = "translateX(5%) translateY(0) scale(1)";
        opacity = "1";
        zIndex = 30;
        pointerEvents = "auto";
      } else if (offset === 1) {
        transform = "translateX(100%) translateY(0) scale(0.9)";
        opacity = "0";
        zIndex = 20;
      } else if (offset === totalTestimonials - 1) {
        transform = "translateX(-100%) translateY(0) scale(0.9)";
        opacity = "0";
        zIndex = 20;
      } else {
        transform = "translateX(5%) translateY(0) scale(0.8)";
        opacity = "0";
        zIndex = 10;
      }
    }

    return {
      transform,
      opacity,
      zIndex,
      pointerEvents: pointerEvents as "none" | "auto",
    };
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => !isSeeking && setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative isolate flex min-h-[270px] mt-0 lg:mt-0 sm:mt-6 w-full flex-col items-center justify-center lg:min-h-[500px]"
    >
      <div className="relative flex h-full w-full items-center justify-center">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute transition-all ease-in-out will-change-transform ${isSeeking ? "duration-300" : "duration-700"}`}
            style={getCardStyle(index)}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>

      <div className="absolute -bottom-10 z-40 flex items-center gap-2">
        <button
          onClick={handlePrev}
          className="pointer-events-auto z-50 rounded-full p-2 pr-0 text-white transition-all hover:scale-120"
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-90"
          >
            <path
              d="M4 6.5L8 10.5L12 6.5"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              (isSeeking ? targetIndex : currentIndex) === index
                ? "w-6 bg-white"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
        <button
          onClick={handleNext}
          className="pointer-events-auto z-50 rounded-full p-2 pl-0 text-white transition-all hover:scale-120"
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-rotate-90"
          >
            <path
              d="M4 6.5L8 10.5L12 6.5"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
