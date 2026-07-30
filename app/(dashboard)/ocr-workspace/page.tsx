import { ArrowRight, CheckCircle, FileText, LayoutGrid, Zap } from "lucide-react"

export default function OcrWorkspacePage() {
  return (
    <main className="bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1480px] space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-slate-950">OCR Workspace</h1>
              <p className="mt-2 text-sm text-slate-500">Monitor optical character recognition workflows and review extracted data in real time.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700">
                <Zap className="size-4" aria-hidden="true" />
                Start OCR Batch
              </button>
              <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                View Extractions
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <section className="rounded-[28px] border border-slate-200/70 bg-slate-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">OCR Jobs</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">26</p>
                <p className="mt-2 text-sm text-slate-500">Active this hour</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-slate-100 text-slate-700">
                <LayoutGrid className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200/70 bg-emerald-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Fields Extracted</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">1,820</p>
                <p className="mt-2 text-sm text-slate-500">Validated automatically</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-emerald-100 text-emerald-700">
                <CheckCircle className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200/70 bg-amber-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Confidence</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">94%</p>
                <p className="mt-2 text-sm text-slate-500">Average accuracy</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-amber-100 text-amber-700">
                <FileText className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200/70 bg-violet-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Unprocessed</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">8</p>
                <p className="mt-2 text-sm text-slate-500">Awaiting OCR</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-violet-100 text-violet-700">
                <ArrowRight className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>
        </div>

        <section className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Current OCR Tasks</h2>
              <p className="mt-2 text-sm text-slate-500">Inspect the latest document batches and confirm extraction quality.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
              Review All
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                  <th className="py-3 pr-4">Batch</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="py-3 pl-4 text-right">Progress</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600">
                {[
                  ["Batch #832", "Birth Records", "Processing", "74%"],
                  ["Batch #829", "Marriage Certificates", "Review", "92%"],
                  ["Batch #827", "Death Papers", "Completed", "100%"],
                  ["Batch #825", "CTC Forms", "Queued", "0%"],
                ].map(([batch, type, status, progress]) => (
                  <tr key={batch} className="border-b border-slate-200/70 last:border-0">
                    <td className="py-4 pr-4 font-medium text-slate-950">{batch}</td>
                    <td className="px-4 py-4 text-slate-600">{type}</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{status}</span>
                    </td>
                    <td className="py-4 pl-4 text-right text-slate-500">{progress}</td>
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
