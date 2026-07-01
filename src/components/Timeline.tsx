import { motion } from "framer-motion";
import type { TimelineItem } from "../types/portfolio";
import { fadeInUp } from "../utils/motion";

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-white via-white/30 to-transparent md:left-1/2" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.article
            key={`${item.role}-${item.period}`}
            className={`relative grid gap-6 md:grid-cols-2 ${
              index % 2 === 0 ? "" : "md:[&>div]:col-start-2"
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInUp}
          >
            <span className="absolute left-2.5 top-6 z-10 h-3.5 w-3.5 rounded-full border-2 border-[#090909] bg-white shadow-[0_0_22px_rgba(255,255,255,0.7)] md:left-1/2 md:-translate-x-1/2" />
            <div className="ml-10 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:ml-0">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                <span>{item.period}</span>
                <span className="h-1 w-1 rounded-full bg-zinc-600" />
                <span>{item.location}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
              <p className="mt-1 text-zinc-300">{item.company}</p>
              <p className="mt-4 leading-7 text-zinc-400">{item.description}</p>
              <ul className="mt-5 space-y-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
