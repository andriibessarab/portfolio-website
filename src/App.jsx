import { motion } from "framer-motion";
import { useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useIsMobile from "./hooks/useIsMobile";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

const waveLines = [
  { top: "9%", duration: 6.2, delay: 0, color: "rgba(59,130,246,0.18)" },
  { top: "18%", duration: 7.1, delay: 0.7, color: "rgba(16,185,129,0.16)" },
  { top: "31%", duration: 6.7, delay: 1.1, color: "rgba(59,130,246,0.14)" },
  { top: "47%", duration: 7.8, delay: 0.4, color: "rgba(16,185,129,0.14)" },
  { top: "62%", duration: 6.4, delay: 1.3, color: "rgba(59,130,246,0.15)" },
  { top: "76%", duration: 7.4, delay: 0.9, color: "rgba(16,185,129,0.14)" },
  { top: "88%", duration: 6.9, delay: 0.2, color: "rgba(59,130,246,0.13)" }
];

export default function App() {
  const location = useLocation();
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (!sectionId) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.state]);

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (!sectionId) {
      return;
    }

    const id = String(sectionId);
    const node = document.getElementById(id);
    if (!node) {
      return;
    }

    requestAnimationFrame(() => {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
      const currentState = window.history.state || {};
      if (currentState.usr?.scrollTo) {
        window.history.replaceState({ ...currentState, usr: null }, "");
      }
    });
  }, [location.pathname, location.state]);

  return (
    <div className={`relative min-h-screen overflow-x-hidden bg-[#0F172A] text-slate-100 ${isMobile ? "cad-grid" : "cad-grid-ambient"}`}>
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.16), transparent 35%), radial-gradient(circle at 85% 0%, rgba(16,185,129,0.14), transparent 30%)"
        }}
      />
      {!isMobile ? (
        <>
          <motion.div
            className="pointer-events-none fixed inset-0 z-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(16,185,129,0.4) 0 1px, transparent 1px 4px)"
            }}
            animate={{ y: ["-2%", "2%", "-2%"], opacity: [0.04, 0.07, 0.04] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {waveLines.map((line) => (
              <motion.div
                key={line.top}
                className="absolute left-0 right-0 h-px"
                style={{
                  top: line.top,
                  background: `linear-gradient(90deg, transparent 0%, ${line.color} 18%, ${line.color} 82%, transparent 100%)`
                }}
                animate={{
                  y: [0, 2, -2.5, 1.5, 0],
                  x: ["-0.8%", "0.6%", "-0.5%", "0.4%", "-0.8%"],
                  opacity: [0.12, 0.34, 0.22, 0.3, 0.12]
                }}
                transition={{
                  duration: line.duration,
                  delay: line.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </>
      ) : null}
      <div className="relative z-10">
        <CustomCursor />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
