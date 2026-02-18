import { motion } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";

const sectionVariants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.2, 0.65, 0.3, 0.9],
      staggerChildren: 0.08
    }
  }
};

export default function SectionReveal({ id, title, children }) {
  const isMobile = useIsMobile();

  return (
    <motion.section
      id={id}
      variants={isMobile ? undefined : sectionVariants}
      initial={isMobile ? false : "hidden"}
      animate={isMobile ? undefined : "hidden"}
      whileInView={isMobile ? undefined : "show"}
      viewport={isMobile ? undefined : { once: false, amount: 0.22 }}
      className="scroll-mt-24 py-16 sm:scroll-mt-28 sm:py-20"
    >
      <div className="mb-5 h-px w-full origin-left bg-gradient-to-r from-blueprint via-terminal/60 to-transparent" />
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
