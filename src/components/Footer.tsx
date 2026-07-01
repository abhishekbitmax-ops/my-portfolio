import { personalInfo, socialLinks } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React,
          Next.js, TypeScript, Tailwind, and motion.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:bg-white hover:text-black"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
