import { motion } from "framer-motion";
import { GlassCard } from "../components/GlassCard";
import { SectionHeader } from "../components/SectionHeader";
import { sectionIcons, skillGroups } from "../data/portfolio";
import { fadeInUp, staggerContainer } from "../utils/motion";

export function Skills() {
  return (
    <section id="skills" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="A modern Flutter toolkit."
          description="Skill cards are grouped by practical delivery areas, with animated proficiency bars that keep the presentation polished without turning noisy."
          icon={sectionIcons.skills}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <GlassCard className="h-full p-6 md:p-7">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-3 min-h-16 text-sm leading-7 text-zinc-400">
                    {group.description}
                  </p>
                </motion.div>

                <div className="mt-6 space-y-4">
                  {group.skills.map(({ name, level, icon: Icon }) => (
                    <motion.div
                      key={name}
                      variants={fadeInUp}
                      className="rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:border-white/25 hover:bg-white/[0.055]"
                    >
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                          <span className="font-medium text-zinc-100">{name}</span>
                        </div>
                        <span className="text-xs text-zinc-500">{level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-white"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
