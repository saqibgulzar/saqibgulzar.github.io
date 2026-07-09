import { profile } from "@/data/content";
import { FaGoogleScholar, FaResearchgate, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export function ProfileSidebar() {
  return (
    <div className="flex flex-col items-center md:items-start space-y-6 md:sticky md:top-24">
      {/* Avatar Placeholder */}
      <div className="w-48 h-48 rounded-full bg-muted flex items-center justify-center overflow-hidden border border-border shadow-sm mb-2">
        <span className="text-6xl font-serif text-muted-foreground/50 select-none">SG</span>
      </div>

      <div className="text-center md:text-left space-y-1 w-full">
        <h1 className="text-2xl font-serif font-bold text-foreground">{profile.name}</h1>
        <p className="text-primary font-medium">{profile.title}</p>
        <p className="text-muted-foreground text-sm">{profile.institution}</p>
      </div>

      <div className="w-full h-px bg-border my-2 hidden md:block" />

      <div className="text-center md:text-left text-sm text-muted-foreground space-y-2 w-full">
        <p className="flex items-center justify-center md:justify-start gap-2">
          <span>{profile.office}</span>
        </p>
        <p className="flex items-center justify-center md:justify-start gap-2">
          <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">{profile.email}</a>
        </p>
        <p className="flex items-center justify-center md:justify-start gap-2">
          <a href={`tel:${profile.phone}`} className="hover:text-primary transition-colors">{profile.phone}</a>
        </p>
      </div>

      <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
        <a href={profile.socials.email} className="text-muted-foreground hover:text-primary transition-colors" title="Email" target="_blank" rel="noreferrer">
          <MdEmail size={22} />
        </a>
        <a href={profile.socials.googleScholar} className="text-muted-foreground hover:text-primary transition-colors" title="Google Scholar" target="_blank" rel="noreferrer">
          <FaGoogleScholar size={20} />
        </a>
        <a href={profile.socials.researchGate} className="text-muted-foreground hover:text-primary transition-colors" title="ResearchGate" target="_blank" rel="noreferrer">
          <FaResearchgate size={20} />
        </a>
        <a href={profile.socials.linkedIn} className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn" target="_blank" rel="noreferrer">
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
}
