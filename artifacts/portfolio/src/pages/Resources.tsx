import { resources } from "@/data/content";
import { PageTransition } from "@/components/PageTransition";
import { ExternalLink, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Resources() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-3 mb-8 border-b border-border pb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Resources</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A curated collection of tools, datasets, software, and reading materials useful for students and researchers in infrastructure materials and transportation engineering.
          </p>
        </header>

        {resources.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground border border-dashed border-border rounded-2xl">
            <FolderOpen size={40} className="mx-auto mb-3 opacity-30" />
            <p className="text-xl font-serif font-medium mb-2">Resources coming soon</p>
            <p className="text-sm max-w-sm mx-auto">
              Links to software, datasets, guides, and other materials for pavement engineering and infrastructure research will be listed here.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {resources.map((category, catIdx) => (
              <motion.section
                key={catIdx}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.08, duration: 0.4 }}
              >
                <h2 className="text-lg font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-primary rounded-sm shrink-0" />
                  {category.category}
                </h2>
                <div className="divide-y divide-border border border-border rounded-xl overflow-hidden bg-card">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-muted/30 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.title}</p>
                        {item.description && (
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.description}</p>
                        )}
                      </div>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-colors"
                        >
                          Visit <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
