import { vignettes } from "@/data/content";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { CalendarDays, Tag } from "lucide-react";

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return dateStr;
  }
}

export default function Vignettes() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-3 mb-8 border-b border-border pb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Vignettes</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Short essays, reflections, and notes on infrastructure, materials science, and academia — written for curious minds inside and outside the field.
          </p>
        </header>

        {vignettes.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground border border-dashed border-border rounded-2xl">
            <p className="text-xl font-serif font-medium mb-2">Vignettes coming soon</p>
            <p className="text-sm max-w-sm mx-auto">
              Short essays and reflections on infrastructure, materials science, and the academic experience will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {vignettes.map((v, idx) => (
              <motion.article
                key={v.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-mono">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={12} />
                    {formatDate(v.date)}
                  </span>
                </div>
                <h2 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {v.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{v.summary}</p>
                {v.tags && (
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <Tag size={12} className="text-muted-foreground/50" />
                    {v.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
