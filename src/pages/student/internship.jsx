import React, { useState } from 'react'
import { CheckCircle, Circle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/dashboard/layout'

const weeklyProgress = [
  { week: 'Week 1', assigned: 5, completed: 5, status: 'Completed' },
  { week: 'Week 2', assigned: 6, completed: 6, status: 'Completed' },
  { week: 'Week 3', assigned: 5, completed: 4, status: 'Completed' },
  { week: 'Week 4', assigned: 7, completed: 7, status: 'Completed' },
  { week: 'Week 5', assigned: 6, completed: 5, status: 'Completed' },
  { week: 'Week 6', assigned: 8, completed: 5, status: 'In Progress' },
]

const milestones = [
  { label: 'Onboarding & Setup', date: '01 Feb 2025', state: 'done' },
  { label: 'Module 1: HTML / CSS / JS', date: '14 Feb 2025', state: 'done' },
  { label: 'Module 2: React (current)', date: '01 Mar 2025', state: 'current' },
  { label: 'Module 3: Node.js & APIs', date: '15 Mar 2025', state: 'upcoming' },
  { label: 'Final Project & Review', date: '30 Apr 2025', state: 'upcoming' },
]

const initialTasks = [
  { title: 'Build a React To-Do App', due: '14 Jul 2025', priority: 'high', done: false },
  { title: 'Implement useState & useEffect Hooks', due: '12 Jul 2025', priority: 'high', done: true },
  { title: 'Code Review: Profile Component', due: '15 Jul 2025', priority: 'medium', done: false },
  { title: 'Document Component API', due: '16 Jul 2025', priority: 'low', done: false },
  { title: 'Write Unit Tests for Form Validation', due: '18 Jul 2025', priority: 'medium', done: false },
]

const evaluations = [
  { label: 'Communication', val: 85, bar: 'from-indigo-500 to-blue-500', text: 'text-indigo-600' },
  { label: 'Technical Skills', val: 78, bar: 'from-violet-500 to-purple-500', text: 'text-violet-600' },
  { label: 'Punctuality', val: 92, bar: 'from-emerald-500 to-emerald-600', text: 'text-emerald-600' },
  { label: 'Problem Solving', val: 70, bar: 'from-amber-400 to-amber-500', text: 'text-amber-600' },
]

const priorityStyles = {
  high: 'bg-red-50 text-red-600 ring-1 ring-red-200',
  medium: 'bg-amber-50 text-amber-600 ring-1 ring-amber-200',
  low: 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200',
}

const weekStatusStyles = {
  Completed: 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200',
  'In Progress': 'bg-amber-50 text-amber-600 ring-1 ring-amber-200',
}

const overviewCards = [
  { label: 'Domain', value: 'Full Stack Dev', color: 'text-indigo-600' },
  { label: 'Mentor', value: 'Priya Singh', color: 'text-violet-600' },
  { label: 'Duration', value: '3 Months', color: 'text-amber-600' },
  { label: 'Progress', value: '68%', color: 'text-emerald-600', progress: true },
]

const details = [
  ['Company', 'Charvex Global LLP'],
  ['Joining Date', '01 Feb 2025'],
  ['Completion Date', '30 Apr 2025'],
  ['Stipend', '₹10,000 / month'],
  ['Mode', 'Remote'],
]

export default function Internship() {
  const navigate = useNavigate()
  const [taskDone, setTaskDone] = useState(initialTasks.map((t) => t.done))

  return (
    <Layout
      role="student"
      currentPath="/student/internship"
      onNavigate={navigate}
      title="My Internship"
      subtitle="Track your internship progress and activities"
    >
      <div className="w-full space-y-6">
        {/* Status Banner */}
        <div className="flex flex-wrap items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3.5">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-bold text-emerald-800">Internship In Progress</span>
          <span className="text-[13px] text-emerald-700">
            — Full Stack Development · 01 Feb 2025 to 30 Apr 2025 · 68% complete
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {overviewCards.map((c, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">{c.label}</div>
              <div className={`text-xl font-bold leading-none ${c.color} ${c.progress ? 'mb-3' : ''}`}>{c.value}</div>
              {c.progress && (
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-700"
                    style={{ width: '68%' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
         
          <div className="flex flex-col gap-5 min-w-0">
            
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="text-[15px] font-bold text-slate-800 mb-4">Internship Details</div>
              {details.map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 py-2.5 last:border-b-0 last:pb-0"
                >
                  <span className="text-[13px] font-medium text-slate-500">{k}</span>
                  <span className="text-[13px] font-semibold text-slate-800 text-right">{v}</span>
                </div>
              ))}
            </div>

            
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="text-[15px] font-bold text-slate-800 mb-4">Weekly Progress</div>
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[380px] border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      {['Week', 'Assigned', 'Completed', 'Status'].map((h) => (
                        <th
                          key={h}
                          className="whitespace-nowrap pb-2 pr-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {weeklyProgress.map((w, i) => (
                      <tr
                        key={i}
                        className="border-b border-slate-100 last:border-b-0 transition-colors duration-150 hover:bg-slate-50"
                      >
                        <td className="py-2.5 pr-2.5 text-[13px] font-semibold text-slate-800">{w.week}</td>
                        <td className="py-2.5 pr-2.5 text-[13px] text-slate-500">{w.assigned}</td>
                        <td className="py-2.5 pr-2.5 text-[13px] text-slate-500">{w.completed}</td>
                        <td className="py-2.5 pr-2.5">
                          <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold ${weekStatusStyles[w.status] || 'bg-slate-100 text-slate-500'}`}>
                            {w.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 min-w-0">
            {/* Milestones */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="text-[15px] font-bold text-slate-800 mb-4">Milestones</div>
              <div className="flex flex-col gap-4">
                {milestones.map((m, i) => (
                  <div key={i} className="group flex items-start gap-3">
                    {m.state === 'done' && (
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-emerald-500 transition-transform duration-200 group-hover:scale-110" />
                    )}
                    {m.state === 'current' && (
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 shadow-md shadow-indigo-200 ring-4 ring-indigo-100">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>
                    )}
                    {m.state === 'upcoming' && (
                      <Circle size={20} className="mt-0.5 flex-shrink-0 text-slate-300" />
                    )}
                    <div>
                      <div className={`text-[13px] font-semibold ${m.state === 'upcoming' ? 'text-slate-400' : 'text-slate-800'}`}>
                        {m.label}
                      </div>
                      <div className="mt-0.5 text-[11px] text-slate-400">{m.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="text-[15px] font-bold text-slate-800 mb-4">Assigned Tasks</div>
              <div className="flex flex-col gap-2.5">
                {initialTasks.map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50/50"
                  >
                    <input
                      type="checkbox"
                      checked={taskDone[i]}
                      onChange={() => setTaskDone((d) => d.map((v, j) => (j === i ? !v : v)))}
                      className="h-4 w-4 flex-shrink-0 cursor-pointer accent-indigo-600"
                    />
                    <div className="min-w-0 flex-1">
                      <div className={`text-[13px] font-semibold ${taskDone[i] ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                        {t.title}
                      </div>
                      <div className="mt-0.5 text-[11px] text-slate-400">Due: {t.due}</div>
                    </div>
                    <span className={`flex-shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold capitalize ${priorityStyles[t.priority]}`}>
                      {t.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="text-[15px] font-bold text-slate-800 mb-4">Mentor Evaluation</div>
              <div className="flex flex-col gap-4">
                {evaluations.map((e) => (
                  <div key={e.label} className="group/eval">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[13px] font-semibold text-slate-700">{e.label}</span>
                      <span className={`text-[13px] font-bold ${e.text}`}>{e.val}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${e.bar} transition-all duration-500 ease-out group-hover/eval:brightness-110`}
                        style={{ width: `${e.val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}