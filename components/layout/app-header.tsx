import { BatteryFull, Search, ShieldCheck, Zap } from "lucide-react"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-900 bg-slate-950 px-4 py-3 shadow-sm sm:px-6 lg:px-8">
      <div className="mx-auto flex h-16 items-center justify-between gap-4">
        <div className="relative flex-1 min-w-0">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            type="search"
            placeholder="Search transactions, records, or citizens..."
            className="w-full rounded-full border border-slate-800 bg-slate-950/90 py-3 pl-12 pr-4 text-sm text-slate-200 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200 ring-1 ring-amber-500/20">
            <Zap className="size-4 text-amber-300" aria-hidden="true" />
            LOW POWER MODE
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-2.5 py-1.5 text-[10px] font-semibold text-slate-100 ring-1 ring-white/10">
            <BatteryFull className="size-4 text-emerald-400" aria-hidden="true" />
            78%
          </span>
          <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-2.5 py-1.5 text-sm font-semibold text-slate-100 ring-1 ring-white/10 shadow-sm hover:bg-slate-800">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white">
              JD
            </span>
            <span className="hidden min-w-0 flex-col text-left sm:flex">
              <span className="text-sm font-semibold text-slate-100">mica nek batumbakal</span>
              <span className="text-xs text-slate-500">Record Officer</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
