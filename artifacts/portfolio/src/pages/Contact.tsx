import { profile } from "@/data/content";
import { PageTransition } from "@/components/PageTransition";
import { Mail, MapPin, Phone, Building } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <header className="space-y-4 mb-10 border-b border-border pb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Contact</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Feel free to reach out for research collaborations, student opportunities, or general inquiries.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm space-y-6">
              
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-primary transition-colors block">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href={`tel:${profile.phone}`} className="text-muted-foreground hover:text-primary transition-colors block">
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <Building className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-muted-foreground">{profile.office}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Mailing Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Southern Colorado Institute of Transportation Technology (SCITT)<br />
                    {profile.institution}
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="h-full min-h-[300px] w-full bg-muted border border-border rounded-xl flex items-center justify-center overflow-hidden relative group">
            {/* Minimal static map placeholder for styling purposes */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-border to-transparent" />
            <div className="text-center z-10 p-6">
              <MapPin className="text-muted-foreground mx-auto mb-3 opacity-50" size={32} />
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                CSU Pueblo Campus
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
