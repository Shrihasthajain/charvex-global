import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import DashboardLayout from '../../components/dashboard/layout'
import { Eye, Edit2 } from 'lucide-react'

const internships = [
  { student: 'Arjun Sharma', domain: 'Full Stack Dev', mentor: 'Theja S P J', start: '1 Mar 2026', end: '31 May 2026', progress: 68, status: 'Active' },
  { student: 'Priya Nair', domain: 'Data Science', mentor: 'Jeevan K', start: '3 Mar 2026', end: '2 Jun 2026', progress: 52, status: 'Active' },
  { student: 'Rahul Menon', domain: 'UI/UX Design', mentor: 'Deekshith H R', start: '1 Jan 2026', end: '31 Mar 2026', progress: 100, status: 'Completed' },
  { student: 'Sneha Patel', domain: 'Cloud Computing', mentor: 'Mohammed A', start: '10 Mar 2026', end: '9 Jun 2026', progress: 34, status: 'Active' },
  { student: 'Kiran Bhat', domain: 'AI/ML', mentor: 'Theja S P J', start: '1 Aug 2026', end: '31 Oct 2026', progress: 0, status: 'Not Started' },
  { student: 'Anika Khanna', domain: 'Cybersecurity', mentor: 'Jeevan K', start: '15 Feb 2026', end: '14 May 2026', progress: 78, status: 'Active' },
  { student: 'Vikram Rao', domain: 'Full Stack Dev', mentor: 'Deekshith H R', start: '1 Feb 2026', end: '30 Apr 2026', progress: 90, status: 'Active' },
  { student: 'Divya Menon', domain: 'DevOps', mentor: 'Mohammed A', start: '5 Apr 2026', end: '4 Jul 2026', progress: 45, status: 'Active' },
  { student: 'Ravi Kumar', domain: 'Frontend Dev', mentor: 'Deekshith H R', start: '1 May 2026', end: '31 Jul 2026', progress: 22, status: 'Active' },
  { student: 'Meera Iyer', domain: 'Digital Marketing', mentor: 'Jeevan K', start: '10 Jan 2026', end: '9 Apr 2026', progress: 100, status: 'Completed' },
]

const statusStyles = {
  Active: 'bg-emerald-50 text-emerald-600',
  Completed: 'bg-indigo-50 text-indigo-600',
  'Not Started': 'bg-amber-50 text-amber-700',
}

const stats = [
  { label: 'Total Internships', value: '156', color: 'text-indigo-600' },
  { label: 'Active', value: '98', color: 'text-emerald-600' },
  { label: 'Completed', value: '45', color: 'text-violet-600' },
  { label: 'Not Started', value: '13', color: 'text-amber-600' },
]

const actionBtnClass =
  'flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors duration-150 hover:bg-slate-50'

export default function AdminInternships() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const filtered = internships.filter(
    (i) =>
      i.student.toLowerCase().includes(search.toLowerCase()) ||
      i.domain.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <DashboardLayout
      role="admin"
      currentPath="/admin/internships"
      onNavigate={navigate}
      title="Internship Management"
      subtitle="Track and manage all active internships"
    >
      <div className="w-full">
        {/* Stats */}
        <div className="mb-6 grid grid-cols-4 gap-4 max-[900px]:grid-cols-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-slate-200 bg-white px-6 py-5 text-center shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <p className={`text-[28px] font-bold leading-none ${s.color}`}>{s.value}</p>
              <p className="mt-1 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-4 flex items-center gap-3">
          <input
            type="text"
            placeholder="Search by student or domain..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-[320px] flex-1 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-700 outline-none transition-all duration-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  {['Student', 'Domain', 'Mentor', 'Start Date', 'End Date', 'Progress', 'Status', 'Actions'].map((h) => (
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
                {filtered.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 transition-colors duration-150 hover:bg-slate-50 ${
                      i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
                    }`}
                  >
                    <td className="px-5 py-3.5 text-sm font-medium text-slate-900">{row.student}</td>
                    <td className="px-5 py-3.5 text-sm text-slate-700">{row.domain}</td>
                    <td className="px-5 py-3.5 text-sm text-slate-500">{row.mentor}</td>
                    <td className="px-5 py-3.5 text-[13px] text-slate-500">{row.start}</td>
                    <td className="px-5 py-3.5 text-[13px] text-slate-500">{row.end}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-20 flex-1 rounded-full bg-slate-200">
                          <div
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              row.progress === 100
                                ? 'bg-gradient-to-r from-emerald-400 to-emerald-500'
                                : 'bg-gradient-to-r from-indigo-500 to-blue-500'
                            }`}
                            style={{ width: `${row.progress}%` }}
                          />
                        </div>
                        <span className="min-w-[32px] text-xs text-slate-500">{row.progress}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[row.status] ?? ''}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex gap-2">
                        {[Eye, Edit2].map((Icon, j) => (
                          <button key={j} className={actionBtnClass}>
                            <Icon size={14} className="text-slate-400" />
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
            <span className="text-[13px] text-slate-500">
              Showing {filtered.length} of {internships.length} internships
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}