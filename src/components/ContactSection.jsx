import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail, Send } from "lucide-react";
import siteData from "../../site-data";

const socialIcons = {
  linkedin: Linkedin,
  github: Github
};

const sectionVariants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

export default function ContactSection() {
  const contact = siteData.contact;
  const form = contact.form;

  return (
    <motion.section
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      animate="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.22 }}
      className="scroll-mt-24 py-16 sm:scroll-mt-28 sm:py-20"
    >
      <div className="mb-5 h-px w-full origin-left bg-gradient-to-r from-blueprint via-terminal/60 to-transparent" />
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <section className="self-start lg:pr-6">
          <h2 className="font-tech text-2xl tracking-wide text-slate-100 sm:text-3xl">{contact.title}</h2>
          <p className="mt-3 max-w-md text-sm text-slate-400">{contact.description}</p>

          <ul className="mt-7 space-y-4">
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-3 text-slate-200 transition hover:text-blueprint">
                <Mail className="h-4 w-4" />
                <span>{contact.email}</span>
              </a>
            </li>
            <li>
              <a href={contact.resume.href} className="inline-flex items-center gap-3 text-slate-200 transition hover:text-blueprint">
                <FileText className="h-4 w-4" />
                <span>{contact.resume.label}</span>
              </a>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            {contact.socials.map((social) => {
              const Icon = socialIcons[social.platform];

              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors duration-200 hover:text-blue-500"
                >
                  {Icon ? <Icon className="h-4 w-4" /> : null}
                  <span>{social.label}</span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="self-start border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
          <h3 className="font-tech text-sm uppercase tracking-[0.16em] text-blueprint">{form.title}</h3>
          <form action={form.action} method="POST" className="mt-6 space-y-6">
            <input type="hidden" name="_subject" value={form.subject} />

            <div>
              <label htmlFor="name" className="mb-2.5 block font-tech text-xs uppercase tracking-[0.12em] text-slate-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border-0 border-b border-slate-600 bg-transparent px-0 pb-2.5 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-0"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2.5 block font-tech text-xs uppercase tracking-[0.12em] text-slate-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                pattern={form.emailPattern}
                title={form.emailValidationMessage}
                required
                className="w-full border-0 border-b border-slate-600 bg-transparent px-0 pb-2.5 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-0"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2.5 block font-tech text-xs uppercase tracking-[0.12em] text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-y border-0 border-b border-slate-600 bg-transparent px-0 pb-2.5 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-0"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 border border-blue-500 bg-slate-950 px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-blue-100 transition-colors duration-200 hover:bg-blue-500/10"
            >
              {form.submitLabel}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </section>
      </div>
    </motion.section>
  );
}
