import {
  Award,
  BadgeCheck,
  Braces,
  Code2,
  Database,
  FileCode2,
  Flame,
  Globe2,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  MonitorSmartphone,
  Phone,
  Server,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiDart,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type {
  Certificate,
  ContactInfo,
  EducationItem,
  Project,
  SkillGroup,
  SocialLink,
  Stat,
  TimelineItem,
} from "../types/portfolio";

export const personalInfo = {
  name: "Abhishek Kumar Saxena",
  profession: "Flutter Developer",
  location: "Noida, Uttar Pradesh",
  resumeUrl: "/Resume_abhi.pdf.pdf",
  avatarUrl: "/abhi_anime.png",
  heroImage: "/hover.jpg",
  intro:
    "Flutter Developer experienced in Flutter, Dart, GetX, REST APIs, Firebase, MVC architecture, SharedPreferences, Git/GitHub, and Play Store deployment.",
  availability:
    "Open to Flutter Developer roles, internships, freelance apps, and product teams.",
  summary:
    "I build cross-platform Android and iOS applications with responsive UI, clean state management, API-driven workflows, and production-ready debugging habits.",
  highlights: [
    "Flutter, Dart, GetX, Provider, MVC, MVVM",
    "REST APIs, JSON parsing, Firebase Auth, FCM",
    "Razorpay, Cloudinary, SharedPreferences, Hive",
    "Git, GitHub, Postman, Figma, Play Store deployment",
  ],
  typingRoles: [
    "Flutter App Developer",
    "Dart & GetX Specialist",
    "REST API Integrator",
    "Firebase App Builder",
  ],
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/abhishek243641",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishek-kumar-saxena-5b410a243/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:abhisheksaxena9574@gmail.com",
    icon: Mail,
  },
];

