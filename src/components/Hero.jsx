import { motion } from "framer-motion";
import { ArrowRight, ChevronsDown, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import siteData from "../../site-data";

const sequence = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

export default function Hero() {
  const hero = siteData.hero;
  const isMobile = useIsMobile();
  const [showScrollCue, setShowScrollCue] = useState(false);

  const dismissScrollCue = () => {
    setShowScrollCue(false);
    try {
      window.localStorage.setItem(hero.scrollCueStorageKey, "1");
    } catch {
      // ignore storage errors
    }
  };

  const scrollToAbout = () => {
    const node = document.getElementById("about");
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    dismissScrollCue();
  };

  useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(hero.scrollCueStorageKey) === "1";
    } catch {
      seen = false;
    }

    if (!seen && !isMobile) {
      setShowScrollCue(true);
    }

    const onScroll = () => {
      if (window.scrollY > 8) {
        dismissScrollCue();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <section id="hero" className="relative flex min-h-screen items-center border-b border-blueprint/20 pt-20">
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <motion.div
          className="absolute left-0 top-24 h-[2px] w-1/3 bg-gradient-to-r from-blueprint/90 via-blueprint/70 to-transparent shadow-[0_0_14px_rgba(59,130,246,0.45)]"
          initial={isMobile ? false : { opacity: 0 }}
          whileInView={isMobile ? undefined : { opacity: 1 }}
          viewport={isMobile ? undefined : { once: false, amount: 0.2 }}
          transition={isMobile ? undefined : { duration: 0.65, ease: "easeOut" }}
        />
        <motion.div
          className="absolute right-0 top-40 h-[2px] w-1/4 bg-gradient-to-l from-terminal via-terminal/80 to-transparent shadow-[0_0_14px_rgba(16,185,129,0.5)]"
          initial={isMobile ? false : { opacity: 0 }}
          whileInView={isMobile ? undefined : { opacity: 1 }}
          viewport={isMobile ? undefined : { once: false, amount: 0.2 }}
          transition={isMobile ? undefined : { duration: 0.65, ease: "easeOut" }}
        />
      </div>

      <motion.div
        variants={sequence}
        initial={isMobile ? { opacity: 0 } : "hidden"}
        animate={isMobile ? { opacity: 1 } : "hidden"}
        whileInView={isMobile ? undefined : "show"}
        viewport={isMobile ? undefined : { once: false, amount: 0.5 }}
        transition={isMobile ? { duration: 0.45, ease: "easeOut" } : undefined}
        className="mx-auto w-full max-w-6xl px-4 pb-16 pt-16 text-center sm:px-6 lg:px-8"
      >
        <motion.div variants={item} className="mx-auto mb-7 w-fit">
          <div className="relative h-40 w-40 sm:h-48 sm:w-48">
            <div className="absolute inset-0 rounded-full bg-blueprint/15 blur-xl" />
            <div className="absolute -inset-2 rounded-full border border-terminal/20" />
            <div
              className="relative h-full w-full overflow-hidden rounded-full border border-blueprint/55 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(160deg, rgba(15,23,42,0.06), rgba(15,23,42,0.18)), url('/profile.png')"
              }}
            >
              <div className="pointer-events-none absolute inset-0 cad-grid opacity-10" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl"
        >
          {hero.greeting} <span className="font-tech text-blueprint">{hero.name}</span>
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {hero.subtitle}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={hero.resume.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-500 bg-slate-900/75 px-7 py-4 text-base font-semibold text-slate-200 transition hover:border-terminal hover:text-terminal"
          >
            <FileText className="h-5 w-5" />
            {hero.resume.label}
          </a>
          <Link
            to={hero.workCta.to}
            className="inline-flex items-center gap-2 rounded-xl border border-blueprint/85 bg-blueprint/15 px-8 py-4 text-base font-bold text-blue-100 shadow-glow transition hover:bg-blueprint/25 animate-pulseGlow"
          >
            {hero.workCta.label}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>

      </motion.div>

      {!isMobile && showScrollCue && (
        <motion.button
          type="button"
          onClick={scrollToAbout}
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: [0, 10, 0], scale: [1, 1.03, 1] }}
          transition={{
            opacity: { duration: 0.45 },
            y: { duration: 1.25, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 1.25, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 text-blueprint/90 transition hover:text-blueprint"
          aria-label="Scroll down"
        >
          <ChevronsDown className="h-16 w-16 sm:h-20 sm:w-20" strokeWidth={1.6} />
        </motion.button>
      )}
    </section>
  );
}
