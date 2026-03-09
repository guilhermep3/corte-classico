"use client"
import { useState } from "react";
import { Slider } from "../slider"
import { slideData } from "@/data/slideData";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const Barbers = () => {
  const [currentSlide, setCurrentSlide] = useState(2);

  const handleSlidePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? slideData.length - 1 : prev - 1))
  }
  const handleSlideNext = () => {
    setCurrentSlide(prev => (prev === slideData.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="barbers-section" id="barbers">
      <h2 className="barbers-title">Nossos <span>barbeiros</span></h2>
      <div className="slider-container">
        <Slider currentSlide={currentSlide} />
      </div>
      <div className="slide-btn-area">
        <button onClick={handleSlidePrev}>
          <GrFormPrevious className="slide-btn" />
        </button>
        <button onClick={handleSlideNext}>
          <GrFormNext className="slide-btn" />
        </button>
      </div>
    </section>
  )
}