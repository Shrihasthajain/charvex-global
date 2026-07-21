import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DashboardLayout from "../../components/dashboard/layout"
import { Plus, Users, UserCheck, Briefcase } from "lucide-react"

const initialDomains = [
  { emoji: "⚛️", name: "Full Stack Development", students: 68, mentors: 4, active: 45, enabled: true },
  { emoji: "📊", name: "Data Science", students: 42, mentors: 3, active: 30, enabled: true },
  { emoji: "🎨", name: "UI/UX Design", students: 35, mentors: 2, active: 28, enabled: true },
  { emoji: "☁️", name: "Cloud Computing", students: 28, mentors: 2, active: 20, enabled: true },
  { emoji: "🔐", name: "Cybersecurity", students: 20, mentors: 2, active: 18, enabled: true },
  { emoji: "🤖", name: "AI / Machine Learning", students: 15, mentors: 1, active: 15, enabled: false },
]

function Toggle({ enabled, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ${
        enabled ? "bg-gradient-to-r from-indigo-500 to-blue-500" : "bg-slate-300"
      }`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-200 ${
          enabled ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </button>
  )
}

export default function Domains() {
  const navigate = useNavigate()
  const [domains, setDomains] = useState(initialDomains)

  const toggle = (i) =>
    setDomains((prev) => prev.map((d, idx) => (idx === i ? { ...d, enabled: !d.enabled } : d)))

  return (
    <DashboardLayout
      role="admin"
      currentPath="/admin/domains"
      onNavigate={navigate}
      title="Domains"
      subtitle="Manage internship domains and availability"
    >
      <div className="mb-5 flex justify-end">
        <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
          <Plus className="h-4 w-4" /> Add Domain
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {domains.map((d, i) => (
          <div
            key={d.name}
            className={`rounded-xl border bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
              d.enabled ? "border-slate-200" : "border-slate-100 opacity-70"
            }`}
          >
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{d.emoji}</div>
                <div>
                  <h3 className="text-[13px] font-semibold leading-snug text-slate-900">{d.name}</h3>
                  <span className={`text-[10px] font-semibold ${d.enabled ? "text-emerald-600" : "text-slate-400"}`}>
                    {d.enabled ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
              <Toggle enabled={d.enabled} onChange={() => toggle(i)} />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { icon: <Users className="h-3.5 w-3.5" />, label: "Students", value: d.students },
                { icon: <UserCheck className="h-3.5 w-3.5" />, label: "Mentors", value: d.mentors },
                { icon: <Briefcase className="h-3.5 w-3.5" />, label: "Active", value: d.active },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-center transition-colors duration-150 hover:bg-slate-100"
                >
                  <div className="mb-1 flex items-center justify-center text-indigo-600">{stat.icon}</div>
                  <p className="text-lg font-bold leading-none text-slate-900">{stat.value}</p>
                  <p className="mt-0.5 text-[10px] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}