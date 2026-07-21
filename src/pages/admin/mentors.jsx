import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DashboardLayout from "../../components/dashboard/layout"
import { Search, Plus, Eye, Edit2, Star } from "lucide-react"

const mentors = [
  { initials: "TS", name: "Theja Suryachar P J", expertise: "Full Stack, Cloud", students: 22, rating: 4.9, status: "Active" },
  { initials: "MA", name: "Mohammed Ahazar", expertise: "Backend, Architecture", students: 18, rating: 4.8, status: "Active" },
  { initials: "JK", name: "Jeevan K", expertise: "Data Science, AI/ML", students: 15, rating: 4.7, status: "Active" },
  { initials: "DH", name: "Deekshith H R", expertise: "UI/UX, Frontend", students: 12, rating: 4.6, status: "Active" },
  { initials: "RS", name: "Rohan Shetty", expertise: "Cybersecurity, DevOps", students: 8, rating: 4.5, status: "On Leave" },
]

const quickStats = [
  { label: "Total Mentors", value: 24 },
  { label: "Active", value: 20 },
  { label: "Avg Rating", value: "4.7" },
  { label: "Avg Students/Mentor", value: "10" },
]

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`h-3 w-3 ${s <= Math.floor(rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`}
        />
      ))}
      <span className="ml-1 text-xs text-slate-500">{rating}</span>
    </div>
  )
}

export default function Mentors() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  const filtered = mentors.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.expertise.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <DashboardLayout
      role="admin"
      currentPath="/admin/mentors"
      onNavigate={navigate}
      title="Mentors"
      subtitle="Manage and monitor all mentors"
    >
      <div className="w-full">
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {quickStats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <p className="text-2xl font-bold text-slate-900">{s.value}</p>
              <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-5 flex items-center gap-3">
          <div className="flex max-w-xs flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 transition-all duration-200 focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100">
            <Search className="h-3.5 w-3.5 shrink-0 text-slate-400" />
            <input
              type="text"
              placeholder="Search mentors…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
          <button className="ml-auto flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
            <Plus className="h-4 w-4" /> Add Mentor
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  {["Mentor", "Expertise", "Students", "Rating", "Status", "Actions"].map((h) => (
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
                {filtered.map((m, i) => (
                  <tr
                    key={m.name}
                    className={`border-b border-slate-100 transition-colors duration-150 hover:bg-slate-50 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                    }`}
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-sm">
                          <span className="text-xs font-bold text-white">{m.initials}</span>
                        </div>
                        <span className="text-sm font-medium text-slate-900">{m.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-slate-500">{m.expertise}</td>
                    <td className="px-5 py-3.5 text-sm font-semibold text-slate-700">{m.students}</td>
                    <td className="px-5 py-3.5">
                      <Stars rating={m.rating} />
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          m.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {m.status}
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
        </div>
      </div>
    </DashboardLayout>
  )
}