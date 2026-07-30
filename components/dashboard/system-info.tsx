import { Leaf, X } from "lucide-react"
import { systemInfo } from "@/lib/dashboard-data"

export function SystemInfo() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm">
        <h2 className="text-base font-semibold text-slate-950">System Information</h2>
        <dl className="mt-4 space-y-4">
          {systemInfo.map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-4">
              <dt className="text-sm text-slate-500">{item.label}</dt>
              <dd className="min-w-0 flex-1 text-right">
                <span className="text-sm font-medium text-slate-950">{item.value}</span>
                {typeof item.progress === "number" ? (
                  <span className="mt-1.5 block h-1.5 w-full overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
                    <span className="block h-full rounded-full bg-sky-500" style={{ width: `${item.progress}%` }} />
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-5">
        <div className="flex items-start gap-3">
          <Leaf className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden="true" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-emerald-700">ContinuGov Tip</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              Ensure all documents are clear and complete before validation to avoid delays during synchronization.
            </p>
          </div>
          <button className="text-slate-500 hover:text-slate-800" aria-label="Dismiss tip">
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  )
}
