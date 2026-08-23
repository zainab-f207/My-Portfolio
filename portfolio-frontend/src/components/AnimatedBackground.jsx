export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-cream">
      <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] bg-lavender/25 rounded-full blur-[100px] animate-blob" />
      <div className="absolute top-[25%] right-[-10%] w-[400px] h-[400px] bg-peach/25 rounded-full blur-[100px] animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[420px] h-[420px] bg-mint/25 rounded-full blur-[100px] animate-blob [animation-delay:8s]" />
      <div className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] bg-sky/20 rounded-full blur-[100px] animate-blob [animation-delay:2s]" />

      <div className="absolute top-[12%] left-[8%] w-10 h-10 border-4 border-ink/10 rounded-full animate-float" />
      <div className="absolute top-[70%] left-[12%] w-8 h-8 bg-peach/30 rotate-45 animate-wiggle" />
      <div className="absolute top-[20%] right-[15%] w-12 h-12 border-4 border-ink/10 rounded-xl animate-float [animation-delay:2s]" />
      <div className="absolute top-[60%] right-[8%] w-6 h-6 bg-mint/40 rounded-full animate-float [animation-delay:3s]" />
      <div className="absolute top-[85%] right-[30%] w-9 h-9 border-4 border-ink/10 rotate-12 animate-wiggle [animation-delay:1s]" />
      <div className="absolute top-[40%] left-[45%] w-16 h-16 border-4 border-dashed border-ink/10 rounded-full animate-spin-slow" />
      <div className="absolute top-[5%] left-[40%] w-7 h-7 bg-lavender/30 rounded-full animate-float [animation-delay:1.5s]" />
      <div className="absolute top-[50%] left-[5%] w-14 h-14 border-4 border-ink/10 rounded-full animate-spin-slow-rev" />

      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(36,31,46,0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />
    </div>
  );
}