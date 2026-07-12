/** Decorative hero background — 3 tiers matching how much ornamentation each original service page had. */
export function ServiceHeroFX({ variant }: { variant: "rich" | "medium" | "minimal" }) {
  if (variant === "minimal") {
    return (
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-pulse absolute top-1/3 right-1/4 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle,rgba(217,255,106,.1) 0%,transparent 70%)" }} />
      </div>
    );
  }

  if (variant === "medium") {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-pulse absolute top-1/3 right-1/4 w-[380px] h-[380px] rounded-full" style={{ background: "radial-gradient(circle,rgba(217,255,106,.12) 0%,transparent 70%)" }} />
        <div className="glow-pulse absolute -top-20 left-1/4 w-[240px] h-[240px] rounded-full" style={{ background: "radial-gradient(circle,rgba(217,255,106,.07) 0%,transparent 70%)", animationDelay: "1.5s" }} />
        <div className="float-b absolute bottom-24 right-32 w-20 h-20 opacity-25"><div className="spin-rev w-full h-full rounded-full border border-brand-primary/30" /></div>
        <div className="float-c absolute top-1/2 right-12 w-3 h-3 rounded-full bg-brand-primary opacity-50" />
        <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[.04]" viewBox="0 0 600 800" fill="none"><defs><pattern id="hg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" fill="none" stroke="#D9FF6A" strokeWidth="0.5" /></pattern></defs><rect width="600" height="800" fill="url(#hg)" /></svg>
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] opacity-[.07]" viewBox="0 0 400 400" fill="none"><path d="M0 200 Q100 80 200 200 Q300 320 400 200" stroke="#D9FF6A" strokeWidth="1.5" fill="none" /><circle cx="200" cy="200" r="140" stroke="#D9FF6A" strokeWidth=".5" fill="none" /></svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="glow-pulse absolute top-1/3 right-1/4 w-[420px] h-[420px] rounded-full" style={{ background: "radial-gradient(circle,rgba(217,255,106,.12) 0%,transparent 70%)" }} />
      <div className="glow-pulse absolute -top-20 left-1/4 w-[280px] h-[280px] rounded-full" style={{ background: "radial-gradient(circle,rgba(217,255,106,.07) 0%,transparent 70%)", animationDelay: "1.5s" }} />
      <div className="float-a absolute top-16 right-16 w-32 h-32 opacity-30">
        <div className="spin-slow w-full h-full rounded-full border border-brand-primary/40" style={{ borderStyle: "dashed" }} />
      </div>
      <div className="float-b absolute bottom-24 right-32 w-20 h-20 opacity-25">
        <div className="spin-rev w-full h-full rounded-full border border-brand-primary/30" />
      </div>
      <div className="float-c absolute top-1/2 right-12 w-3 h-3 rounded-full bg-brand-primary opacity-50" />
      <div className="float-a absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-brand-primary opacity-40" style={{ animationDelay: "2s" }} />
      <div className="float-b absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-brand-primary opacity-30" style={{ animationDelay: "1s" }} />
      <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[.04]" viewBox="0 0 600 800" fill="none">
        <defs><pattern id="hg-rich" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" fill="none" stroke="#D9FF6A" strokeWidth="0.5" /></pattern></defs>
        <rect width="600" height="800" fill="url(#hg-rich)" />
      </svg>
      <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] opacity-[.07]" viewBox="0 0 400 400" fill="none">
        <path d="M0 200 Q100 80 200 200 Q300 320 400 200" stroke="#D9FF6A" strokeWidth="1.5" fill="none" />
        <path d="M0 230 Q100 110 200 230 Q300 350 400 230" stroke="#D9FF6A" strokeWidth="1" fill="none" />
        <path d="M0 170 Q100 50 200 170 Q300 290 400 170" stroke="#D9FF6A" strokeWidth="1" fill="none" />
        <circle cx="200" cy="200" r="80" stroke="#D9FF6A" strokeWidth=".8" fill="none" />
        <circle cx="200" cy="200" r="140" stroke="#D9FF6A" strokeWidth=".5" fill="none" />
      </svg>
    </div>
  );
}
