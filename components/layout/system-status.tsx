import { WifiOff } from "lucide-react"

export function SystemStatus() {
  return (
    <section className="rounded-3xl border border-border bg-slate-900 p-5 text-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-amber-500/10 p-3 text-amber-300">
          <WifiOff className="size-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-semibold">Offline Mode</p>
          <p className="text-sm text-slate-300">Operating on local device only.</p>
        </div>
      </div>
    </section>
  )
}
