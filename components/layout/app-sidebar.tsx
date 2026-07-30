"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Activity,
  Archive,
  BarChart3,
  Camera,
  Cpu,
  FileText,
  FolderPlus,
  LayoutDashboard,
  ListChecks,
  RefreshCcw,
  Send,
  Settings,
  ShieldCheck,
  Users,
  WifiOff,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Applications", href: "/applications", icon: FileText },
  { label: "Document Capture", href: "/document-capture", icon: Camera },
  { label: "OCR Workspace", href: "/ocr-workspace", icon: Activity },
  { label: "AI Validation", href: "/ai-validation", icon: Cpu },
  { label: "Priority Queue", href: "/priority-queue", icon: ListChecks, badge: "37" },
  { label: "Document Release", href: "/document-release", icon: Send },
  { label: "Offline Operations", href: "/offline-operations", icon: WifiOff },
  { label: "Device Relay Network", href: "/device-relay", icon: RefreshCcw },
  { label: "Sync Center", href: "/sync-center", icon: Archive },
  { label: "Records", href: "/records", icon: FileText },
  { label: "Citizens", href: "/citizens", icon: Users },
  { label: "Reports", href: "/reports", icon: BarChart3 },
  { label: "Audit Trail", href: "/audit-trail", icon: ShieldCheck },
  { label: "Administration", href: "/administration", icon: FolderPlus },
  { label: "Settings", href: "/settings", icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden min-h-full shrink-0 border-r border-slate-800 bg-slate-950 px-3 py-6 text-slate-300 lg:flex lg:w-64 lg:flex-col">
      <div className="mb-8 flex items-center gap-2 rounded-3xl bg-slate-900 px-3 py-3 shadow-sm">
        <div className="flex h-9 w-9 items-center justify-center rounded-3xl bg-sky-500 text-white">
          <ShieldCheck className="size-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">ContinuGov</p>
          <h1 className="text-sm font-semibold text-white">Energy-Resilient Government</h1>
          <p className="text-[10px] text-slate-500">Operations</p>
        </div>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center justify-between gap-3 rounded-[18px] px-4 py-3 text-sm font-medium transition",
                isActive
                  ? "bg-slate-800 text-white shadow-[0_1px_0_rgba(148,163,184,0.12)]"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="flex items-center gap-3">
                <Icon className={cn("size-5", isActive ? "text-sky-400" : "text-slate-400")} aria-hidden="true" />
                <span>{item.label}</span>
              </span>
              {item.badge ? (
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] font-semibold text-slate-300">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto rounded-[28px] border border-slate-800 bg-slate-900 p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">System Status</p>
            <p className="mt-2 text-sm font-semibold text-white">Offline Mode</p>
          </div>
          <WifiOff className="size-5 text-slate-400" aria-hidden="true" />
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">Operating on local device</p>
      </div>
    </aside>
  )
}
