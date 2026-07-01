import { ArrowDown, BadgeCheck, Download, Mail, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "../components/MagneticButton";
import { personalInfo, socialLinks } from "../data/portfolio";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { fadeInUp, staggerContainer } from "../utils/motion";

export function Hero() {
  const typedRole = useTypingEffect(personalInfo.typingRoles);
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.35], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -60]);

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pt-36"
    >
      <motion.div
        className="absolute inset-x-0 top-16 mx-auto h-[78vh] max-w-7xl overflow-hidden rounded-b-[3rem] opacity-75"
        style={{ y: imageY }}
        aria-hidden="true"
      >
        <img
          src={personalInfo.heroImage}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090909]/10 via-[#090909]/40 to-[#090909]" />
      </motion.div>

      <motion.div
        className="relative mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ y: textY }}
      >
        <div>
          <motion.div
            variants={fadeInUp}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
            {personalInfo.availability}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="max-w-5xl text-4xl font-semibold leading-[0.95] text-white sm:text-4xl md:text-5xl xl:text-[5.5rem]"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="mt-6 min-h-12 text-xl font-medium text-zinc-200 md:text-3xl"
          >
            {personalInfo.profession}{" "}
            <span className="text-zinc-500">/</span>{" "}
            <span className="inline-flex text-white">
              {typedRole}
              <span className="ml-1 h-9 w-px animate-pulse bg-white md:h-11" />
            </span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-7 max-w-2xl text-lg leading-9 text-zinc-300 md:text-xl"
          >
            {personalInfo.intro}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-2xl text-base leading-8 text-zinc-400"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-7 grid max-w-3xl gap-3 sm:grid-cols-2"
          >
            {personalInfo.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-zinc-300 backdrop-blur-xl"
              >
                <BadgeCheck className="h-4 w-4 shrink-0 text-white" />
                {highlight}
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton href={personalInfo.resumeUrl} download>
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticButton>
            <MagneticButton href="/contact" variant="secondary">
              <Mail className="h-4 w-4" />
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-9 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-zinc-300 transition hover:-translate-y-1 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="relative mx-auto w-full max-w-sm lg:mr-0">
          <div className="absolute -inset-4 rounded-[2.5rem] border border-white/10 bg-white/[0.035] blur-xl" />
          <motion.div
            className="group relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-zinc-950 shadow-2xl shadow-black"
            whileHover={{ rotate: 0, scale: 1.02 }}
            initial={{ rotate: 4 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
          >
            <img
              src={personalInfo.avatarUrl}
              alt={`${personalInfo.name} profile portrait`}
              className="aspect-[4/5] w-full object-cover grayscale saturate-0 transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:saturate-125"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
              <p className="flex items-center gap-2 text-sm font-semibold text-white">
                <MapPin className="h-4 w-4" />
                Based in {personalInfo.location}
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                Flutter, Dart, GetX, Firebase, REST APIs, and clean mobile UI.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <a
        href="/about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 transition hover:text-white md:inline-flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
