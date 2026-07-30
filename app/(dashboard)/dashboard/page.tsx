import { ArrowRight, Cloud, Clock, FileText, Leaf, Lightbulb, WifiOff } from "lucide-react"
import { PrioritySummary } from "@/components/dashboard/priority-summary"
import { PriorityQueue } from "@/components/dashboard/priority-queue"

export default function DashboardPage() {
  return (
    <main className="bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1480px] space-y-6">
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-semibold text-slate-950">Dashboard</h1>
            <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-slate-500" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13V12C7 10.3431 8.34315 9 10 9H14C15.6569 9 17 10.3431 17 12V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 13V11C7 8.79086 8.79086 7 11 7H13C15.2091 7 17 8.79086 17 11V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 13V18C7 19.1046 7.89543 20 9 20H15C16.1046 20 17 19.1046 17 18V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>LGU Civil Registry Office</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <section className="rounded-[28px] border border-amber-100/80 bg-amber-50 p-4 shadow-sm min-h-[140px]">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-3xl bg-amber-500 text-white">
                <Lightbulb className="size-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-amber-900">Power Outage Mode</p>
                <p className="mt-2 text-sm font-semibold text-slate-950">You are currently operating in offline mode.</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  All records are saved locally and will be synchronized when connectivity is restored.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200/80 bg-white p-4 shadow-sm min-h-[140px]">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                <WifiOff className="size-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-500">Sync Status</p>
                <p className="mt-2 text-sm font-semibold text-rose-600">Not Connected</p>
                <p className="mt-1 text-sm text-slate-500">Last successful sync: --</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">Will sync automatically when online.</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700">
                <ArrowRight className="size-4" aria-hidden="true" />
                Sync Now
              </button>
            </div>
          </section>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <section className="rounded-[28px] border border-slate-200/70 bg-slate-50 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Total Transactions</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">128</p>
                <p className="mt-2 text-sm text-slate-500">Today</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-slate-100 text-slate-700">
                <FileText className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200/70 bg-emerald-50 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Pending Queue</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">37</p>
                <p className="mt-2 text-sm text-slate-500">Awaiting Verification</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-emerald-100 text-emerald-700">
                <Clock className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200/70 bg-amber-50 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Ready to Sync</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">24</p>
                <p className="mt-2 text-sm text-slate-500">Will upload when online</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-amber-100 text-amber-700">
                <Cloud className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200/70 bg-violet-50 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Synced Today</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">0</p>
                <p className="mt-2 text-sm text-slate-500">No connection yet</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-violet-100 text-violet-700">
                <ArrowRight className="size-5" aria-hidden="true" />
              </div>
            </div>
          </section>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <PrioritySummary />
          <PriorityQueue />
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <section className="h-full rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-950">Recent Transactions</h2>
              <a href="#" className="text-sm font-medium text-sky-600 hover:underline">
                View All
              </a>
            </div>

            <div className="mt-5 overflow-x-auto min-w-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                    <th className="py-3 pr-4 font-medium">Service</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="py-3 pl-4 text-right font-medium">Time</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600">
                  {[
                    ["Birth Certificate", "Pending Validation", "10:45 AM", "bg-amber-100 text-amber-700"],
                    ["Death Certificate", "Ready to Sync", "10:30 AM", "bg-emerald-100 text-emerald-700"],
                    ["Marriage Certificate", "Pending Validation", "10:15 AM", "bg-amber-100 text-amber-700"],
                    ["Certified True Copy", "Scanned", "09:50 AM", "bg-sky-100 text-sky-700"],
                    ["Birth Certificate", "Ready to Sync", "09:30 AM", "bg-emerald-100 text-emerald-700"],
                  ].map(([service, status, time, badge]) => (
                    <tr key={`${service}-${time}`} className="border-b border-slate-200/70 last:border-0">
                      <td className="whitespace-nowrap py-4 pr-4 font-medium text-slate-950">{service}</td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <span className={`${badge} inline-flex rounded-full px-3 py-1 text-[10px] font-semibold`}>{status}</span>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 text-right text-slate-500">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="grid h-full grid-rows-2 gap-6">
            <section className="h-full rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">System Information</h2>
              <dl className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Storage Used (Local)</dt>
                  <dd className="font-semibold text-slate-950">23.4 GB / 256 GB (9%)</dd>
                </div>
                <div className="rounded-full bg-slate-100 p-1">
                  <div className="h-2 rounded-full bg-sky-600" style={{ width: '35%' }} />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Records Stored Locally</dt>
                  <dd className="font-semibold text-slate-950">1,256</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Device</dt>
                  <dd className="font-semibold text-slate-950">LGU-LAPTOP-01</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Application Version</dt>
                  <dd className="font-semibold text-slate-950">1.0.0 (Offline)</dd>
                </div>
              </dl>
            </section>

            <section className="h-full rounded-[28px] border border-emerald-200/80 bg-emerald-50 p-5 shadow-sm">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                    <Leaf className="size-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-emerald-700">ContinuGov Tip</p>
                    <p className="mt-2 text-sm text-slate-700">
                      Ensure all documents are clear and complete before validation to avoid delays during synchronization.
                    </p>
                  </div>
                </div>
                <button className="self-start rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200">
                  Dismiss
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
