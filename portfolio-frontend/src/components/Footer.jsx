export default function Footer() {
  return (
    <footer className="border-t-2 border-plum/10 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between items-center gap-2 text-sm text-plum/60">
        <span>© {new Date().getFullYear()} Zainab Fayyaz · Junior Data Engineer · Lahore</span>
        <span className="flex items-center gap-2 font-mono text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-mint" /> Site built with React · Tailwind · ASP.NET Core
        </span>
      </div>
    </footer>
  );
}
