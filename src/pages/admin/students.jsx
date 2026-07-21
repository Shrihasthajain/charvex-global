import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DashboardLayout from "../../components/dashboard/layout"
import { Search, Plus, Eye, Edit2, ChevronLeft, ChevronRight } from "lucide-react"

const students = [
  { initials: "AS", name: "Arjun Sharma", email: "arjun@email.com", domain: "Full Stack Dev", mentor: "Theja S P J", progress: 68, status: "Active" },
  { initials: "PN", name: "Priya Nair", email: "priya@email.com", domain: "Data Science", mentor: "Jeevan K", progress: 52, status: "Active" },
  { initials: "RM", name: "Rahul Menon", email: "rahul@email.com", domain: "UI/UX Design", mentor: "Deekshith H R", progress: 100, status: "Completed" },
  { initials: "SP", name: "Sneha Patel", email: "sneha@email.com", domain: "Cloud Computing", mentor: "Mohammed A", progress: 34, status: "Active" },
  { initials: "KB", name: "Kiran Bhat", email: "kiran@email.com", domain: "AI/ML", mentor: "Theja S P J", progress: 5, status: "Pending" },
  { initials: "AK", name: "Anika Khanna", email: "anika@email.com", domain: "Cybersecurity", mentor: "Jeevan K", progress: 78, status: "Active" },
  { initials: "VR", name: "Vikram Rao", email: "vikram@email.com", domain: "Full Stack Dev", mentor: "Deekshith H R", progress: 90, status: "Active" },
]

const statusStyles = {
  Active: "bg-emerald-50 text-emerald-700",
  Completed: "bg-indigo-50 text-indigo-700",
  Pending: "bg-amber-50 text-amber-700",
}

export default function AdminStudents() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [domainFilter, setDomainFilter] = useState("All")
  const [statusFilter, setStatusFilter] = useState("All")

  const filtered = students.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase())
    const matchDomain = domainFilter === "All" || s.domain === domainFilter
    const matchStatus = statusFilter === "All" || s.status === statusFilter
    return matchSearch && matchDomain && matchStatus
  })

  return (
    <DashboardLayout
      role="admin"
      currentPath="/admin/students"
      onNavigate={navigate}
      title="Students"
      subtitle="Manage all registered student interns"
    >
      <div className="w-full">
        {/* Toolbar */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <div className="flex min-w-0 max-w-xs flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 transition-all duration-200 focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100">
            <Search className="h-3.5 w-3.5 shrink-0 text-slate-400" />
            <input
              type="text"
              placeholder="Search students…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
          <select
            value={domainFilter}
            onChange={(e) => setDomainFilter(e.target.value)}
            className="cursor-pointer rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition-colors duration-150 hover:border-slate-300 focus:border-indigo-400"
          >
            <option value="All">All Domains</option>
            {["Full Stack Dev", "Data Science", "UI/UX Design", "Cloud Computing", "Cybersecurity", "AI/ML"].map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="cursor-pointer rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition-colors duration-150 hover:border-slate-300 focus:border-indigo-400"
          >
            <option value="All">All Status</option>
            {["Active", "Pending", "Completed"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <button className="ml-auto flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
            <Plus className="h-4 w-4" /> Add Student
          </button>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  {["Student", "Email", "Domain", "Mentor", "Progress", "Status", "Actions"].map((h) => (
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
                {filtered.map((s, i) => (
                  <tr
                    key={s.email}
                    className={`border-b border-slate-100 transition-colors duration-150 hover:bg-slate-50 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                    }`}
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-sm">
                          <span className="text-xs font-bold text-white">{s.initials}</span>
                        </div>
                        <span className="text-sm font-medium text-slate-900">{s.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-slate-500">{s.email}</td>
                    <td className="px-5 py-3.5 text-sm text-slate-700">{s.domain}</td>
                    <td className="px-5 py-3.5 text-sm text-slate-700">{s.mentor}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-20 flex-1 rounded-full bg-slate-200">
                          <div
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              s.progress === 100
                                ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                                : "bg-gradient-to-r from-indigo-500 to-blue-500"
                            }`}
                            style={{ width: `${s.progress}%` }}
                          />
                        </div>
                        <span className="w-8 text-xs text-slate-500">{s.progress}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[s.status] ?? ""}`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 transition-colors duration-150 hover:bg-slate-100">
                          <Eye className="h-3.5 w-3.5 text-slate-500" />
                        </button>
                        <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 transition-colors duration-150 hover:bg-slate-100">
                          <Edit2 className="h-3.5 w-3.5 text-slate-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
            <p className="text-xs text-slate-500">
              Showing {filtered.length} of {students.length} students
            </p>
            <div className="flex items-center gap-1">
              <button className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 transition-colors duration-150 hover:bg-slate-50">
                <ChevronLeft className="h-3.5 w-3.5 text-slate-500" />
              </button>
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  className={`h-7 w-7 rounded-md text-xs font-medium transition-colors duration-150 ${
                    p === 1
                      ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-sm"
                      : "border border-slate-200 text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 transition-colors duration-150 hover:bg-slate-50">
                <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}