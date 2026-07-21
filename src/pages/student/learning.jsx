import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/dashboard/layout'
import { Search, Play, Download, ExternalLink, FileText, Video, Link as LinkIcon } from 'lucide-react'

const courses = [
  { emoji: '⚛️', title: 'React Fundamentals', domain: 'Frontend', duration: '4 weeks', lessons: 24, difficulty: 'Beginner', progress: 75, status: 'in-progress', bg: 'bg-blue-100' },
  { emoji: '🟩', title: 'Node.js Essentials', domain: 'Backend', duration: '3 weeks', lessons: 18, difficulty: 'Intermediate', progress: 40, status: 'in-progress', bg: 'bg-emerald-100' },
  { emoji: '🗄️', title: 'SQL & Database Design', domain: 'Database', duration: '2 weeks', lessons: 14, difficulty: 'Beginner', progress: 100, status: 'completed', bg: 'bg-amber-100' },
  { emoji: '🎨', title: 'CSS & Responsive UI', domain: 'Frontend', duration: '2 weeks', lessons: 16, difficulty: 'Beginner', progress: 100, status: 'completed', bg: 'bg-pink-100' },
  { emoji: '🔐', title: 'Authentication & JWT', domain: 'Security', duration: '1 week', lessons: 10, difficulty: 'Intermediate', progress: 0, status: 'not-started', bg: 'bg-violet-100' },
  { emoji: '☁️', title: 'AWS Cloud Basics', domain: 'Cloud', duration: '3 weeks', lessons: 20, difficulty: 'Advanced', progress: 20, status: 'in-progress', bg: 'bg-orange-100' },
]

const materials = [
  { name: 'React Hooks Cheatsheet', type: 'PDF', module: 'React Fundamentals', icon: <FileText size={14} /> },
  { name: 'Intro to REST APIs — Video Lecture', type: 'Video', module: 'Node.js Essentials', icon: <Video size={14} /> },
  { name: 'SQL JOINs Explained — Blog', type: 'Link', module: 'SQL & Database Design', icon: <LinkIcon size={14} /> },
  { name: 'Flexbox & Grid Reference', type: 'PDF', module: 'CSS & Responsive UI', icon: <FileText size={14} /> },
  { name: 'JWT Auth Flow Diagram', type: 'PDF', module: 'Authentication & JWT', icon: <FileText size={14} /> },
]

const practiceProjects = [
  { title: 'Personal Portfolio Website', desc: 'Build a responsive portfolio site with HTML, CSS, and vanilla JavaScript to showcase your projects.', stack: ['HTML', 'CSS', 'JavaScript'], difficulty: 'Beginner' },
  { title: 'Task Management REST API', desc: 'Create a full CRUD REST API using Node.js, Express, and MongoDB with JWT authentication.', stack: ['Node.js', 'Express', 'MongoDB', 'JWT'], difficulty: 'Intermediate' },
  { title: 'React E-Commerce Frontend', desc: 'Build a fully functional e-commerce UI with cart, product filters, and checkout flow using React.', stack: ['React', 'Context API', 'CSS Modules'], difficulty: 'Advanced' },
]

const difficultyStyles = {
  Beginner: 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200',
  Intermediate: 'bg-amber-50 text-amber-600 ring-1 ring-amber-200',
  Advanced: 'bg-red-50 text-red-600 ring-1 ring-red-200',
}

const courseBtnStyles = {
  completed: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100',
  'not-started': 'bg-slate-100 text-slate-500 hover:bg-slate-200',
  'in-progress': 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:from-indigo-600 hover:to-blue-600 shadow-sm shadow-indigo-200',
}

const allTabs = ['All Courses', 'In Progress', 'Completed', 'Study Materials', 'Practice Projects']

