import { researchAreas } from "@/data/content";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

// ─── Slideshow ─────────────────────────────────────────────────────────────────
function ResearchSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + researchAreas.length) % researchAreas.length), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % researchAreas.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, paused]);

  const area = researchAreas[current];

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-border shadow-md bg-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row min-h-[280px]"
        >
          {/* Text side */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest mb-2 block">
                Research Area {current + 1} of {researchAreas.length}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 leading-tight">
                {area.title}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-4">
                {area.description}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6">
              {researchAreas.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Figure side */}
          <div className="md:w-72 shrink-0 bg-muted/40 border-t md:border-t-0 md:border-l border-border flex items-center justify-center min-h-[180px]">
            {area.figure ? (
              <img src={area.figure} alt={area.title} className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-2 text-muted-foreground/40 p-8 text-center">
                <ImageIcon size={36} />
                <span className="text-xs font-mono">research figure</span>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 border border-border shadow-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 border border-border shadow-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

// ─── Sub-area card ─────────────────────────────────────────────────────────────
function SubareaCard({ title, description, figure }: { title: string; description: string; figure?: string }) {
  return (
    <div className="bg-muted/30 border border-border/60 rounded-xl p-5 hover:border-primary/30 hover:bg-muted/50 transition-all group">
      {figure && (
        <div className="w-full h-36 rounded-lg overflow-hidden mb-4 border border-border/40">
          <img src={figure} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      {!figure && (
        <div className="w-full h-28 rounded-lg mb-4 bg-background border border-dashed border-border/60 flex items-center justify-center text-muted-foreground/30 gap-2">
          <ImageIcon size={18} />
          <span className="text-xs font-mono">figure</span>
        </div>
      )}
      <h4 className="font-semibold text-sm text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
    </div>
  );
}

// ─── Research Area section ─────────────────────────────────────────────────────
function ResearchAreaSection({ area, idx }: { area: typeof researchAreas[0]; idx: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="border border-border rounded-2xl overflow-hidden bg-card shadow-sm"
    >
      {/* Area header */}
      <div className="p-6 md:p-8 border-b border-border bg-muted/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif font-bold text-lg shrink-0 mt-0.5">
            {idx + 1}
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-2">{area.title}</h2>
            <p className="text-sm text-primary font-medium mb-3">{area.tagline}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
          </div>
        </div>
      </div>

      {/* Sub-areas */}
      <div className="p-6 md:p-8">
        <h3 className="text-sm font-mono font-medium text-muted-foreground uppercase tracking-wider mb-4">
          Sub-research Areas
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {area.subareas.map((sub, i) => (
            <SubareaCard key={i} title={sub.title} description={sub.description} figure={sub.figure} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Research() {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="space-y-4 mb-6 border-b border-border pb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Research</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            My research spans multiscale mechanics, sustainable materials, and resilient infrastructure — centered on asphalt binder chemo-mechanics and its implications for pavement performance and climate adaptation.
          </p>
        </header>

        {/* Slideshow */}
        <ResearchSlideshow />

        {/* Detailed research areas */}
        <div className="space-y-8">
          <h2 className="text-2xl font-serif font-bold text-foreground">Research Areas</h2>
          {researchAreas.map((area, idx) => (
            <ResearchAreaSection key={area.id} area={area} idx={idx} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
