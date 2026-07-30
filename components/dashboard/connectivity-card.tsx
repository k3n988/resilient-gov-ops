import { WifiOff, Zap } from "lucide-react"

export function ConnectivityCard() {
  return (
    <section className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-foreground">Connectivity</h2>
          <p className="text-sm text-muted-foreground">Local device network status</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-warning/10 px-3 py-1 text-xs font-semibold text-warning-foreground">
          <WifiOff className="size-4" aria-hidden="true" />
          Offline Mode
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border/70 bg-muted p-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Zap className="size-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Operating on local device</p>
          <p className="text-sm text-muted-foreground">No active cloud sync</p>
        </div>
      </div>
    </section>
  )
}
