import { teachingCourses } from "@/data/content";
import { PageTransition } from "@/components/PageTransition";
import { BookOpen } from "lucide-react";

export default function Teaching() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-4 mb-10 border-b border-border pb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Teaching</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I am dedicated to educating the next generation of civil and transportation engineers. Coursework covers pavement materials, structural analysis, and infrastructure resilience at both undergraduate and graduate levels.
          </p>
        </header>

        <div className="space-y-4 bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 md:p-8 space-y-6">
            <h2 className="text-xl font-serif font-semibold flex items-center gap-2">
              <BookOpen className="text-primary" size={24} />
              Courses
            </h2>
            
            <div className="divide-y divide-border border border-border rounded-lg">
              {teachingCourses.map((course, idx) => (
                <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-muted/30 transition-colors">
                  <span className="font-medium text-foreground">{course.title}</span>
                  <span className="text-xs font-mono px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full w-fit">
                    {course.level}
                  </span>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground italic mt-6">
              * Course details and syllabi available upon request.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
