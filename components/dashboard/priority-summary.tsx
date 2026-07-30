import { type ServiceBreakdownItem, serviceBreakdown } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

const colorStyles: Record<string, string> = {
  "Birth Certificates": "bg-sky-500",
  "Death Certificates": "bg-emerald-500",
  "Marriage Certificates": "bg-orange-500",
  "Certified True Copies": "bg-violet-500",
  "Other Services": "bg-slate-500",
}

export function PrioritySummary() {
  return (
    <section className="h-full rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-950">Transactions by Type</h2>
          <p className="text-sm text-slate-500">Total distribution by service category</p>
        </div>
        <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
          Today
        </button>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[200px_minmax(0,1fr)]">
        <div className="flex items-center justify-center">
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-slate-100">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,_#0ea5e9_0%,_#0ea5e9_35%,_#22c55e_35%,_#22c55e_58%,_#f97316_58%,_#f97316_78%,_#8b5cf6_78%,_#8b5cf6_92%,_#64748b_92%,_#64748b_100%)]" />
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-slate-500">Total</p>
                <p className="text-3xl font-bold text-slate-950">128</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {serviceBreakdown.map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-4 rounded-[24px] bg-slate-50 p-3">
              <div className="flex items-center gap-3 min-w-0">
                <span className={cn("inline-flex h-3.5 w-3.5 rounded-full shrink-0", colorStyles[item.label])} />
                <div>
                  <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                  <p className="text-[11px] text-slate-500">{item.percentage}%</p>
                </div>
              </div>
              <p className="whitespace-nowrap text-sm font-semibold text-slate-950">
                {item.value} ({item.percentage}%)
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
