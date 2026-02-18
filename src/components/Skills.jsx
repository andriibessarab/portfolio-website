import SectionReveal from "./SectionReveal";
import siteData from "../../site-data";

export default function Skills() {
  return (
    <SectionReveal id="skills" kicker="// 04" title={siteData.skills.title}>
      <div className="grid gap-5 md:grid-cols-3">
        {siteData.skills.groups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-blueprint/25 bg-slate-900/60 p-5">
            <h3 className="font-tech text-xs uppercase tracking-[0.2em] text-terminal">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1 font-tech text-[11px] uppercase tracking-wider text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}
