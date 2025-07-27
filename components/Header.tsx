"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandInfo,navLinks,ctaButtons } from "@/website-data/headerData";
import Logo from "./Logo";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed transition-all duration-500 ${
        isVisible ? "top-[22px] md:top-[32px]" : "-top-32"
      } left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[80%] max-w-6xl`}
    >
      <div className="bg-black/80 backdrop-blur-md border border-purple-500/30 rounded-xl md:rounded-2xl shadow-lg px-3 md:px-6 py-2 md:py-[20px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* <div className="flex items-center gap-2">
            <div className="relative">
               {brandInfo.logo ? <img src={brandInfo.logo} /> : <Globe className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />}
              <div className="absolute border border-[yellow] -top-1 -right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <span className="text-lg md:text-[22px] font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {brandInfo.name}
            </span>
          </div> */}
           <Logo />
          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 xl:gap-8">
            {navLinks.map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className="text-[16px] font-medium text-gray-300 hover:text-purple-400 transition-colors relative group"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
         <a  href={ctaButtons.contact.link} target="_blank" rel="noopener noreferrer">
            <Button  className="hidden sm:flex rounded-lg text-white md:rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 shadow-lg text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 h-8 md:h-9">
              {ctaButtons.contact.label}
            </Button>
         </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-purple-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-purple-500/30 animate-fade-down">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2 px-2 rounded-lg hover:bg-purple-500/10"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex h-9 items-center justify-center rounded-xl border border-purple-500/50 bg-black/50 px-4 py-2 text-sm font-medium shadow-sm transition-all hover:bg-purple-500/10 hover:text-purple-400 text-gray-300"
                >
                  Contact
                </Link>
                <Button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                >
                  {ctaButtons.mobile.label}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
