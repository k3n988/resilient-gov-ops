import { ArrowRight, Camera, CheckCircle, DownloadCloud, FileText, ShieldCheck } from "lucide-react"

export default function DocumentCapturePage() {
  return (
    <main className="bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1480px] space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-slate-950">Document Capture</h1>
              <p className="mt-2 text-sm text-slate-500">Manage scan workflows, review pending captures, and keep the registry documents flowing.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700">
                <Camera className="size-4" aria-hidden="true" />
                Start Capture
              </button>
              <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Scan Settings
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <section className="rounded-[28px] border border-slate-200/70 bg-slate-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Scanned Documents</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">482</p>
                <p className="mt-2 text-sm text-slate-500">Captured today</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-slate-100 text-slate-700">
                <FileText className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200/70 bg-emerald-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Pending Review</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">18</p>
                <p className="mt-2 text-sm text-slate-500">Awaiting validation</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-emerald-100 text-emerald-700">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200/70 bg-amber-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Upload Ready</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">132</p>
                <p className="mt-2 text-sm text-slate-500">Ready for sync</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-amber-100 text-amber-700">
                <DownloadCloud className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200/70 bg-violet-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Capture Errors</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">3</p>
                <p className="mt-2 text-sm text-slate-500">Requires attention</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-violet-100 text-violet-700">
                <CheckCircle className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>
        </div>

        <section className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Capture Queue</h2>
              <p className="mt-2 text-sm text-slate-500">Review documents captured by local devices before they move on to OCR and validation.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
              Process All
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                  <th className="py-3 pr-4">Document</th>
                  <th className="px-4 py-3">Source</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="py-3 pl-4 text-right">Captured</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600">
                {[
                  ["Birth Certificate", "Mobile Scanner", "Ready", "10:45 AM"],
                  ["Marriage License", "Desk Scanner", "Review", "10:30 AM"],
                  ["Death Certificate", "Mobile Scanner", "Error", "10:15 AM"],
                  ["CTC Form", "Counter Capture", "Ready", "09:50 AM"],
                ].map(([document, source, status, time]) => (
                  <tr key={`${document}-${time}`} className="border-b border-slate-200/70 last:border-0">
                    <td className="py-4 pr-4 font-medium text-slate-950">{document}</td>
                    <td className="px-4 py-4 text-slate-600">{source}</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{status}</span>
                    </td>
                    <td className="py-4 pl-4 text-right text-slate-500">{time}</td>
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