export default function Learning() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('All Courses')
  const [search, setSearch] = useState('')
  const [domainFilter, setDomainFilter] = useState('All')
  const [diffFilter, setDiffFilter] = useState('All')

  const filtered = courses.filter((c) => {
    const tabMatch =
      activeTab === 'All Courses' ||
      activeTab === 'Study Materials' ||
      activeTab === 'Practice Projects' ||
      (activeTab === 'In Progress' && c.status === 'in-progress') ||
      (activeTab === 'Completed' && c.status === 'completed')
    const searchMatch = c.title.toLowerCase().includes(search.toLowerCase())
    const domainMatch = domainFilter === 'All' || c.domain === domainFilter
    const diffMatch = diffFilter === 'All' || c.difficulty === diffFilter
    return tabMatch && searchMatch && domainMatch && diffMatch
  })

  const renderMaterialsTable = () => (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {['Material Name', 'Type', 'Module', 'Action'].map((h) => (
              <th
                key={h}
                className="whitespace-nowrap border-b border-slate-200 pb-2.5 pr-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {materials.map((m, i) => (
            <tr key={i} className="transition-colors duration-150 hover:bg-indigo-50/40">
              <td className="whitespace-nowrap border-b border-slate-100 py-3 pr-3 font-medium text-slate-800 last:border-b-0">
                <span className="mr-2 inline-flex text-indigo-500">{m.icon}</span> {m.name}
              </td>
              <td className="border-b border-slate-100 py-3 pr-3 last:border-b-0">
                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500 ring-1 ring-slate-200">
                  {m.type}
                </span>
              </td>
              <td className="border-b border-slate-100 py-3 pr-3 text-xs text-slate-500 last:border-b-0">{m.module}</td>
              <td className="border-b border-slate-100 py-3 pr-3 last:border-b-0">
                <button className="flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-indigo-600 transition-all duration-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 active:scale-95">
                  {m.type === 'Link' ? (
                    <>
                      <ExternalLink size={11} /> View
                    </>
                  ) : (
                    <>
                      <Download size={11} /> Download
                    </>
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <Layout
      role="student"
      currentPath="/student/learning"
      onNavigate={(path) => navigate(path)}
      title="Learning Hub"
      subtitle="Access your study materials, sessions, and practice projects"
    >
      <div className="w-full space-y-5">
       
        <div className="flex w-fit max-w-full gap-1 overflow-x-auto rounded-xl border border-slate-200 bg-white p-1">
          {allTabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                activeTab === t
                  ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-sm'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {(activeTab === 'All Courses' || activeTab === 'In Progress' || activeTab === 'Completed') && (
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex min-w-[180px] max-w-[320px] flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-400 transition-all duration-200 focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100">
              <Search size={14} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses…"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
            <select
              value={domainFilter}
              onChange={(e) => setDomainFilter(e.target.value)}
              className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition-all duration-200 hover:border-slate-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            >
              <option value="All">All Domains</option>
              {['Frontend', 'Backend', 'Database', 'Security', 'Cloud'].map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <select
              value={diffFilter}
              onChange={(e) => setDiffFilter(e.target.value)}
              className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition-all duration-200 hover:border-slate-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            >
              <option value="All">All Difficulties</option>
              {['Beginner', 'Intermediate', 'Advanced'].map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>
        )}

        
        {(activeTab === 'All Courses' || activeTab === 'In Progress' || activeTab === 'Completed') && (
          <>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-[640px]:grid-cols-1 gap-4">
              {filtered.map((c, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100"
                >
                  <div className={`flex h-24 items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-110 ${c.bg}`}>
                    {c.emoji}
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <div className="flex-1 text-sm font-bold leading-snug text-slate-800">{c.title}</div>
                      <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${difficultyStyles[c.difficulty]}`}>
                        {c.difficulty}
                      </span>
                    </div>
                    <div className="mb-3 flex gap-3 text-[11px] text-slate-400">
                      <span>{c.duration}</span>
                      <span>{c.lessons} lessons</span>
                    </div>
                    <div className="mb-1.5 flex justify-between text-[11px] text-slate-400">
                      <span>Progress</span>
                      <span className="font-bold text-indigo-600">{c.progress}%</span>
                    </div>
                    <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-1.5 rounded-full transition-all duration-700 ${
                          c.status === 'completed'
                            ? 'bg-gradient-to-r from-emerald-400 to-emerald-500'
                            : 'bg-gradient-to-r from-indigo-500 to-blue-500'
                        }`}
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                    <button
                      className={`flex w-full items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-bold transition-all duration-200 active:scale-95 ${courseBtnStyles[c.status]}`}
                    >
                      {c.status === 'completed' ? '✓ Review' : c.status === 'not-started' ? 'Start Course' : (
                        <>
                          <Play size={12} /> Continue
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full py-12 text-center text-sm font-medium text-slate-400">
                  No courses found
                </div>
              )}
            </div>

            {activeTab === 'All Courses' && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 text-[15px] font-bold text-slate-800">Study Materials</div>
                {renderMaterialsTable()}
              </div>
            )}
          </>
        )}

   
        {activeTab === 'Study Materials' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 text-[15px] font-bold text-slate-800">All Study Materials</div>
            {renderMaterialsTable()}
          </div>
        )}

        {activeTab === 'Practice Projects' && (
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-[640px]:grid-cols-1 gap-4">
            {practiceProjects.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-2.5 flex items-center justify-between gap-2">
                  <div className="text-sm font-bold text-slate-800">{p.title}</div>
                  <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${difficultyStyles[p.difficulty]}`}>
                    {p.difficulty}
                  </span>
                </div>
                <div className="mb-3.5 text-xs leading-relaxed text-slate-500">{p.desc}</div>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-md bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-600 ring-1 ring-indigo-200">
                      {t}
                    </span>
                  ))}
                </div>
                <button className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
                  Start Project
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}