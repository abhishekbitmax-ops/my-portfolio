import { ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SectionHeader } from "../components/SectionHeader";
import { projects, sectionIcons } from "../data/portfolio";
import type { Project } from "../types/portfolio";
import { fadeInUp, staggerContainer } from "../utils/motion";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Flutter projects with presence."
          description="Resume-based project cards for RideWithGuide, Bitmax, and Swad of Grandma, ready for real GitHub and live store links."
          icon={sectionIcons.projects}
        />

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              role="button"
              tabIndex={0}
              className="group cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] text-left shadow-2xl shadow-black/40 backdrop-blur-xl"
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-white/0 backdrop-blur-0 transition group-hover:bg-black/20 group-hover:backdrop-blur-[1px]" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 min-h-24 leading-7 text-zinc-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[70] overflow-y-auto bg-black/70 px-5 py-8 backdrop-blur-xl md:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} project details`}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909]/92 shadow-2xl shadow-black"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[16/7] min-h-72 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} hero preview`}
                  className="h-full w-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/40 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
                  aria-label="Close project details"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">
                    Project Case Study
                  </p>
                  <h3 className="mt-2 text-4xl font-semibold text-white md:text-6xl">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h4 className="text-2xl font-semibold text-white">About Project</h4>
                  <p className="mt-4 leading-8 text-zinc-400">
                    {selectedProject.details}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {selectedProject.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-zinc-300"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-white">Gallery</h4>
                  <div className="mt-4 grid gap-3">
                    {selectedProject.gallery.map((image) => (
                      <img
                        key={image}
                        src={image}
                        alt={`${selectedProject.title} gallery`}
                        className="aspect-[16/9] w-full rounded-3xl border border-white/10 object-cover grayscale transition duration-500 hover:grayscale-0"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
