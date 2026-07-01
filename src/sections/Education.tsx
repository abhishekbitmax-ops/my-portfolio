import { SectionHeader } from "../components/SectionHeader";
import { Timeline } from "../components/Timeline";
import { education, sectionIcons } from "../data/portfolio";

export function Education() {
  const timelineItems = education.map((item) => ({
    role: item.degree,
    company: item.institution,
    period: item.period,
    location: item.location,
    description: item.description,
    highlights: [
      "Software fundamentals and web engineering practice.",
      "Project-oriented learning with modern frontend tools.",
      "Strong focus on clean presentation and implementation detail.",
    ],
  }));

  return (
    <section id="education" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation, product mindset."
          description="A clean timeline for formal education and learning milestones."
          icon={sectionIcons.education}
        />
        <Timeline items={timelineItems} />
      </div>
    </section>
  );
}
