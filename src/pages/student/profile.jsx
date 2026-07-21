import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/dashboard/layout'
import { Upload, X, Plus, GitBranch, Globe, ExternalLink } from 'lucide-react'

const projects = [
  { title: 'Charvex Intern Portal', desc: 'A full-stack internship management platform built with React and Node.js.', stack: ['React', 'Node.js', 'MongoDB'], gh: 'https://github.com' },
  { title: 'E-Commerce Dashboard', desc: 'Admin dashboard with analytics, order management and inventory tracking.', stack: ['React', 'Recharts', 'TailwindCSS'], gh: 'https://github.com' },
  { title: 'TaskFlow CLI', desc: 'Command-line task manager with tagging, priorities, and JSON persistence.', stack: ['Python', 'Click', 'JSON'], gh: 'https://github.com' },
]

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-[13px] text-slate-700 outline-none transition-all duration-200 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100'

const labelClass =
  'mb-1.5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400'

export default function Profile() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Personal Info')
  const tabs = ['Personal Info', 'Academic Info', 'Resume & Skills', 'Portfolio']

  const [personal, setPersonal] = useState({
    fullName: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    dob: '1999-04-15',
    gender: 'Male',
    address: 'B-24, Sunrise Apartments, Koramangala, Bengaluru - 560034',
  })

  const [academic, setAcademic] = useState({
    college: 'RV College of Engineering',
    branch: 'Computer Science',
    year: '3rd Year',
    rollNumber: '1RV20CS092',
    cgpa: '8.7',
    linkedin: 'https://linkedin.com/in/rahulsharma',
  })

  const [skills, setSkills] = useState(['React', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'Git', 'Node.js', 'REST APIs'])
  const [newSkill, setNewSkill] = useState('')
  const [resumeFile, setResumeFile] = useState(null)
  const [portfolio, setPortfolio] = useState({ github: 'https://github.com/rahulsharma', website: 'https://rahulsharma.dev' })
  const fileRef = useRef(null)

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills((s) => [...s, newSkill.trim()])
      setNewSkill('')
    }
  }

  return (
    <Layout
      role="student"
      currentPath="/student/profile"
      onNavigate={(path) => navigate(path)}
      title="My Profile"
      subtitle="Manage your personal and academic information"
    >
      <div className="grid grid-cols-[35%_1fr] gap-6 max-[1024px]:grid-cols-1">
     
        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg shadow-indigo-200">
            <span className="text-3xl font-bold text-white">RS</span>
          </div>
          <div className="mb-1 text-xl font-bold text-slate-800">Rahul Sharma</div>
          <div className="mb-3 text-[13px] text-slate-400">rahul.sharma@example.com</div>
          <span className="rounded-full bg-indigo-50 px-3.5 py-1 text-[11px] font-bold text-indigo-600 ring-1 ring-indigo-200">
            Student Intern
          </span>
          <div className="mb-5 mt-3 text-xs text-slate-400">Joined 15 Jan 2025</div>

          <div className="mb-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
            {[
              { label: 'Assignments', val: '12' },
              { label: 'Hours', val: '48' },
              { label: 'Certs', val: '3' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg font-bold text-slate-800">{s.val}</div>
                <div className="mt-0.5 text-[10px] text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>

          <button className="w-full rounded-xl border border-slate-200 bg-white py-2.5 text-[13px] font-semibold text-slate-700 transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 active:scale-95">
            Edit Photo
          </button>
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex overflow-x-auto border-b border-slate-200 px-6">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`whitespace-nowrap border-b-2 px-4 py-4 text-[13px] font-semibold transition-all duration-200 ${
                  activeTab === t
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="p-6 max-[640px]:p-4">
          
            {activeTab === 'Personal Info' && (
              <div>
                <div className="mb-4 grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
                  {[
                    { label: 'Full Name', key: 'fullName', type: 'text' },
                    { label: 'Email Address', key: 'email', type: 'email' },
                    { label: 'Phone Number', key: 'phone', type: 'tel' },
                    { label: 'Date of Birth', key: 'dob', type: 'date' },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className={labelClass}>{f.label}</label>
                      <input
                        type={f.type}
                        value={personal[f.key]}
                        onChange={(e) => setPersonal((p) => ({ ...p, [f.key]: e.target.value }))}
                        className={inputClass}
                      />
                    </div>
                  ))}
                  <div>
                    <label className={labelClass}>Gender</label>
                    <select
                      value={personal.gender}
                      onChange={(e) => setPersonal((p) => ({ ...p, gender: e.target.value }))}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      <option>Prefer not to say</option>
                    </select>
                  </div>
                </div>
                <div className="mb-5">
                  <label className={labelClass}>Address</label>
                  <textarea
                    value={personal.address}
                    onChange={(e) => setPersonal((p) => ({ ...p, address: e.target.value }))}
                    rows={3}
                    className={`${inputClass} resize-y`}
                  />
                </div>
                <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
                  Save Changes
                </button>
              </div>
            )}

            {activeTab === 'Academic Info' && (
              <div>
                <div className="mb-5 grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
                  {[
                    { label: 'College / University', key: 'college', type: 'text' },
                    { label: 'Roll Number', key: 'rollNumber', type: 'text' },
                    { label: 'CGPA / Percentage', key: 'cgpa', type: 'text' },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className={labelClass}>{f.label}</label>
                      <input
                        type={f.type}
                        value={academic[f.key]}
                        onChange={(e) => setAcademic((p) => ({ ...p, [f.key]: e.target.value }))}
                        className={inputClass}
                      />
                    </div>
                  ))}
                  <div>
                    <label className={labelClass}>Branch / Department</label>
                    <select
                      value={academic.branch}
                      onChange={(e) => setAcademic((p) => ({ ...p, branch: e.target.value }))}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option>Computer Science</option>
                      <option>Information Technology</option>
                      <option>Electronics & Communication</option>
                      <option>Mechanical Engineering</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Year of Study</label>
                    <select
                      value={academic.year}
                      onChange={(e) => setAcademic((p) => ({ ...p, year: e.target.value }))}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                    </select>
                  </div>
                  <div className="col-span-2 max-[640px]:col-span-1">
                    <label className={labelClass}>LinkedIn Profile URL</label>
                    <input
                      type="url"
                      value={academic.linkedin}
                      onChange={(e) => setAcademic((p) => ({ ...p, linkedin: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                </div>
                <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
                  Save Academic Info
                </button>
              </div>
            )}

            {activeTab === 'Resume & Skills' && (
              <div>
                <div className="mb-5">
                  <div className="mb-3 text-sm font-semibold text-slate-800">Resume Upload</div>
                  <div
                    onClick={() => fileRef.current?.click()}
                    className="cursor-pointer rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center transition-all duration-200 hover:border-indigo-400 hover:bg-indigo-50/50"
                  >
                    <Upload size={32} className="mx-auto mb-3 block text-slate-400" />
                    <div className="mb-1 text-sm font-semibold text-slate-700">
                      {resumeFile ? resumeFile : 'Drag & drop your resume or Browse'}
                    </div>
                    <div className="text-xs text-slate-400">PDF, DOCX — Max 5MB</div>
                  </div>
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.docx"
                    style={{ display: 'none' }}
                    onChange={(e) => setResumeFile(e.target.files?.[0]?.name || null)}
                  />
                </div>

                <div>
                  <div className="mb-3 text-sm font-semibold text-slate-800">Skills</div>
                  <div className="mb-3.5 flex flex-wrap gap-2">
                    {skills.map((sk) => (
                      <span
                        key={sk}
                        className="flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 ring-1 ring-indigo-200 transition-colors duration-150 hover:bg-indigo-100"
                      >
                        {sk}
                        <X
                          size={12}
                          onClick={() => setSkills((s) => s.filter((x) => x !== sk))}
                          className="cursor-pointer transition-transform duration-150 hover:scale-125 hover:text-red-500"
                        />
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 max-[640px]:flex-col">
                    <input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                      placeholder="Add a skill…"
                      className={`${inputClass} flex-1`}
                    />
                    <button
                      onClick={addSkill}
                      className="flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 active:scale-95"
                    >
                      <Plus size={14} /> Add
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Portfolio' && (
              <div>
                <div className="mb-5 grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
                  <div>
                    <label className={labelClass}>
                      <GitBranch size={10} /> GitHub URL
                    </label>
                    <input
                      type="url"
                      value={portfolio.github}
                      onChange={(e) => setPortfolio((p) => ({ ...p, github: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      <Globe size={10} /> Portfolio Website
                    </label>
                    <input
                      type="url"
                      value={portfolio.website}
                      onChange={(e) => setPortfolio((p) => ({ ...p, website: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-3 text-sm font-semibold text-slate-800">Project Showcase</div>
                <div className="grid grid-cols-3 gap-3.5 max-lg:grid-cols-2 max-[640px]:grid-cols-1">
                  {projects.map((p) => (
                    <div
                      key={p.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg"
                    >
                      <div className="mb-1.5 text-[13px] font-bold text-slate-800">{p.title}</div>
                      <div className="mb-3 text-xs leading-relaxed text-slate-500">{p.desc}</div>
                      <div className="mb-3 flex flex-wrap gap-1.5">
                        {p.stack.map((t) => (
                          <span key={t} className="rounded-md bg-slate-200 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={p.gh}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-[11px] font-semibold text-indigo-600 no-underline transition-colors duration-150 hover:text-indigo-700"
                      >
                        <GitBranch size={12} /> View on GitHub <ExternalLink size={10} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}