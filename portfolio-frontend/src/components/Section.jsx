export default function Section({ id, tone = "a", children, className = "" }) {
  const tones = {
    a: "bg-transparent",
    b: "bg-surface/40",
  };

  return (
    <section id={id} className={`relative py-20 md:py-28 ${tones[tone]} ${className}`}>
      <div className="absolute top-0 left-0 w-64 h-64 bg-mint/5 blur-[100px] rounded-full -z-[1]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue/5 blur-[100px] rounded-full -z-[1]" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">{children}</div>
    </section>
  );
}