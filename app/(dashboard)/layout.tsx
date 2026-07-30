import { AppHeader } from "@/components/layout/app-header"
import { AppSidebar } from "@/components/layout/app-sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="min-h-full lg:grid lg:grid-cols-[256px_minmax(0,1fr)]">
        <AppSidebar />
        <div className="flex min-h-full flex-col">
          <AppHeader />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  )
}
