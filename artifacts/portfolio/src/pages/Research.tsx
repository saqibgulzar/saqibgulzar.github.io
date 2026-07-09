import { researchPillars } from "@/data/content";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";

export default function Research() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-4 mb-10 border-b border-border pb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Research</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            My research encompasses the broad areas of multiscale mechanics, sustainable materials, and resilient infrastructure. It primarily centers around asphalt binder chemo-mechanics, followed by asphalt mixture performance testing and multiscale modeling across the binder and mixture scales.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-card text-card-foreground rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif font-bold text-xl mb-4 shrink-0">
                {idx + 1}
              </div>
              <h2 className="text-xl font-serif font-semibold mb-4 text-foreground">
                {pillar.title}
              </h2>
              <ul className="space-y-2 mt-auto">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 shrink-0">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
