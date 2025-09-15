import { useEffect } from "react";
import data from "../Model/data";
import { ArrowDown } from "lucide-react";

const { hero } = { ...data };

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const parallaxBg = document.querySelector(".parallax-bg");
      if (parallaxBg) {
        const scrollPosition = window.scrollY;
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Content animations
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".hero-animate");
      elements.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 parallax-bg will-change-transform"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          imageRendering: "auto", // Ensures sharp rendering
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1
          className="text-6xl md:text-7xl font-bold mb-2 font-serif hero-animate"
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          <span className="text-white">Roots96</span>
        </h1>
        <p
          className="text-xl md:text-3xl mb-8 opacity-90 leading-relaxed italic hero-animate"
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s",
          }}
        >
          "healthy is the new cool"
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center hero-animate"
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s",
          }}
        >
          <button
            onClick={() => scrollToSection("#menu")}
            className="bg-primary hover:bg-secondary hover:text-black text-primary-foreground px-8 py-3 cursor-pointer rounded-sm transition-all duration-300 hover:scale-95"
          >
            Explore Menu
          </button>
          <button
            onClick={() => scrollToSection("#about")}
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 bg-transparent cursor-pointer rounded-sm transition-all duration-300 hover:scale-95"
          >
            Our Story
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown
          className="h-8 w-8 text-white cursor-pointer"
          onClick={() => scrollToSection("#about")}
        />
      </div>
    </section>
  );
}
