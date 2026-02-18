import { motion } from "framer-motion";
import { ExternalLink, Github, Youtube } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(project.imageSrc) && !imageFailed;
  const isYoutubeLink = /(?:youtube\.com|youtu\.be)/i.test(project.live || "");
  const LiveIcon = isYoutubeLink ? Youtube : ExternalLink;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className="group relative flex h-full flex-col rounded-2xl border border-blueprint/25 bg-slate-900/70 p-5"
    >
      <div className="relative mb-5 flex aspect-video items-end overflow-hidden rounded-xl border border-blueprint/25 bg-gradient-to-br from-blueprint/20 via-slate-900/30 to-terminal/20 p-4">
        <div className="absolute inset-0 cad-grid opacity-35" />
        {showImage ? (
          <img
            src={project.imageSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover [filter:brightness(.78)_saturate(.78)_contrast(1.03)]"
            onError={() => setImageFailed(true)}
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-slate-950/25" />
        {!showImage ? (
          <p className="relative font-tech text-xs uppercase tracking-[0.18em] text-blueprint">{project.image}</p>
        ) : null}
      </div>

      <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((item) => (
          <span
            key={item}
            className="rounded-md border border-slate-700 bg-slate-800/80 px-2 py-1 font-tech text-[11px] uppercase tracking-wider text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 opacity-100 transition duration-300 sm:opacity-0 sm:group-hover:opacity-100">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-md border border-slate-600 px-3 py-1.5 text-xs text-slate-200 transition hover:border-blueprint hover:text-blue-200"
        >
          <Github className="h-4 w-4" />
          {project.githubLabel || "GitHub"}
        </a>
        {!project.hideLive &&
          (project.liveDisabled ? (
            <span
              className="inline-flex cursor-not-allowed items-center gap-1 rounded-md border border-slate-700/70 px-3 py-1.5 text-xs text-slate-500"
              aria-disabled="true"
            >
              <LiveIcon className="h-4 w-4" />
              {project.liveLabel || "Live"}
            </span>
          ) : (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-slate-600 px-3 py-1.5 text-xs text-slate-200 transition hover:border-terminal hover:text-terminal"
            >
              <LiveIcon className="h-4 w-4" />
              {project.liveLabel || "Live"}
            </a>
          ))}
      </div>
    </motion.article>
  );
}