export const aboutCards = [
  {
    icon: Sparkles,
    label: "Flutter Product Craft",
    value:
      "Responsive mobile UI with clean architecture, reusable widgets, and polished interaction.",
  },
  {
    icon: MonitorSmartphone,
    label: "App Engineering",
    value:
      "REST APIs, Firebase, SharedPreferences, GetX, MVC, MVVM, and deployment-ready workflows.",
  },
  {
    icon: Flame,
    label: "Career Objective",
    value:
      "Build reliable mobile products where performance, UX, maintainability, and business outcomes matter.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile App",
    description:
      "Flutter app development with clean widgets, state management, and responsive layouts.",
    skills: [
      { name: "Flutter", level: 92, icon: SiFlutter },
      { name: "Dart", level: 90, icon: SiDart },
      { name: "GetX", level: 88, icon: Braces },
      { name: "Provider", level: 78, icon: Layers3 },
      { name: "MVC / MVVM", level: 84, icon: Code2 },
      { name: "Responsive UI", level: 90, icon: MonitorSmartphone },
      { name: "Play Store Deployment", level: 74, icon: Globe2 },
    ],
  },
  {
    title: "Data & APIs",
    description:
      "Backend integrations, local storage, authentication, parsing, and secure app workflows.",
    skills: [
      { name: "REST APIs", level: 88, icon: Server },
      { name: "JSON Parsing", level: 86, icon: FileCode2 },
      { name: "Firebase", level: 82, icon: SiFirebase },
      { name: "Firebase Auth", level: 80, icon: BadgeCheck },
      { name: "Firebase Cloud Messaging", level: 76, icon: Mail },
      { name: "SharedPreferences", level: 84, icon: Database },
      { name: "Hive", level: 72, icon: Database },
    ],
  },
  {
    title: "Tools",
    description:
      "Development workflow, testing tools, collaboration, debugging, and design handoff.",
    skills: [
      { name: "Git", level: 86, icon: Terminal },
      { name: "GitHub", level: 86, icon: FaGithub },
      { name: "VS Code", level: 94, icon: VscVscode },
      { name: "Postman", level: 78, icon: SiPostman },
      { name: "Figma", level: 82, icon: SiFigma },
      { name: "Team Collaboration", level: 86, icon: Users },
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    role: "Flutter Developer",
    company: "BitmaxTechnology",
    period: "Sep 2025 - Present",
    location: "Noida",
    description:
      "Developing cross-platform mobile applications using Flutter and Dart with modern design practices.",
    highlights: [
      "Built responsive and reusable UI components following modern design standards.",
      "Integrated REST APIs and managed application state using GetX and MVC architecture.",
      "Optimized app performance, fixed bugs, and enhanced user experience across screens.",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "BM Digital Utilization",
    period: "June 2, 2025 - September 5, 2025",
    location: "Noida",
    description:
      "Worked on cross-platform mobile applications for Android and iOS with frontend UI and API integration responsibilities.",
    highlights: [
      "Developed and maintained Flutter applications using Dart.",
      "Designed and implemented responsive, user-friendly mobile screens.",
      "Integrated RESTful APIs and managed application data efficiently.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "RideWithGuide App",
    description:
      "Cross-platform Flutter application connecting tourists with verified rider-guides across 8+ cities through dedicated Tourist and Rider apps.",
    details:
      "RideWithGuide is a two-sided Flutter product built for tourists and rider-guides. It includes booking management, rider dashboards, profile management, trip tracking, Razorpay payments, Cloudinary media uploads, secure onboarding workflows, live chat, GPS tracking, and persistent user sessions.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85",
    ],
    techStack: ["Flutter", "Dart", "GetX", "REST APIs", "Razorpay", "Cloudinary"],
    features: [
      "Tourist and Rider app flows",
      "Booking management and rider dashboards",
      "Razorpay payment gateway",
      "Cloudinary media services",
      "GPS tracking and live chat",
      "Secure onboarding and session storage",
    ],
    githubUrl: "https://github.com/abhishek243641",
    liveUrl: "https://example.com",
  },
  {
    title: "Bitmax App",
    description:
      "Attendance and leave management app with attendance marking, leave requests, employee workflows, notifications, and optimized synchronization.",
    details:
      "Bitmax App is an attendance and employee workflow system built in Flutter. It includes attendance marking, leave management, daily task workflows, responsive employee/admin screens, notification handling, leave requests, profile updates, and optimized REST API synchronization.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    ],
    techStack: ["Flutter", "GetX", "MVC", "REST APIs", "Notifications"],
    features: [
      "Attendance marking",
      "Leave request workflow",
      "Employee and admin UI",
      "REST API data synchronization",
      "Notification-driven updates",
      "Performance-focused debugging",
    ],
    githubUrl: "https://github.com/abhishek243641",
    liveUrl: "https://example.com",
  },
  {
    title: "Taste Of Bihar App",
    description:
      "Restaurant app with listings, product details, cart management, order tracking, and intuitive responsive Flutter screens.",
    details:
      "Taste Of Bihar is a restaurant ordering app focused on smooth food discovery and checkout flow. It includes food listings, product detail pages, cart management, order status tracking, restaurant branding, responsive UI, and clean state handling.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=900&q=85",
    ],
    techStack: ["Flutter", "Dart", "State Management", "Responsive UI"],
    features: [
      "Food listing screens",
      "Product detail views",
      "Cart management",
      "Order status tracking",
      "Responsive restaurant UI",
      "Clean state handling",
    ],
    githubUrl: "https://github.com/abhishek243641",
    liveUrl: "https://play.google.com/store/search?q=taste%20of%20bihar&c=apps&hl=en",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Android Development",
    issuer: "Great Learning Academy",
    year: "2024",
    description:
      "Android fundamentals, app UI, mobile development workflow, and application concepts.",
  },
  {
    title: "Certified in Java",
    issuer: "Great Learning Academy",
    year: "2024",
    description:
      "Java programming fundamentals, OOP concepts, and practical software development.",
  },
  {
    title: "Flutter & Dart Practice",
    issuer: "Project-Based Learning",
    year: "2025",
    description:
      "Flutter UI development, state management, REST API integration, and deployment preparation.",
  },
];

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Application",
    institution: "GCET - Gautam Buddha Nagar, Uttar Pradesh",
    period: "Jul 2023 - Jul 2025",
    location: "Uttar Pradesh",
    description:
      "Completed postgraduate studies in computer applications with 78.6%, focused on software development, application architecture, and practical projects.",
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "Bareilly College",
    period: "Apr 2020 - Mar 2023",
    location: "Bareilly",
    description:
      "Completed undergraduate studies in computer applications with 69%, building a foundation in programming, databases, and web/mobile development.",
  },
];

export const stats: Stat[] = [
  { value: 4, suffix: "+", label: "Flutter Projects" },
  { value: 8, suffix: "+", label: "Cities Supported" },
  { value: 2, suffix: "+", label: "Internships" },
  { value: 78, suffix: "%", label: "MCA Score" },
];

export const contactInfo: ContactInfo = {
  email: "abhisheksaxena9574@gmail.com",
  phone: "+91 70797 99914",
  location: "Safalabad Sector 73, Noida",
};

export const expertise = [
  { icon: SiFlutter, title: "Flutter Development" },
  { icon: Braces, title: "GetX State Management" },
  { icon: Server, title: "REST API Integration" },
  { icon: Database, title: "Local Storage" },
  { icon: BadgeCheck, title: "Firebase Auth" },
  { icon: Wrench, title: "Debugging & Optimization" },
];

export const sectionIcons = {
  about: BadgeCheck,
  skills: Braces,
  experience: Globe2,
  projects: Layers3,
  certificates: Award,
  education: GraduationCap,
  achievements: Trophy,
  contact: Phone,
  location: MapPin,
};
