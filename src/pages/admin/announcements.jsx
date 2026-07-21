import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import DashboardLayout from '../../components/dashboard/layout'
import { Plus, Edit2, Trash2, Eye, Bell } from 'lucide-react'

const published = [
  { id: 1, title: 'Mid-Term Assessment Schedule Released', category: 'Academic', target: 'All', date: '10 Jul 2026', views: 214, pinned: true },
  { id: 2, title: 'New Mentor: Rohan Shetty Joins Cybersecurity Domain', category: 'Platform Update', target: 'All', date: '5 Jul 2026', views: 178, pinned: false },
  { id: 3, title: 'Certificate Issuance — June 2026 Batch', category: 'Certificates', target: 'Students', date: '1 Jul 2026', views: 312, pinned: false },
  { id: 4, title: 'Office Hours: Weekly Mentor Q&A Starts Monday', category: 'Events', target: 'All', date: '28 Jun 2026', views: 95, pinned: false },
  { id: 5, title: 'Platform Maintenance on 30 June 11 PM IST', category: 'System', target: 'All', date: '25 Jun 2026', views: 421, pinned: false },
]

const categoryStyles = {
  Academic: 'bg-indigo-50 text-indigo-600',
  'Platform Update': 'bg-emerald-50 text-emerald-600',
  Certificates: 'bg-amber-50 text-amber-600',
  Events: 'bg-purple-50 text-purple-600',
  System: 'bg-red-50 text-red-600',
}

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition-all duration-200 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100'

const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400'

export default function AdminAnnouncements() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Academic')
  const [content, setContent] = useState('')
  const [target, setTarget] = useState('All')
  const [schedule, setSchedule] = useState(false)
  const [schedDate, setSchedDate] = useState('')
  const [list, setList] = useState(published)

  const handlePublish = () => {
    if (!title.trim()) return
    setList((prev) => [
      {
        id: Date.now(),
        title,
        category,
        target,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        views: 0,
        pinned: false,
      },
      ...prev,
    ])
    setTitle('')
    setContent('')
  }

  const handleDelete = (id) => setList((prev) => prev.filter((a) => a.id !== id))

  return (
    <DashboardLayout
      role="admin"
      currentPath="/admin/announcements"
      onNavigate={navigate}
      title="Announcements"
      subtitle="Publish and manage platform announcements"
    >
      <div className="w-full">

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="mb-5 flex items-center gap-2.5">
            <Bell size={18} className="text-indigo-600" />
            <h2 className="text-[15px] font-bold text-slate-900">New Announcement</h2>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-4 max-[768px]:grid-cols-1">
            <div>
              <label className={labelClass}>Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Announcement title..."
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`${inputClass} cursor-pointer`}
              >
                {Object.keys(categoryStyles).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Target Audience</label>
              <select
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className={`${inputClass} cursor-pointer`}
              >
                {['All', 'Students', 'Mentors', 'Admins'].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className={labelClass}>Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              placeholder="Write your announcement here..."
              className={`${inputClass} resize-y font-sans`}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-500">
                <button
                  type="button"
                  onClick={() => setSchedule((s) => !s)}
                  className={`relative h-5 w-9 flex-shrink-0 rounded-full transition-colors duration-200 ${
                    schedule ? 'bg-gradient-to-r from-indigo-500 to-blue-500' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`absolute top-[3px] h-3.5 w-3.5 rounded-full bg-white shadow transition-all duration-200 ${
                      schedule ? 'left-[18px]' : 'left-[3px]'
                    }`}
                  />
                </button>
                Schedule for later
              </label>
              {schedule && (
                <input
                  type="datetime-local"
                  value={schedDate}
                  onChange={(e) => setSchedDate(e.target.value)}
                  className={`${inputClass} w-auto px-3 py-1.5`}
                />
              )}
            </div>
            <button
              onClick={handlePublish}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95"
            >
              <Plus size={16} /> Publish Announcement
            </button>
          </div>
        </div>

        <h3 className="mb-3.5 text-[15px] font-bold text-slate-900">Published Announcements</h3>
        <div className="flex flex-col gap-3">
          {list.map((a) => {
            const catClass = categoryStyles[a.category] || 'bg-slate-100 text-slate-500'
            return (
              <div
                key={a.id}
                className="flex flex-wrap items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {a.pinned && (
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                    PINNED
                  </span>
                )}
                <span className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${catClass}`}>
                  {a.category}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">{a.title}</p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    → {a.target} · {a.date}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[13px] text-slate-400">
                  <Eye size={13} /> {a.views} views
                </div>
                <div className="flex gap-2">
                  <button className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors duration-150 hover:bg-slate-50">
                    <Edit2 size={14} className="text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleDelete(a.id)}
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-red-200 bg-white transition-colors duration-150 hover:bg-red-50"
                  >
                    <Trash2 size={14} className="text-red-500" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}