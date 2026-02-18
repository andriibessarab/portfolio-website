import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import projects from "../../project-data";
import siteData from "../../site-data";
import ProjectCard from "../components/ProjectCard";

function getColumns(width) {
  if (width >= 1280) return 3;
  if (width >= 640) return 2;
  return 1;
}

export default function ProjectsPage() {
  const [columns, setColumns] = useState(() => {
    if (typeof window === "undefined") return 3;
    return getColumns(window.innerWidth);
  });

  useEffect(() => {
    const onResize = () => setColumns(getColumns(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{siteData.projectsPage.title}</h1>
        <p className="mt-4 max-w-3xl text-slate-300">{siteData.projectsPage.description}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                ease: [0.2, 0.65, 0.3, 0.9],
                delay: Math.floor(index / columns) * 0.14
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
