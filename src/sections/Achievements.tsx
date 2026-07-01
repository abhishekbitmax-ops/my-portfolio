import { motion } from "framer-motion";
import { Counter } from "../components/Counter";
import { SectionHeader } from "../components/SectionHeader";
import { sectionIcons, stats } from "../data/portfolio";
import { fadeInUp, staggerContainer } from "../utils/motion";

export function Achievements() {
  return (
    <section id="achievements" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Achievements"
          title="Numbers that support the story."
          description="Elegant counters give recruiters quick proof points without overwhelming the page."
          icon={sectionIcons.achievements}
        />

        <motion.div
          className="grid gap-4 md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-7 text-center backdrop-blur-xl"
            >
              <div className="text-5xl font-semibold text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
