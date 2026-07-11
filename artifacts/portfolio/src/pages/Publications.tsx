import { publications, conferenceProceedings, bookChapters } from "@/data/content";
import { PageTransition } from "@/components/PageTransition";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import React, { useState } from "react";

type Tab = "journals" | "conferences" | "chapters";

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <p className="text-muted-foreground text-sm leading-relaxed">
      {authors.map((author, index) => {
        const isGulzar = author.includes("Gulzar");
        return (
          <React.Fragment key={index}>
            <span className={isGulzar ? "font-bold text-foreground" : ""}>
              {author}
            </span>
            {index < authors.length - 1 ? ", " : ""}
          </React.Fragment>
        );
      })}
    </p>
  );
}

function FigureThumbnail({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div className="shrink-0 w-24 h-20 rounded-lg bg-muted border border-border/60 flex flex-col items-center justify-center gap-1 text-muted-foreground/40 hidden md:flex">
        <ImageIcon size={18} />
        <span className="text-[10px] font-mono">figure</span>
      </div>
    );
  }
  return (
    <div className="shrink-0 w-24 h-20 rounded-lg overflow-hidden border border-border/60 hidden md:flex">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

function PublicationCard({
  id,
  authors,
  year,
  title,
  venue,
  doi,
  url,
  figure,
}: {
  id: string;
  authors: string[];
  year: string;
  title: string;
  venue: string;
  doi?: string;
  url?: string;
  figure?: string;
}) {
  const link = doi || url;
  return (
    <div className="flex gap-4 md:gap-6 group hover:bg-muted/30 p-4 -mx-4 rounded-lg transition-colors border border-transparent hover:border-border/50">
      {/* Badge */}
      <div className="shrink-0 pt-1">
        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-mono font-medium rounded-md bg-secondary text-secondary-foreground border border-border">
          {id}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2 flex-1 min-w-0">
        <h3 className="text-base font-medium leading-snug">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>

        <AuthorList authors={authors} />

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <span className="italic text-sm text-foreground/80">{venue}, {year}</span>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 px-2 py-0.5 rounded transition-colors"
            >
              {doi ? "DOI" : "Link"} <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Figure thumbnail */}
      <FigureThumbnail src={figure} alt={`Figure for ${title}`} />
    </div>
  );
}

const TABS: { key: Tab; label: string; count: number }[] = [
  { key: "journals", label: "Journal Articles", count: publications.length },
  { key: "conferences", label: "Conference Presentations", count: conferenceProceedings.length },
  { key: "chapters", label: "Book Chapters", count: bookChapters.length },
];

export default function Publications() {
  const [activeTab, setActiveTab] = useState<Tab>("journals");

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-2 mb-8 border-b border-border pb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Publications</h1>
          <p className="text-muted-foreground text-lg">
            A reverse-chronological record of journal articles, conference presentations, and book chapters.
          </p>
        </header>

        {/* Tab bar */}
        <div className="flex gap-1 bg-muted/50 p-1 rounded-lg w-fit flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${
                activeTab === tab.key
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-mono ${
                activeTab === tab.key ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Journal Articles */}
        {activeTab === "journals" && (
          <div className="space-y-2">
            {publications.map((pub) => (
              <PublicationCard
                key={pub.id}
                id={pub.id}
                authors={pub.authors}
                year={pub.year}
                title={pub.title}
                venue={pub.journal}
                doi={pub.doi}
                figure={pub.figure}
              />
            ))}
          </div>
        )}

        {/* Conference Presentations */}
        {activeTab === "conferences" && (
          <div className="space-y-2">
            {conferenceProceedings.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground border border-dashed border-border rounded-xl">
                <p className="text-lg font-medium mb-1">Conference presentations coming soon</p>
                <p className="text-sm">This section will list conference papers, posters, and invited talks.</p>
              </div>
            ) : (
              conferenceProceedings.map((p) => (
                <PublicationCard
                  key={p.id}
                  id={p.id}
                  authors={p.authors}
                  year={p.year}
                  title={p.title}
                  venue={p.conference + (p.location ? `, ${p.location}` : "")}
                  url={p.url}
                  figure={p.figure}
                />
              ))
            )}
          </div>
        )}

        {/* Book Chapters */}
        {activeTab === "chapters" && (
          <div className="space-y-2">
            {bookChapters.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground border border-dashed border-border rounded-xl">
                <p className="text-lg font-medium mb-1">Book chapters coming soon</p>
                <p className="text-sm">This section will list contributed book chapters and edited volumes.</p>
              </div>
            ) : (
              bookChapters.map((ch) => (
                <PublicationCard
                  key={ch.id}
                  id={ch.id}
                  authors={ch.authors}
                  year={ch.year}
                  title={ch.title}
                  venue={ch.book + (ch.publisher ? `. ${ch.publisher}` : "")}
                  doi={ch.doi}
                  figure={ch.figure}
                />
              ))
            )}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
