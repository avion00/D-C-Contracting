import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { categoryGroups, type CategoryGroup } from "@/data/projects";

const display = [
  { category: "KITCHEN", description: "Full remodels & custom finishes", span: "col-span-2 lg:col-span-4" },
  { category: "BATHROOM", description: "Modern remodels & tub installs", span: "col-span-1 lg:col-span-2" },
  { category: "TILE", description: "Precision tile work for any space", span: "col-span-1 lg:col-span-2" },
  { category: "FLOORING", description: "Hardwood, plank & laminate installs", span: "col-span-1 lg:col-span-2" },
  { category: "CONCRETE", description: "Driveways with clean broom finishes", span: "col-span-1 lg:col-span-2" },
  { category: "FRAMING", description: "Interior framing & rough-in", span: "col-span-1 lg:col-span-2" },
  { category: "BASEMENT", description: "Refresh & full basement remodels", span: "col-span-1 lg:col-span-2" },
  { category: "EXTERIOR", description: "Door installs, trim & curb appeal", span: "col-span-1 lg:col-span-2" },
];

const Lightbox = ({ group, onClose }: { group: CategoryGroup; onClose: () => void }) => {
  const [current, setCurrent] = useState(0);
  const items = group.items;
  const count = items.length;
  const item = items[current];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") setCurrent((i) => (i + 1) % count);
      else if (e.key === "ArrowLeft") setCurrent((i) => (i - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [count, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-label={`${group.category} gallery`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-10 py-5 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-amber-400" />
            <span className="text-amber-400 text-[11px] tracking-[0.3em] uppercase font-semibold">
              {group.category}
            </span>
          </div>
          {count > 1 && (
            <span className="text-white/50 text-sm tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Media */}
      <div
        className="relative flex-1 min-h-0 flex items-center justify-center px-4 md:px-24 pb-2"
        onClick={onClose}
      >
        {item.video ? (
          <video
            key={current}
            src={item.video}
            poster={item.image}
            autoPlay
            muted
            loop
            playsInline
            controls
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full object-contain rounded-lg animate-in fade-in duration-300"
          />
        ) : (
          <img
            key={current}
            src={item.image}
            alt={item.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full object-contain rounded-lg animate-in fade-in duration-300"
          />
        )}

        {count > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrent((i) => (i - 1 + count) % count);
              }}
              aria-label="Previous"
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber-400 hover:text-black text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrent((i) => (i + 1) % count);
              }}
              aria-label="Next"
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber-400 hover:text-black text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      <div className="px-6 md:px-10 py-6 shrink-0 text-center">
        <h3 className="text-white text-xl md:text-2xl font-light text-architectural mb-1.5">
          {item.title}
        </h3>
        <p className="text-white/55 text-sm max-w-2xl mx-auto leading-relaxed">{item.description}</p>

        {count > 1 && (
          <div className="flex items-center justify-center gap-2 mt-5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-7 bg-amber-400" : "w-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeGroup, setActiveGroup] = useState<CategoryGroup | null>(null);

  return (
    <section id="work" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">SELECTED WORK</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                Recent Projects
              </h3>
            </div>
            <Link
              to="/work"
              className="text-minimal border-b border-architectural pb-1 hover:opacity-60 transition-opacity self-start md:self-auto"
            >
              VIEW ALL PROJECTS →
            </Link>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5">
            {display.map((d, index) => {
              const group = categoryGroups.find((g) => g.category === d.category);
              if (!group) return null;
              const cover = group.items[0].image;
              const photoCount = group.items.length;

              return (
                <button
                  key={d.category}
                  onClick={() => setActiveGroup(group)}
                  className={`group relative overflow-hidden rounded-xl block h-64 lg:h-[340px] text-left ${d.span}`}
                >
                  <img
                    src={cover}
                    alt={d.category}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Index */}
                  <span className="absolute top-4 right-5 text-white/40 text-sm font-medium tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-5 h-px bg-amber-400" />
                      <h4 className="text-white text-lg font-medium text-architectural tracking-wide">
                        {d.category}
                      </h4>
                    </div>
                    <p className="text-white/75 text-sm leading-snug">{d.description}</p>
                    <div className="mt-3 inline-flex items-center gap-2 text-amber-400 text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {photoCount > 1 ? `View ${photoCount} photos` : "View project"}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {activeGroup && <Lightbox group={activeGroup} onClose={() => setActiveGroup(null)} />}
    </section>
  );
};

export default Portfolio;
