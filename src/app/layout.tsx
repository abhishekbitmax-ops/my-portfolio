import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Abhishek Kumar Saxena | Flutter Developer",
  description:
    "Premium portfolio for Abhishek Kumar Saxena, a Flutter Developer experienced in Dart, GetX, REST APIs, Firebase, MVC architecture, and responsive UI.",
  keywords: [
    "Abhishek Kumar Saxena",
    "Flutter Developer",
    "Dart",
    "GetX",
    "Firebase",
    "REST APIs",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek Kumar Saxena" }],
  openGraph: {
    title: "Abhishek Kumar Saxena | Flutter Developer",
    description:
      "A premium developer portfolio showcasing Flutter projects, internships, education, certifications, and contact details.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
