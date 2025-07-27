import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import '../app/styles/heroStyles.css';
import { heroData } from '@/website-data/websiteData';
import Link from 'next/link';
import { isExternal } from 'util/types';

// Background component
const HeroBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-black to-purple-900/20">
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
    <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full blur-3xl animate-float-slow"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-3xl animate-float-delayed"></div>
  </div>
);

// Hero title
const HeroTitle = () => (
  <h1 className="text-[28px] [&>span]:leading-[42px] md:[&>span]:leading-[52px] lg:[&>span]:leading-[82px] md:text-4xl lg:text-5xl xl:text-[54px] font-medium tracking-tight">
    {heroData.titleLines.map((line, i) => (
      <span
        key={i}
        className={`block ${
          i === 1 ? 'bg-gradient-to-r ml-[16px] from-purple-400 to-violet-400 bg-clip-text text-transparent' : ''
        } animate-fade-right relative`}
        style={{ animationDelay: `${i * 200}ms` }}
      >
        {line}
        {i === 0 && (
          <svg
            className="absolute -top-1 -right-4 w-6 h-6 text-yellow-400 animate-bounce"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
      </span>
    ))}
  </h1>
);

// Subtitle
const HeroSubtitle = () => (
  <p
    style={{ animationDelay: '600ms' }}
    className="line-1 hidden sm:block text-base md:text-[18px] text-gray-300 overflow-hidden whitespace-nowrap border-r-2 border-purple-500 animate-typewriter"
  >
    <span className="hidden sm:inline">{heroData.subtitle.full}</span>
    <span className="sm:hidden">{heroData.subtitle.mobile}</span>
  </p>
);


const HeroButtons = () => {
  

  return (
    <div
      className="flex justify-center items-center flex-col sm:flex-row gap-4 animate-fade-up"
      style={{ animationDelay: "1000ms" }}
    >
      {heroData.buttons.map((btn, idx) => (
        <a
          key={idx}
          href={btn.link}
          {...(isExternal(btn.link) && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
        >
          <Button
            size="xl"
            variant={btn.variant === "outline" ? "outline" : undefined}
            className={
              btn.variant === "outline"
                ? "group bg-white/10 hover:bg-white/20 border-purple-500/50 hover:border-purple-400 transition-all duration-300 text-white"
                : "group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            }
          >
            <span className="relative z-10 flex items-center">
              {btn.label}
              {btn.icon === "arrow-right" && (
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              )}
              {btn.icon === "arrow-long" && (
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              )}
            </span>
          </Button>
        </a>
      ))}
    </div>
  );
};



// Stats
const HeroStats = () => (
  <div className="flex flex-wrap justify-center gap-6 pt-6 animate-fade-up" style={{ animationDelay: '1200ms' }}>
    {heroData.stats.map((stat, index) => (
      <div key={index} className="text-center group">
        <div className={`text-[28px] 2xl:text-[28px] font-bold text-${stat.color}-400 group-hover:scale-110 transition-transform duration-300`}>
          {stat.number}
        </div>
        <div className="text-[14px] text-gray-400 group-hover:text-white transition-colors">{stat.label}</div>
      </div>
    ))}
  </div>
);

// Hero Section
const HeroSection = () => (
  <section className="relative w-full py-16 md:py-24 lg:py-30 xl:py-32 bg-black text-white overflow-hidden">
    <HeroBackground />
    <div className="container mx-auto px-4 md:px-6 z-10">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mt-[80px] space-y-[22px]">
          <HeroTitle />
          <HeroSubtitle />
        </div>
        <div className="mt-[32px]">
          <HeroButtons />
          <HeroStats />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
