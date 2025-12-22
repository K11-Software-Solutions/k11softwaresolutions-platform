// components/ui/styles.ts
export const styles = {
  container: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
  section: "py-14 sm:py-18",
  h1: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900",
  h2: "text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900",
  p: "text-base sm:text-lg leading-relaxed text-slate-600",
  subtle: "text-sm text-slate-500",

  card:
    "rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow",
  cardPad: "p-6",

  // Buttons (consistent)
  btnBase:
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2",
  btnPrimary:
    "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
  btnSecondary:
    "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus:ring-slate-300",
  btnGhost:
    "bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-300",

  pill:
    "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur",
};
