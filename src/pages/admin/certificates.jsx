import { useNavigate } from "react-router-dom"
import DashboardLayout from "../../components/dashboard/layout"
import { Plus, Download, XCircle } from "lucide-react"

const certs = [
  { student: "Arjun Sharma", type: "Full Stack Development", issued: "10 Jun 2026", expiry: "10 Jun 2028", status: "Active" },
  { student: "Priya Nair", type: "Data Science Fundamentals", issued: "5 Jun 2026", expiry: "5 Jun 2028", status: "Active" },
  { student: "Rahul Menon", type: "UI/UX Design Pro", issued: "1 May 2026", expiry: "1 May 2028", status: "Active" },
  { student: "Sneha Patel", type: "Cloud Computing", issued: "20 Apr 2026", expiry: "20 Apr 2028", status: "Active" },
  { student: "Kiran Bhat", type: "Cybersecurity Basics", issued: "—", expiry: "—", status: "Pending" },
  { student: "Anika Khanna", type: "Full Stack Development", issued: "15 Mar 2026", expiry: "15 Mar 2027", status: "Revoked" },
]

const stats = [
  { label: "Issued", value: 4, color: "text-emerald-600" },
  { label: "Pending", value: 1, color: "text-amber-600" },
  { label: "Revoked", value: 1, color: "text-red-600" },
]

const statusColors = {
  Active: "bg-emerald-50 text-emerald-700",
  Pending: "bg-amber-50 text-amber-700",
  Revoked: "bg-red-50 text-red-700",
}

export default function AdminCertificates() {
  const navigate = useNavigate()
  return (
    <DashboardLayout
      role="admin"
      currentPath="/admin/certificates"
      onNavigate={navigate}
      title="Certificates"
      subtitle="Issue and manage student certificates"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
              <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
          <Plus className="h-4 w-4" /> Issue Certificate
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                {["Student", "Certificate Type", "Issue Date", "Expiry", "Status", "Actions"].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {certs.map((c, i) => (
                <tr
                  key={i}
                  className={`border-b border-slate-100 transition-colors duration-150 hover:bg-slate-50 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                  }`}
                >
                  <td className="px-5 py-3.5 text-sm font-medium text-slate-900">{c.student}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700">{c.type}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{c.issued}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{c.expiry}</td>
                  <td className="px-5 py-3.5">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusColors[c.status] ?? ""}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-colors duration-150 hover:bg-slate-100">
                        <Download className="h-3 w-3" /> Download
                      </button>
                      {c.status === "Active" && (
                        <button className="flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-medium text-red-600 transition-colors duration-150 hover:bg-red-100">
                          <XCircle className="h-3 w-3" /> Revoke
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}