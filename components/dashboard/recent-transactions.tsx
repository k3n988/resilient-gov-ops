import { FileText } from "lucide-react"
import { recentTransactions, type TxStatus } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

const statusStyles: Record<TxStatus, string> = {
  "Pending Validation": "bg-amber-100 text-amber-700",
  "Ready to Sync": "bg-emerald-100 text-emerald-700",
  Scanned: "bg-sky-100 text-sky-700",
}

export function RecentTransactions() {
  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-950">Recent Transactions</h2>
        <a href="#" className="text-sm font-medium text-sky-600 hover:underline">
          View All
        </a>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[440px] text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
              <th className="py-3 pr-4 font-medium">Name / Applicant</th>
              <th className="px-4 py-3 font-medium">Service</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="py-3 pl-4 text-right font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((t) => (
              <tr key={t.name} className="border-b border-slate-200/70 last:border-0">
                <td className="whitespace-nowrap py-4 pr-4">
                  <span className="flex items-center gap-2.5 font-medium text-slate-950">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                      <FileText className="size-4" aria-hidden="true" />
                    </span>
                    {t.name}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-slate-600">{t.service}</td>
                <td className="whitespace-nowrap px-4 py-4">
                  <span className={cn("inline-flex rounded-full px-2.5 py-1 text-xs font-semibold", statusStyles[t.status])}>
                    {t.status}
                  </span>
                </td>
                <td className="whitespace-nowrap py-4 pl-4 text-right text-slate-500">{t.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
