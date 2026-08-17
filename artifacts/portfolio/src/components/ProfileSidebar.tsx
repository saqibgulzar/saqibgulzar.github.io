import { profile } from "@/data/content";
import { FaGoogleScholar, FaResearchgate, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GulzarLabLogo } from "./GulzarLabLogo";

export function ProfileSidebar() {
  return (
    <div className="flex flex-col items-center md:items-start space-y-6 md:sticky md:top-24">
      {/* Avatar */}
      <div className="w-48 h-48 rounded-full bg-muted flex items-center justify-center overflow-hidden border border-border shadow-sm mb-2">
        <span className="text-6xl font-serif text-muted-foreground/50 select-none">SG</span>
      </div>

      {/* Name + title */}
      <div className="text-center md:text-left space-y-1 w-full">
        <h1 className="text-2xl font-serif font-bold text-foreground">{profile.name}</h1>
        <p className="text-primary font-medium text-sm leading-snug">{profile.title}</p>
        <p className="text-primary/80 font-medium text-sm leading-snug">{profile.title2}</p>
        <p className="text-muted-foreground text-sm">{profile.institution}</p>
      </div>

      {/* Gulzar Lab badge */}
      <div className="flex items-center gap-2.5 bg-primary/8 border border-primary/20 rounded-xl px-4 py-2.5 w-full">
        <span className="text-primary shrink-0">
          <GulzarLabLogo size={28} />
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground leading-tight">{profile.lab}</p>
          <p className="text-xs text-muted-foreground leading-tight">Safety · Infrastructure · Resilience · Transportation</p>
        </div>
      </div>

      <div className="w-full h-px bg-border hidden md:block" />

      {/* Contact info */}
      <div className="text-center md:text-left text-sm text-muted-foreground space-y-2 w-full">
        <p className="flex items-center justify-center md:justify-start gap-2">
          <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">
            {profile.email}
          </a>
        </p>
        <p className="flex items-center justify-center md:justify-start gap-2">
          <a href={`tel:${profile.phone}`} className="hover:text-primary transition-colors">
            {profile.phone}
          </a>
        </p>
      </div>

      {/* Social icons */}
      <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
        <a
          href={profile.socials.email}
          className="text-muted-foreground hover:text-primary transition-colors"
          title="Email" target="_blank" rel="noreferrer"
        >
          <MdEmail size={22} />
        </a>
        <a
          href={profile.socials.googleScholar}
          className="text-muted-foreground hover:text-primary transition-colors"
          title="Google Scholar" target="_blank" rel="noreferrer"
        >
          <FaGoogleScholar size={20} />
        </a>
        <a
          href={profile.socials.researchGate}
          className="text-muted-foreground hover:text-primary transition-colors"
          title="ResearchGate" target="_blank" rel="noreferrer"
        >
          <FaResearchgate size={20} />
        </a>
        <a
          href={profile.socials.linkedIn}
          className="text-muted-foreground hover:text-primary transition-colors"
          title="LinkedIn" target="_blank" rel="noreferrer"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
}
