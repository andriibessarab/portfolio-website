import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import useIsMobile from "../hooks/useIsMobile";
import SectionReveal from "./SectionReveal";
import siteData from "../../site-data";

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp"];

const builderGallery = [
  {
    title: "Prototype Bench",
    base: "/gallery/gallery-1",
    ratio: "aspect-[3/4]",
    tone: "from-blueprint/20 via-slate-900/70 to-terminal/15"
  },
  {
    title: "Sensor Wiring Pass",
    base: "/gallery/gallery-2",
    ratio: "aspect-[4/3]",
    tone: "from-terminal/18 via-slate-900/75 to-blueprint/12"
  },
  {
    title: "CAD Assembly Snapshot",
    base: "/gallery/gallery-3",
    ratio: "aspect-[10/16]",
    tone: "from-blueprint/15 via-slate-900/80 to-slate-950"
  },
  {
    title: "Testing Rig",
    base: "/gallery/gallery-4",
    ratio: "aspect-[16/10]",
    tone: "from-terminal/14 via-slate-900/75 to-blueprint/12"
  },
  {
    title: "Lab Notebook Capture",
    base: "/gallery/gallery-5",
    ratio: "aspect-[2/3]",
    tone: "from-blueprint/18 via-slate-950 to-terminal/12"
  }
];

function GalleryImage({ base, className }) {
  const sources = imageExtensions.map((ext) => `${base}${ext}`);
  const [index, setIndex] = useState(0);

  return (
    <img
      src={sources[index]}
      alt=""
      className={className}
      onError={() => {
        setIndex((current) => (current < sources.length - 1 ? current + 1 : current));
      }}
    />
  );
}

