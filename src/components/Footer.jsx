import siteData from "../../site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blueprint/20 bg-slate-950/70">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-slate-500">
          &copy; {year} {siteData.footer.name}. {siteData.footer.copyrightText}
        </p>
      </div>
    </footer>
  );
}
