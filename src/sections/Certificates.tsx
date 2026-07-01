import { motion } from "framer-motion";
import { GlassCard } from "../components/GlassCard";
import { SectionHeader } from "../components/SectionHeader";
import { certificates, sectionIcons } from "../data/portfolio";
import { fadeInUp, staggerContainer } from "../utils/motion";

export function Certificates() {
  return (
    <section id="certificates" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Certificates"
          title="Credentials with clean presentation."
          description="Premium certificate cards keep achievements credible, scannable, and easy to replace with verified credentials later."
          icon={sectionIcons.certificates}
        />

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {certificates.map((certificate) => (
            <motion.div key={certificate.title} variants={fadeInUp}>
              <GlassCard className="h-full p-7">
                <div className="mb-7 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-black">
                    <sectionIcons.certificates className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    {certificate.year}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{certificate.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{certificate.issuer}</p>
                <p className="mt-4 leading-7 text-zinc-400">{certificate.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
