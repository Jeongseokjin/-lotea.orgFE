'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  bgImage?: string; // 이미지 파일 경로
}

const slides: SlideData[] = [
  {
    id: 1,
    title: '스마트물류로\n미래를 연결합니다',
    subtitle: '물류산업의 디지털 혁신과 지속 가능한 성장을 이끌어갑니다',
    bgImage: '/images/hero-1.jpg',
  },
  {
    id: 2,
    title: '스마트물류로\n미래를 연결합니다',
    subtitle: '물류산업의 디지털 혁신과 지속 가능한 성장을 이끌어갑니다',
    bgImage: '/images/hero-2.jpg',
  },
  {
    id: 3,
    title: '스마트물류로\n미래를 연결합니다',
    subtitle: '물류산업의 디지털 혁신과 지속 가능한 성장을 이끌어갑니다',
    bgImage: '/images/hero-3.jpg',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 자동 슬라이드 (5초마다)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // 호버 시 자동 재생 일시 정지
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section 
      className="hero-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 슬라이드들 */}
      <div 
        className="hero-slides"
        style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="hero-slide">
            {/* 배경 이미지 영역 */}
            <div className="hero-slide-bg">
              {slide.bgImage ? (
                <Image
                  src={slide.bgImage}
                  alt={`슬라이드 ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
              ) : (
                <div className="hero-slide-bg-placeholder">
                  배경 이미지 공간 (슬라이드 {index + 1})
                </div>
              )}
            </div>
            
            {/* 텍스트 콘텐츠 */}
            <div className="hero-slide-content">
              <h1 className="hero-slide-title">
                {slide.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < slide.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="hero-slide-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 좌측 화살표 */}
      <button className="hero-arrow hero-arrow-left" onClick={prevSlide}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>

      {/* 우측 화살표 */}
      <button className="hero-arrow hero-arrow-right" onClick={nextSlide}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
        </svg>
      </button>

      {/* 도트 인디케이터 */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
