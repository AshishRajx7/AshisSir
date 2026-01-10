import Link from "next/link";
import { professorData, navLinks } from "@/lib/data";
import { GoogleScholarIcon, OrcidIcon, ResearchGateIcon } from "../icons";
import { Linkedin } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {professorData.name}. All Rights Reserved.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={professorData.contact.profiles.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <GoogleScholarIcon className="h-5 w-5" />
          </a>
          <a
            href={professorData.contact.profiles.researchGate}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ResearchGate"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <ResearchGateIcon className="h-5 w-5" />
          </a>
          <a
            href={professorData.contact.profiles.orcid}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ORCID"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <OrcidIcon className="h-5 w-5" />
          </a>
          <a
            href={professorData.contact.profiles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
