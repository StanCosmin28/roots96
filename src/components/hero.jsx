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

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-2 animate-fade-in-up font-serif">
          <span className="text-white">Roots96</span>
        </h1>
        <p className="text-xl md:text-3xl mb-8 animate-fade-in-up opacity-90 leading-relaxed italic">
          "healthy is the new cool"
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <button
            onClick={() => scrollToSection("#menu")}
            className="bg-primary hover:bg-secondary hover:text-black text-primary-foreground px-8 py-3 cursor-pointer rounded-sm transition-all duration-300 hover:scale-95"
          >
            Explore Menu
          </button>
          <button
            onClick={() => scrollToSection("#about")}
            className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 bg-transparent cursor-pointer rounded-sm transition-all duration-300 hover:scale-95"
          >
            Our Story
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown
          className="h-6 w-6 text-white cursor-pointer"
          onClick={() => scrollToSection("#about")}
        />
      </div>
    </section>
  );
}
