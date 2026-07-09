import { bio, areasOfInterest, news } from "@/data/content";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { PageTransition } from "@/components/PageTransition";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/4 shrink-0">
          <ProfileSidebar />
        </aside>

        {/* Main Content */}
        <div className="w-full md:w-3/4 lg:w-3/4 space-y-12">
          
          <section className="space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-wrap">
              {bio}
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold border-b border-border pb-2">Areas of Interest</h2>
            <div className="space-y-6">
              {areasOfInterest.map((area, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="font-semibold text-lg text-primary">{area.title}</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                    {area.items.map((item, i) => (
                      <li key={i} className="leading-snug">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold border-b border-border pb-2">Recent News</h2>
            <div className="space-y-4">
              {news.map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="font-mono text-sm font-medium text-muted-foreground w-12 shrink-0 pt-0.5">
                    [{item.year}]
                  </div>
                  <div className="text-foreground/90">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors inline-flex items-baseline gap-1">
                        {item.content}
                        <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity translate-y-0.5" />
                      </a>
                    ) : (
                      <span>{item.content}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
}
