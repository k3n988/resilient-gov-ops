export type PriorityQueueItemTone = "destructive" | "info" | "warning" | "success";

export type PriorityQueueItem = {
  title: string;
  description: string;
  level: string;
  tone: PriorityQueueItemTone;
  pending: number;
};

export const priorityQueue: PriorityQueueItem[] = [
  {
    level: "HIGH PRIORITY",
    title: "Death Certificates",
    description: "For burial & urgent transactions",
    tone: "destructive",
    pending: 12,
  },
  {
    level: "MEDIUM PRIORITY",
    title: "Birth Certificates",
    description: "Registration & documentation",
    tone: "info",
    pending: 15,
  },
  {
    level: "LOW PRIORITY",
    title: "Marriage Certificates",
    description: "Civil & marriage documentation",
    tone: "warning",
    pending: 7,
  },
  {
    level: "ROUTINE",
    title: "Other Services",
    description: "CTC, permits, others",
    tone: "success",
    pending: 3,
  },
];

export type TxStatus = "Pending Validation" | "Ready to Sync" | "Scanned";

export const recentTransactions = [
  {
    name: "Maria Santos",
    service: "Birth Certificate",
    status: "Pending Validation" as const,
    time: "10:45 AM",
  },
  {
    name: "Pedro Dela Cruz",
    service: "Death Certificate",
    status: "Ready to Sync" as const,
    time: "10:30 AM",
  },
  {
    name: "Ana Reyes",
    service: "Marriage Certificate",
    status: "Pending Validation" as const,
    time: "10:15 AM",
  },
  {
    name: "Juan Mercado",
    service: "Certified True Copy",
    status: "Scanned" as const,
    time: "09:50 AM",
  },
  {
    name: "Rosalinda Lim",
    service: "Birth Certificate",
    status: "Ready to Sync" as const,
    time: "09:30 AM",
  },
];

export const systemInfo = [
  {
    label: "Storage Used (Local)",
    value: "23.4 GB / 256 GB (9%)",
    progress: 9,
  },
  {
    label: "Records Stored Locally",
    value: "1,256",
  },
  {
    label: "Device",
    value: "LGU-LAPTOP-01",
  },
  {
    label: "Application Version",
    value: "1.0.0 (Offline)",
  },
];

export type ServiceBreakdownItem = {
  label: string;
  value: number;
  percentage: number;
  color: string;
};

export const serviceBreakdown: ServiceBreakdownItem[] = [
  {
    label: "Birth Certificates",
    value: 45,
    percentage: 35,
    color: "#0ea5e9",
  },
  {
    label: "Death Certificates",
    value: 30,
    percentage: 23,
    color: "#22c55e",
  },
  {
    label: "Marriage Certificates",
    value: 26,
    percentage: 20,
    color: "#f97316",
  },
  {
    label: "Certified True Copies",
    value: 18,
    percentage: 14,
    color: "#8b5cf6",
  },
  {
    label: "Other Services",
    value: 10,
    percentage: 8,
    color: "#64748b",
  },
];

export const summaryCards = [
  {
    title: "Local Records",
    value: "1,256",
    description: "Records stored on this device",
    tone: "success" as const,
  },
  {
    title: "Sync Status",
    value: "Offline",
    description: "No active synchronization",
    tone: "warning" as const,
  },
  {
    title: "Device",
    value: "LGU-LAPTOP-01",
    description: "Current workstation",
    tone: "info" as const,
  },
  {
    title: "App Version",
    value: "1.0.0",
    description: "ContinuGov Dashboard",
    tone: "destructive" as const,
  },
];
