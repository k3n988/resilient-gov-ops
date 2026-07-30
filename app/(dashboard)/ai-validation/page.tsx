import { AlertTriangle, ArrowRight, CheckCircle, Cpu, ShieldCheck, Sparkles } from "lucide-react"

export default function AiValidationPage() {
  return (
    <main className="bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1480px] space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-slate-950">AI Validation</h1>
              <p className="mt-2 text-sm text-slate-500">Review machine predictions, resolve flags, and confirm document integrity.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700">
                <Cpu className="size-4" aria-hidden="true" />
                Run Validation
              </button>
              <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Review Flags
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <section className="rounded-[28px] border border-slate-200/70 bg-slate-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">AI Predictions</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">512</p>
                <p className="mt-2 text-sm text-slate-500">Processed today</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-slate-100 text-slate-700">
                <Sparkles className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200/70 bg-emerald-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Passed</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">428</p>
                <p className="mt-2 text-sm text-slate-500">Auto-approved</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-emerald-100 text-emerald-700">
                <CheckCircle className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200/70 bg-amber-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Flagged</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">38</p>
                <p className="mt-2 text-sm text-slate-500">Needs manual review</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-amber-100 text-amber-700">
                <AlertTriangle className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200/70 bg-violet-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Escalated</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">9</p>
                <p className="mt-2 text-sm text-slate-500">High-priority cases</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-violet-100 text-violet-700">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>
        </div>

        <section className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Validation Review</h2>
              <p className="mt-2 text-sm text-slate-500">Resolve flagged items and confirm AI decisions before final approval.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
              Open Review
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                  <th className="py-3 pr-4">Record</th>
                  <th className="px-4 py-3">Issue</th>
                  <th className="px-4 py-3">Severity</th>
                  <th className="py-3 pl-4 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600">
                {[
                  ["Birth Certificate #442", "Low confidence", "Medium", "10:12 AM"],
                  ["Marriage License #118", "Mismatch detected", "High", "09:58 AM"],
                  ["Death Certificate #73", "Unreadable text", "High", "09:24 AM"],
                  ["CTC Request #56", "Field missing", "Low", "Aug 1"],
                ].map(([record, issue, severity, date]) => (
                  <tr key={`${record}-${date}`} className="border-b border-slate-200/70 last:border-0">
                    <td className="py-4 pr-4 font-medium text-slate-950">{record}</td>
                    <td className="px-4 py-4 text-slate-600">{issue}</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{severity}</span>
                    </td>
                    <td className="py-4 pl-4 text-right text-slate-500">{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}
