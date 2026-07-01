import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export type PortfolioIcon = LucideIcon | IconType;

export interface SocialLink {
  label: string;
  href: string;
  icon: PortfolioIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: PortfolioIcon;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: Skill[];
}

export interface TimelineItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  details: string;
  image: string;
  gallery: string[];
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}
