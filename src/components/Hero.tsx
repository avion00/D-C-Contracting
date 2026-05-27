import { useEffect, useState } from "react";
import heroKitchen from "@/assets/project-kitchen-1.jpg";
import heroBathroom from "@/assets/project-bathroom-1.jpg";
import heroConcrete from "@/assets/project-concrete.jpg";
import heroFlooring from "@/assets/project-flooring-1.jpg";
import heroExterior from "@/assets/project-exterior-1.jpg";
import heroBasement from "@/assets/project-basement-1.jpg";

const slides = [heroKitchen, heroBathroom, heroConcrete, heroFlooring, heroExterior, heroBasement];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ease-in-out"
          style={{
            backgroundImage: `url(${src})`,
            opacity: current === i ? 1 : 0,
            transform: current === i ? "scale(1.05)" : "scale(1)",
            transition: "opacity 1500ms ease-in-out, transform 6000ms ease-out",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h2 className="text-minimal text-white/70 mb-6 tracking-[0.3em]">D&amp;C CONTRACTING</h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white text-architectural mb-8 reveal drop-shadow-2xl leading-[0.95]">
          BUILT TO
          <br />
          <span className="italic font-light">last.</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide max-w-2xl mx-auto reveal-delayed">
          Painting, drywall, tiling, flooring, electrical, landscaping &amp; more —
          come home to quality.
        </p>

        {/* Slide indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-[2px] transition-all duration-500 ${
                current === i ? "w-12 bg-white" : "w-6 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className="w-px h-16 bg-white/40 mx-auto" />
        <div className="text-minimal text-white/60 mt-4">SCROLL</div>
      </div>
    </section>
  );
};

export default Hero;
