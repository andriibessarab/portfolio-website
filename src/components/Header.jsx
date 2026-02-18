import { BriefcaseBusiness, FolderKanban, Mail, Menu, UserRound, Waypoints, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import siteData from "../../site-data";

export default function Header() {
  const header = siteData.header;
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const goToSection = (sectionId) => {
    if (onHome) {
      const node = document.getElementById(sectionId);
      if (node) {
        node.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }
    navigate("/", { state: { scrollTo: sectionId } });
  };

  const onSectionClick = (sectionId) => {
    goToSection(sectionId);
    setMobileOpen(false);
  };

  const navBase =
    "inline-flex items-center gap-1.5 font-tech uppercase tracking-wide text-[10px] sm:text-xs transition hover:text-terminal";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blueprint/20 bg-slate-950/55 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onSectionClick("hero")}
          className="group inline-flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 font-tech text-[10px] uppercase tracking-[0.18em] text-blueprint transition hover:bg-blueprint/10 sm:text-xs"
          aria-label="Go to top"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center border border-blueprint/70 text-[10px] tracking-normal text-blue-200">
            {header.initials}
          </span>
          <span className="inline-flex max-w-[56vw] items-center gap-1.5 truncate sm:max-w-none">
            {header.name}
            <Waypoints className="h-3.5 w-3.5 shrink-0 opacity-55 transition group-hover:opacity-100" />
          </span>
        </button>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-md border border-blueprint/35 p-2 text-slate-200 transition hover:border-blueprint hover:text-blue-100 sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        <nav className="hidden items-center gap-2 sm:flex sm:gap-4">
          <button type="button" onClick={() => goToSection("about")} className={`text-slate-300 ${navBase}`}>
            <UserRound className="h-3.5 w-3.5" />
            {header.nav.about}
          </button>
          <Link to="/projects" className={`text-blue-100 ${navBase}`}>
            <FolderKanban className="h-4 w-4" />
            {header.nav.projects}
          </Link>
          <button type="button" onClick={() => goToSection("experience")} className={`text-slate-300 ${navBase}`}>
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            {header.nav.experience}
          </button>
          <button type="button" onClick={() => goToSection("contact")} className={`text-slate-300 ${navBase}`}>
            <Mail className="h-3.5 w-3.5" />
            {header.nav.contact}
          </button>
        </nav>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-blueprint/20 bg-slate-950/95 p-3 sm:hidden">
          <div className="grid gap-2">
            <button
              type="button"
              onClick={() => onSectionClick("about")}
              className="inline-flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-left font-tech text-xs uppercase tracking-wide text-slate-200 transition hover:border-blueprint/40 hover:bg-blueprint/10"
            >
              <UserRound className="h-4 w-4" />
              {header.nav.about}
            </button>
            <Link
              to="/projects"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 rounded-md border border-transparent px-3 py-2 font-tech text-xs uppercase tracking-wide text-blue-100 transition hover:border-blueprint/40 hover:bg-blueprint/10"
            >
              <FolderKanban className="h-4 w-4" />
              {header.nav.projects}
            </Link>
            <button
              type="button"
              onClick={() => onSectionClick("experience")}
              className="inline-flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-left font-tech text-xs uppercase tracking-wide text-slate-200 transition hover:border-blueprint/40 hover:bg-blueprint/10"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              {header.nav.experience}
            </button>
            <button
              type="button"
              onClick={() => onSectionClick("contact")}
              className="inline-flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-left font-tech text-xs uppercase tracking-wide text-slate-200 transition hover:border-blueprint/40 hover:bg-blueprint/10"
            >
              <Mail className="h-4 w-4" />
              {header.nav.contact}
            </button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
