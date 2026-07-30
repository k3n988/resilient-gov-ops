export default function AdministrationPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold">Administration</h1>
          <p className="mt-2 text-sm text-slate-600">
            Manage agency settings, user access, and system configuration from this view.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">User Access</h2>
            <p className="mt-2 text-sm text-slate-600">Review and update administrator and operator roles.</p>
          </section>
          <section className="rounded-3xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">System Settings</h2>
            <p className="mt-2 text-sm text-slate-600">Configure synchronization, offline behavior, and application options.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
