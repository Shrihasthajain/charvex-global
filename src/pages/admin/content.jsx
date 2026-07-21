import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import DashboardLayout from '../../components/dashboard/layout'
import { Upload, Search, Edit2, Trash2, Play, Download, Eye } from 'lucide-react'

const materials = [
  { title: 'React.js Fundamentals Guide', domain: 'Full Stack Dev', type: 'PDF', size: '2.4 MB', uploaded: '5 Jul 2026', downloads: 87 },
  { title: 'Data Wrangling with Pandas', domain: 'Data Science', type: 'PDF', size: '3.1 MB', uploaded: '28 Jun 2026', downloads: 63 },
  { title: 'Figma Design Principles', domain: 'UI/UX Design', type: 'DOCX', size: '1.8 MB', uploaded: '20 Jun 2026', downloads: 54 },
  { title: 'AWS Cloud Practitioner Notes', domain: 'Cloud Computing', type: 'PDF', size: '4.2 MB', uploaded: '15 Jun 2026', downloads: 41 },
  { title: 'Python ML Cheatsheet', domain: 'AI/ML', type: 'PDF', size: '0.9 MB', uploaded: '10 Jun 2026', downloads: 112 },
  { title: 'Linux & Bash Scripting Handbook', domain: 'DevOps', type: 'PDF', size: '2.7 MB', uploaded: '2 Jun 2026', downloads: 38 },
]

const videos = [
  { title: 'Introduction to React Hooks', domain: 'Full Stack Dev', duration: '42 min', views: 234 },
  { title: 'Neural Networks from Scratch', domain: 'AI/ML', duration: '68 min', views: 189 },
  { title: 'Figma Advanced Prototyping', domain: 'UI/UX Design', duration: '55 min', views: 142 },
  { title: 'Docker & Kubernetes Basics', domain: 'DevOps', duration: '78 min', views: 167 },
  { title: 'SQL vs NoSQL Deep Dive', domain: 'Data Science', duration: '50 min', views: 203 },
  { title: 'Penetration Testing 101', domain: 'Cybersecurity', duration: '61 min', views: 118 },
]

const typeStyles = {
  PDF: 'bg-rose-50 text-rose-600',
  DOCX: 'bg-indigo-50 text-indigo-600',
  PPT: 'bg-amber-50 text-amber-600',
}

const tabs = ['Study Materials', 'Video Sessions', 'Assignments', 'Practice Projects']

const actionBtnClass =
  'flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors duration-150 hover:bg-slate-50'

export default function AdminContent() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Study Materials')
  const [search, setSearch] = useState('')

  const filteredMaterials = materials.filter(
    (m) =>
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.domain.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <DashboardLayout
      role="admin"
      currentPath="/admin/content"
      onNavigate={navigate}
      title="Content Management"
      subtitle="Manage learning materials and resources"
    >
      <div className="w-full">
        {/* Tabs */}
        <div className="mb-6 flex w-fit gap-1 rounded-xl border border-slate-200 bg-white p-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === t
                  ? 'bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold text-white shadow-sm'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {activeTab === 'Study Materials' && (
          <>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex max-w-[320px] flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 transition-all duration-200 focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100">
                <Search size={14} className="text-slate-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search materials..."
                  className="flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>
              <button className="ml-auto flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
                <Upload size={15} /> Upload Material
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    {['Title', 'Domain', 'Type', 'Size', 'Uploaded', 'Downloads', 'Actions'].map((h) => (
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
                  {filteredMaterials.map((m, i) => (
                    <tr
                      key={i}
                      className={`border-b border-slate-100 transition-colors duration-150 hover:bg-slate-50 ${
                        i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
                      }`}
                    >
                      <td className="px-5 py-3.5 text-sm font-medium text-slate-900">{m.title}</td>
                      <td className="px-5 py-3.5 text-[13px] text-slate-500">{m.domain}</td>
                      <td className="px-5 py-3.5">
                        <span className={`rounded-md px-2 py-0.5 text-[11px] font-bold ${typeStyles[m.type] || 'bg-slate-100 text-slate-500'}`}>
                          {m.type}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-[13px] text-slate-500">{m.size}</td>
                      <td className="px-5 py-3.5 text-[13px] text-slate-500">{m.uploaded}</td>
                      <td className="px-5 py-3.5 text-[13px] font-medium text-slate-800">{m.downloads}</td>
                      <td className="px-5 py-3.5">
                        <div className="flex gap-1.5">
                          <button className={actionBtnClass}>
                            <Download size={13} className="text-slate-400" />
                          </button>
                          <button className={actionBtnClass}>
                            <Edit2 size={13} className="text-slate-400" />
                          </button>
                          <button className={`${actionBtnClass} border-red-200 hover:bg-red-50`}>
                            <Trash2 size={13} className="text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'Video Sessions' && (
          <>
            <div className="mb-5 flex justify-end">
              <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
                <Upload size={15} /> Upload Video
              </button>
            </div>
            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-[640px]:grid-cols-1">
              {videos.map((v, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative flex h-40 items-center justify-center bg-slate-200">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-black/50 transition-transform duration-300 group-hover:scale-110">
                      <Play size={22} className="fill-white text-white" />
                    </div>
                    <span className="absolute bottom-2 right-2.5 rounded-md bg-black/70 px-1.5 py-0.5 text-[11px] font-semibold text-white">
                      {v.duration}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="mb-1 text-sm font-semibold text-slate-900">{v.title}</p>
                    <p className="text-xs text-slate-500">{v.domain}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Eye size={12} /> {v.views} views
                      </span>
                      <div className="flex gap-1.5">
                        <button className={actionBtnClass}>
                          <Edit2 size={13} className="text-slate-400" />
                        </button>
                        <button className={`${actionBtnClass} border-red-200 hover:bg-red-50`}>
                          <Trash2 size={13} className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {(activeTab === 'Assignments' || activeTab === 'Practice Projects') && (
          <div className="rounded-2xl border border-slate-200 bg-white p-16 text-center shadow-sm">
            <p className="mb-3 text-3xl">📁</p>
            <p className="mb-2 text-base font-semibold text-slate-900">{activeTab} Management</p>
            <p className="text-sm text-slate-500">Upload and manage {activeTab.toLowerCase()} for all domains.</p>
            <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
              <Upload size={15} /> Upload {activeTab === 'Assignments' ? 'Assignment' : 'Project'}
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}