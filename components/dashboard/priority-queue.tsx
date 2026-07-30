import { Cross, Baby, Heart, FileText, type LucideIcon } from "lucide-react"
import { priorityQueue, type PriorityQueueItem } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

const icons: Record<string, LucideIcon> = {
  "Death Certificates": Cross,
  "Birth Certificates": Baby,
  "Marriage Certificates": Heart,
  "Other Services": FileText,
}

const toneStyles: Record<PriorityQueueItem["tone"], { badge: string; icon: string }> = {
  destructive: { badge: "text-rose-600", icon: "bg-rose-100 text-rose-600" },
  info: { badge: "text-sky-600", icon: "bg-sky-100 text-sky-600" },
  warning: { badge: "text-amber-700", icon: "bg-amber-100 text-amber-700" },
  success: { badge: "text-emerald-600", icon: "bg-emerald-100 text-emerald-600" },
}

export function PriorityQueue() {
  return (
    <section className="h-full rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-950">Priority Queue</h2>
        <a href="#" className="text-sm font-medium text-sky-600 hover:underline">
          View All
        </a>
      </div>

      <ul className="mt-4 divide-y divide-slate-200">
        {priorityQueue.map((item) => {
          const Icon = icons[item.title] ?? FileText
          const tone = toneStyles[item.tone]
          return (
            <li key={item.level} className="flex items-center gap-3 py-3">
              <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-3xl", tone.icon)}>
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className={cn("text-[10px] font-bold uppercase tracking-[0.32em]", tone.badge)}>{item.level}</p>
                <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                <p className="truncate text-xs text-slate-500">{item.description}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xl font-semibold text-slate-950">{item.pending}</p>
                <p className="text-sm text-slate-500">Pending</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
