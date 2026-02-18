import SectionReveal from "./SectionReveal";
import siteData from "../../site-data";

export default function Experience() {
  const experience = siteData.experience;

  return (
    <SectionReveal id="experience" kicker="// 03" title={experience.title}>
      <div className="space-y-5">
        {experience.entries.map((entry) => (
          <div key={`${entry.company}-${entry.role}`} className="rounded-2xl border border-blueprint/30 bg-slate-900/60 p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-slate-100">{entry.role}</h3>
                <p className="font-tech text-xs uppercase tracking-[0.2em] text-terminal">{entry.company}</p>
              </div>
              <div className="text-right">
                <p className="font-tech text-xs text-slate-400">{entry.dateRange}</p>
                <p className="mt-1 text-xs text-slate-500">{entry.location}</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-slate-300">
              {entry.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terminal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {entry.stack ? (
              <div className="mt-6 rounded-lg border border-terminal/30 bg-terminal/10 p-4">
                <p className="font-tech text-xs uppercase tracking-[0.2em] text-terminal">{entry.stackTitle || "Stack Used"}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(Array.isArray(entry.stack)
                    ? entry.stack
                    : String(entry.stack)
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean)
                  ).map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1 font-tech text-[11px] uppercase tracking-wider text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}
