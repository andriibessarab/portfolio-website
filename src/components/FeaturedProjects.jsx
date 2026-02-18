import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../../project-data";
import siteData from "../../site-data";
import ProjectCard from "./ProjectCard";
import SectionReveal from "./SectionReveal";

const featuredByName = siteData.featuredProjects.names
  .map((name) =>
    projects.find((project) => project.title.toLowerCase().trim() === String(name).toLowerCase().trim())
  )
  .filter(Boolean);

const featured = featuredByName.length > 0 ? featuredByName : projects.filter((project) => project.featured).slice(0, 3);

export default function FeaturedProjects() {
  return (
    <SectionReveal id="featured-projects" kicker="// 01" title={siteData.featuredProjects.title}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <p className="max-w-2xl text-slate-300">{siteData.featuredProjects.description}</p>
        <Link
          to="/projects"
          className="inline-flex items-center rounded-lg border border-terminal/60 bg-terminal/10 px-4 py-2 text-sm font-semibold text-terminal transition hover:bg-terminal/20"
        >
          {siteData.featuredProjects.ctaLabel}
        </Link>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12
            }
          }
        }}
        className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {featured.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionReveal>
  );
}
