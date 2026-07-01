import { SectionHeader } from "../components/SectionHeader";
import { Timeline } from "../components/Timeline";
import { experience, sectionIcons } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="A timeline of mobile app growth."
          description="A polished vertical timeline for Flutter roles, internships, API work, app architecture, and production-minded delivery."
          icon={sectionIcons.experience}
        />
        <Timeline items={experience} />
      </div>
    </section>
  );
}
