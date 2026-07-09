import { publications } from "@/data/content";
import { PageTransition } from "@/components/PageTransition";
import { ExternalLink } from "lucide-react";
import React from "react";

export default function Publications() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-2 mb-10 border-b border-border pb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Publications</h1>
          <p className="text-muted-foreground text-lg">
            A reverse chronological list of journal publications. Conference papers, book chapters, and reports are available upon request.
          </p>
        </header>

        <div className="space-y-6">
          {publications.map((pub) => {
            return (
              <div 
                key={pub.id} 
                className="flex gap-4 md:gap-6 group hover:bg-muted/30 p-4 -mx-4 rounded-lg transition-colors border border-transparent hover:border-border/50"
              >
                {/* Badge */}
                <div className="shrink-0 pt-1">
                  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-mono font-medium rounded-md bg-secondary text-secondary-foreground border border-border">
                    {pub.id}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-medium leading-snug">
                    <a 
                      href={pub.doi} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-primary transition-colors flex items-start gap-1.5"
                    >
                      {pub.title}
                    </a>
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pub.authors.map((author, index) => {
                      const isGulzar = author.includes("Gulzar");
                      return (
                        <React.Fragment key={index}>
                          <span className={isGulzar ? "font-bold text-foreground" : ""}>
                            {author}
                          </span>
                          {index < pub.authors.length - 1 ? ", " : ""}
                        </React.Fragment>
                      );
                    })}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <span className="italic text-sm text-foreground/80">
                      {pub.journal}, {pub.year}
                    </span>
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 px-2 py-0.5 rounded transition-colors"
                    >
                      DOI <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
