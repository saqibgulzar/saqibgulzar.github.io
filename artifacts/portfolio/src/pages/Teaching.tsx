import { teachingCourses, teachingPhilosophy, aiAppsForLearning } from "@/data/content";
import { PageTransition } from "@/components/PageTransition";
import { BookOpen, Cpu, ExternalLink, Image as ImageIcon } from "lucide-react";

function CourseBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    "Undergraduate": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    "Graduate": "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
    "Undergraduate/Graduate": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  };
  return (
    <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium w-fit ${colors[level] ?? "bg-secondary text-secondary-foreground"}`}>
      {level}
    </span>
  );
}

export default function Teaching() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4 mb-8 border-b border-border pb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Teaching</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I am dedicated to educating the next generation of civil and transportation engineers through active, inquiry-driven learning.
          </p>
        </header>

        {/* Teaching Philosophy */}
        <section className="bg-primary/5 border border-primary/15 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-serif font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-2 h-6 bg-primary rounded-sm shrink-0" />
            Teaching Philosophy
          </h2>
          <p className="text-muted-foreground leading-relaxed">{teachingPhilosophy}</p>
        </section>

        {/* Courses */}
        <section>
          <h2 className="text-xl font-serif font-semibold flex items-center gap-2 mb-6 text-foreground">
            <BookOpen className="text-primary" size={22} />
            Courses
          </h2>
          <div className="space-y-4">
            {teachingCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-5 md:p-6 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    {course.code && (
                      <span className="text-xs font-mono text-muted-foreground mb-1 block">{course.code}</span>
                    )}
                    <h3 className="font-semibold text-foreground text-base">{course.title}</h3>
                  </div>
                  <CourseBadge level={course.level} />
                </div>
                {course.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic mt-4 px-1">
            * Syllabi and course materials available upon request.
          </p>
        </section>

        {/* AI Apps for Learning */}
        <section>
          <h2 className="text-xl font-serif font-semibold flex items-center gap-2 mb-2 text-foreground">
            <Cpu className="text-primary" size={22} />
            AI Applications for Learning
          </h2>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            I develop interactive AI-powered tools to help students explore and visualize concepts in pavement engineering and infrastructure systems.
          </p>

          {aiAppsForLearning.length === 0 ? (
            <div className="text-center py-14 text-muted-foreground border border-dashed border-border rounded-xl">
              <Cpu size={36} className="mx-auto mb-3 opacity-30" />
              <p className="text-base font-medium mb-1">AI learning tools coming soon</p>
              <p className="text-sm">Interactive simulations and AI-assisted learning apps will be listed here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {aiAppsForLearning.map((app, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  {/* Figure */}
                  <div className="h-40 bg-muted/50 border-b border-border flex items-center justify-center">
                    {app.figure ? (
                      <img src={app.figure} alt={app.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-muted-foreground/30">
                        <ImageIcon size={28} />
                        <span className="text-xs font-mono">app screenshot</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{app.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{app.description}</p>
                    {app.tags && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {app.tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{tag}</span>
                        ))}
                      </div>
                    )}
                    {app.url && (
                      <a
                        href={app.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                      >
                        Launch App <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  );
}