export default function About() {
  const about = siteData.about;
  const isMobile = useIsMobile();
  const cubeFieldRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);
  const [isGalleryInteractive, setIsGalleryInteractive] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsGalleryInteractive(window.innerWidth >= 768);
    };
    checkViewport();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };
    const onResize = () => {
      checkViewport();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!isGalleryInteractive && activeImage) {
      setActiveImage(null);
    }
  }, [isGalleryInteractive, activeImage]);

  useEffect(() => {
    if (!activeImage) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeImage]);

  return (
    <SectionReveal id="about" title={about.title}>
      <div className="font-sans antialiased tracking-tight">
        <div className="border-y border-slate-800 py-8 sm:py-10">
          <div className="grid items-start gap-6 lg:items-stretch lg:grid-cols-[0.78fr_1.22fr]">
            <div className="mx-auto flex w-full max-w-[22rem] self-stretch items-stretch justify-start lg:mx-0">
              <div
                ref={cubeFieldRef}
                className="relative flex h-full min-h-[17rem] w-full items-center justify-center overflow-hidden border border-blueprint/55 bg-slate-950/45 [perspective:1000px]"
              >
                <span className="pointer-events-none absolute left-1 top-1 h-3 w-3 border-l border-t border-blueprint/70" />
                <span className="pointer-events-none absolute right-1 top-1 h-3 w-3 border-r border-t border-blueprint/70" />
                <span className="pointer-events-none absolute bottom-1 left-1 h-3 w-3 border-b border-l border-blueprint/70" />
                <span className="pointer-events-none absolute bottom-1 right-1 h-3 w-3 border-b border-r border-blueprint/70" />
                <span className="pointer-events-none absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-blueprint/20" />

                <motion.div
                  className={`group/cube relative h-16 w-16 ${isMobile ? "cursor-default" : "cursor-grab active:cursor-grabbing"}`}
                  drag={!isMobile}
                  dragConstraints={isMobile ? undefined : cubeFieldRef}
                  dragMomentum={!isMobile}
                  dragElastic={isMobile ? 0 : 0.18}
                  dragTransition={isMobile ? undefined : { bounceStiffness: 760, bounceDamping: 16 }}
                  whileDrag={isMobile ? undefined : { scale: 1.04, cursor: "grabbing" }}
                  style={{ transformStyle: "preserve-3d" }}
                  animate={isMobile ? undefined : { rotateX: [0, 360], rotateY: [0, 360] }}
                  transition={isMobile ? undefined : { duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div
                    className="absolute inset-0 border border-blue-500/50 bg-blue-900/10 shadow-[inset_0_0_16px_rgba(59,130,246,0.28)] transition-colors duration-200 group-hover/cube:border-terminal/70 group-hover/cube:bg-emerald-900/10 group-hover/cube:shadow-[inset_0_0_16px_rgba(16,185,129,0.35)]"
                    style={{ transform: "translateZ(32px)", backfaceVisibility: "hidden" }}
                  />
                  <div
                    className="absolute inset-0 border border-blue-500/50 bg-blue-900/10 shadow-[inset_0_0_16px_rgba(59,130,246,0.28)] transition-colors duration-200 group-hover/cube:border-terminal/70 group-hover/cube:bg-emerald-900/10 group-hover/cube:shadow-[inset_0_0_16px_rgba(16,185,129,0.35)]"
                    style={{ transform: "rotateY(180deg) translateZ(32px)", backfaceVisibility: "hidden" }}
                  />
                  <div
                    className="absolute inset-0 border border-blue-500/50 bg-blue-900/10 shadow-[inset_0_0_16px_rgba(59,130,246,0.28)] transition-colors duration-200 group-hover/cube:border-terminal/70 group-hover/cube:bg-emerald-900/10 group-hover/cube:shadow-[inset_0_0_16px_rgba(16,185,129,0.35)]"
                    style={{ transform: "rotateY(90deg) translateZ(32px)", backfaceVisibility: "hidden" }}
                  />
                  <div
                    className="absolute inset-0 border border-blue-500/50 bg-blue-900/10 shadow-[inset_0_0_16px_rgba(59,130,246,0.28)] transition-colors duration-200 group-hover/cube:border-terminal/70 group-hover/cube:bg-emerald-900/10 group-hover/cube:shadow-[inset_0_0_16px_rgba(16,185,129,0.35)]"
                    style={{ transform: "rotateY(-90deg) translateZ(32px)", backfaceVisibility: "hidden" }}
                  />
                  <div
                    className="absolute inset-0 border border-blue-500/50 bg-blue-900/10 shadow-[inset_0_0_16px_rgba(59,130,246,0.28)] transition-colors duration-200 group-hover/cube:border-terminal/70 group-hover/cube:bg-emerald-900/10 group-hover/cube:shadow-[inset_0_0_16px_rgba(16,185,129,0.35)]"
                    style={{ transform: "rotateX(90deg) translateZ(32px)", backfaceVisibility: "hidden" }}
                  />
                  <div
                    className="absolute inset-0 border border-blue-500/50 bg-blue-900/10 shadow-[inset_0_0_16px_rgba(59,130,246,0.28)] transition-colors duration-200 group-hover/cube:border-terminal/70 group-hover/cube:bg-emerald-900/10 group-hover/cube:shadow-[inset_0_0_16px_rgba(16,185,129,0.35)]"
                    style={{ transform: "rotateX(-90deg) translateZ(32px)", backfaceVisibility: "hidden" }}
                  />
                </motion.div>

                <span className="pointer-events-none absolute bottom-2 right-2 text-[10px] font-mono uppercase tracking-widest text-blue-400/60">
                  {about.dragHint}
                </span>
              </div>
            </div>

            <div className="flex h-full flex-col">
              <div className="grid grid-cols-1 gap-4">
                {about.fields.map((field) => (
                  <div key={field.label} className="pb-3">
                    <p className="font-mono text-sm text-slate-500">{field.label}</p>
                    <p className="mt-1 text-slate-200 font-medium">{field.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <p className="font-mono text-sm text-slate-500">// BIO</p>
              </div>

              <p className="mt-3 max-w-3xl leading-relaxed text-slate-400">
                {about.descriptionSegments.map((segment, index) =>
                  segment.highlight ? (
                    <span key={index} className="text-blue-400 font-semibold">
                      {segment.text}
                    </span>
                  ) : (
                    <span key={index}>{segment.text}</span>
                  )
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {builderGallery.map((item) => (
            <figure key={item.title} className="group relative mb-4 break-inside-avoid overflow-hidden border border-slate-800">
              <button
                type="button"
                onClick={isGalleryInteractive ? () => setActiveImage(item) : undefined}
                disabled={!isGalleryInteractive}
                className={[
                  "cad-grid relative block w-full overflow-hidden bg-gradient-to-br",
                  isGalleryInteractive ? "cursor-zoom-in" : "cursor-default",
                  item.ratio,
                  item.tone
                ].join(
                  " "
                )}
              >
                <GalleryImage
                  base={item.base}
                  className="h-full w-full object-cover [filter:brightness(.72)_saturate(.72)_contrast(1.03)]"
                />
                <span className="absolute left-1 top-1 h-3 w-3 border-l border-t border-blueprint/60" />
                <span className="absolute right-1 top-1 h-3 w-3 border-r border-t border-blueprint/60" />
                <span className="absolute bottom-1 left-1 h-3 w-3 border-b border-l border-blueprint/60" />
                <span className="absolute bottom-1 right-1 h-3 w-3 border-b border-r border-blueprint/60" />

                <div className="absolute inset-0 bg-transparent transition-colors duration-200 group-hover:bg-slate-900/80" />
              </button>
            </figure>
          ))}
        </div>
      </div>

      {activeImage &&
        isGalleryInteractive &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/75"
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
          >
            <div
              className="relative mx-4 inline-block max-w-[92vw]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute -right-2 -top-2 z-10 inline-flex h-8 w-8 items-center justify-center border border-blueprint/50 bg-slate-950 text-slate-200 transition hover:border-blueprint hover:text-blue-200"
                aria-label="Close image preview"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="overflow-hidden border border-blueprint/45 bg-slate-950/95">
                <GalleryImage
                  base={activeImage.base}
                  className="mx-auto max-h-[78vh] w-auto max-w-[92vw] object-contain [filter:brightness(.8)_saturate(.78)_contrast(1.03)]"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </SectionReveal>
  );
}
