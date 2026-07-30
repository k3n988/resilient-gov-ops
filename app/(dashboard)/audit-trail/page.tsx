export default function AuditTrailPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold">Audit Trail</h1>
          <p className="mt-2 text-sm text-slate-600">
            Review recent activity, approvals, and auditing events for government operations.
          </p>
        </div>

        <section className="rounded-3xl border border-border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Recent Events</h2>
              <p className="mt-1 text-sm text-slate-600">A quick summary of the latest logged activity.</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Application submitted</p>
              <p className="mt-1 text-sm text-slate-600">User Juan Dela Cruz submitted a new Certificate application.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Document validated</p>
              <p className="mt-1 text-sm text-slate-600">System validation completed for document capture batch #42.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Sync attempt</p>
              <p className="mt-1 text-sm text-slate-600">Offline sync attempted and queued for next connection.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
