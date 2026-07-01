import { motion } from "framer-motion";
import { GlassCard } from "../components/GlassCard";
import { SectionHeader } from "../components/SectionHeader";
import { aboutCards, expertise, sectionIcons } from "../data/portfolio";
import { fadeInUp, staggerContainer } from "../utils/motion";

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About Me"
          title="Quiet confidence, sharp execution."
          description="I blend Flutter engineering with product sensitivity: responsive screens, maintainable architecture, smooth app flows, and interfaces that feel intentional from the first tap."
          icon={sectionIcons.about}
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl md:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <p className="text-2xl font-semibold leading-tight text-white md:text-4xl">
              I build modern mobile experiences where performance, reliability,
              and visual polish work together.
            </p>
            <p className="mt-6 leading-8 text-zinc-400">
              My work focuses on Flutter, Dart, GetX, REST APIs, Firebase,
              local storage, debugging, and responsive UI. I care about the
              details recruiters and teams notice: clean architecture, fast
              screens, readable code, reliable state, and a product experience
              that feels carefully built.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {expertise.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-zinc-300"
                >
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  {title}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
          >
            {aboutCards.map(({ icon: Icon, label, value }) => (
              <motion.div key={label} variants={fadeInUp}>
                <GlassCard className="p-6 md:p-8">
                  <div className="flex gap-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-black">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{label}</h3>
                      <p className="mt-2 leading-7 text-zinc-400">{value}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
