import { motion } from "framer-motion";
import type { PortfolioIcon } from "../types/portfolio";
import { fadeInUp } from "../utils/motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: PortfolioIcon;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="mx-auto mb-14 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUp}
    >
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
        <Icon className="h-4 w-4 text-white" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-zinc-400 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
