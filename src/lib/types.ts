import { LucideIcon } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
};

export type Professor = {
  name: string;
  title: string;
  tagline: string;
  department: string;
  university: string;
  biography: string[];
  academicPhilosophy: string;
  researchInterests: string[];
  careerTimeline: {
    year: string;
    title: string;
    institution: string;
  }[];
  highlights: {
    experience: number;
    publications: number;
    students: number;
  };
  contact: {
    address: string;
    email: string;
    phone: string;
    profiles: {
      googleScholar: string;
      researchGate: string;
      orcid: string;
      linkedin: string;
    };
  };
};

export type Education = {
  degree: string;
  institution: string;
  year: number;
  specialization: string;
  achievements: string[];
};

export type ResearchArea = {
  id: string;
  title: string;
  summary: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  role: "Principal Investigator (PI)" | "Co-Principal Investigator (Co-PI)";
  fundingAgency: string;
  duration: string;
  outcomes: string;
  status: "Ongoing" | "Completed";
};

export type Publication = {
  category: "Journal Papers" | "Conference Papers" | "Books/Chapters";
  title:string;
  authors: string;
  year: number;
  venue: string;
  abstract: string;
  doi: string;
  citationCount: number;
};

export type Course = {
  code: string;
  title: string;
};

export type StudentInfo = {
  stats: {
    phd: number;
    masters: number;
    undergrad: number;
  };
  currentScholars: {
    name: string;
    topic: string;
  }[];
  notableAlumni: {
    name: string;
    achievement: string;
  }[];
};
