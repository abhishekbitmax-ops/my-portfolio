import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { contactInfo, sectionIcons, socialLinks } from "../data/portfolio";
import { fadeInUp, staggerContainer } from "../utils/motion";

const fields = [
  { label: "Name", type: "text", name: "name", placeholder: "Your name" },
  { label: "Email", type: "email", name: "email", placeholder: "you@example.com" },
  { label: "Subject", type: "text", name: "subject", placeholder: "Project inquiry" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to send message.");
      }

      form.reset();
      setStatus("success");
      setMessage(result.message ?? "Message sent successfully.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send message right now.",
      );
    }
  };

  return (
    <section id="contact" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build a polished app."
          description="A focused contact section for recruiters, teams, and collaborators looking for a Flutter developer with product taste."
          icon={sectionIcons.contact}
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
          >
            {[
              { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
              { icon: MapPin, label: "Location", value: contactInfo.location, href: "#" },
            ].map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                variants={fadeInUp}
                className="mb-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/25 p-4 text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.055]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-black">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {label}
                  </span>
                  <span className="mt-1 block text-sm text-white">{value}</span>
                </span>
              </motion.a>
            ))}

            <motion.div variants={fadeInUp} className="mt-8 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:bg-white hover:text-black"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.form
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 md:grid-cols-2">
              {fields.map((field) => (
                <motion.label
                  key={field.name}
                  variants={fadeInUp}
                  className={field.name === "subject" ? "md:col-span-2" : ""}
                >
                  <span className="mb-2 block text-sm font-medium text-zinc-300">
                    {field.label}
                  </span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                  />
                </motion.label>
              ))}
              <motion.label variants={fadeInUp} className="md:col-span-2">
                <span className="mb-2 block text-sm font-medium text-zinc-300">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about the role, project, or opportunity."
                  required
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                />
              </motion.label>
            </div>
            <motion.button
              type="submit"
              disabled={status === "sending"}
              variants={fadeInUp}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
            >
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>
            {message && (
              <p
                className={`mt-4 text-sm ${
                  status === "success" ? "text-zinc-300" : "text-red-300"
                }`}
                role="status"
              >
                {message}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
