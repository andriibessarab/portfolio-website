import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const springConfig = { damping: 25, stiffness: 700, mass: 0.12 };
const CURSOR_SIZE = 32;

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-CURSOR_SIZE);
  const mouseY = useMotionValue(-CURSOR_SIZE);
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);

    if (!isFinePointer) return undefined;

    const root = document.documentElement;
    root.classList.add("custom-cursor-active");

    const handleMouseMove = (event) => {
      mouseX.set(event.clientX - CURSOR_SIZE / 2);
      mouseY.set(event.clientY - CURSOR_SIZE / 2);
    };

    handleMouseMove({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      root.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!enabled || typeof document === "undefined") return null;

  return createPortal(
    <motion.div
      aria-hidden="true"
      style={{ x: cursorX, y: cursorY }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
    >
      <div className="relative h-8 w-8 rounded-full border border-white/90">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/80" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/80" />
      </div>
    </motion.div>,
    document.body
  );
}
