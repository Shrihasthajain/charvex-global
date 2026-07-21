import React from 'react'
import { FileText, MapPin, ExternalLink, Calendar, Star, ChevronRight, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/dashboard/layout'

const jobs = [
  { company: 'Google', initials: 'G', role: 'Junior Frontend Engineer', location: 'Bengaluru, IN', salary: '₹8L – ₹12L', color: 'from-blue-500 to-blue-600', type: 'Full-time' },
  { company: 'Microsoft', initials: 'M', role: 'Software Development Engineer I', location: 'Hyderabad, IN', salary: '₹10L – ₹16L', color: 'from-cyan-500 to-cyan-600', type: 'Full-time' },
  { company: 'Amazon', initials: 'A', role: 'Frontend Developer — Alexa Team', location: 'Pune, IN', salary: '₹9L – ₹14L', color: 'from-orange-400 to-orange-500', type: 'Full-time' },
]

const skills = [
  { name: 'React.js', level: 80, bar: 'from-indigo-500 to-blue-500', text: 'text-indigo-600' },
  { name: 'Python', level: 65, bar: 'from-violet-500 to-purple-500', text: 'text-violet-600' },
  { name: 'SQL', level: 70, bar: 'from-emerald-500 to-emerald-600', text: 'text-emerald-600' },
  { name: 'Git', level: 90, bar: 'from-slate-600 to-slate-800', text: 'text-slate-700' },
  { name: 'Communication', level: 75, bar: 'from-amber-400 to-amber-500', text: 'text-amber-600' },
]

const skillRecommendations = [
  { skill: 'TypeScript', reason: 'Pairs well with your React skills; widely required in React jobs' },
  { skill: 'Docker & Kubernetes', reason: 'High demand for DevOps-capable frontend engineers' },
  { skill: 'System Design', reason: 'Essential for senior interviews; start with basics now' },
]

const interviewCards = [
  { emoji: '📅', title: 'Mock Interview Scheduler', desc: 'Book a 1-on-1 mock interview with a senior engineer at a convenient time.', btn: 'Schedule Now' },
  { emoji: '💡', title: 'Interview Tips Library', desc: 'Curated tips on behavioral, technical, and HR rounds from top tech companies.', btn: 'Browse Tips' },
  { emoji: '❓', title: 'Common Questions', desc: '200+ most frequently asked interview questions with model answers.', btn: 'Practice Now' },
]

const mockInterviews = [
  { session: 'Frontend Technical Round', date: '08 Jul 2025', interviewer: 'Arun Mehta', score: '82/100' },
  { session: 'HR & Behavioral Round', date: '02 Jul 2025', interviewer: 'Priya Singh', score: '90/100' },
]

const placements = [
  { company: 'TechCorp India', role: 'React Developer Intern → FTE', deadline: '20 Jul 2025' },
  { company: 'StartupX', role: 'Full Stack Engineer', deadline: '25 Jul 2025' },
  { company: 'Infosys Digital', role: 'Associate Engineer — Frontend', deadline: '01 Aug 2025' },
]

const cardBase =
  'bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-100 hover:border-indigo-300 hover:-translate-y-1.5 transition-all duration-300'

const tableActionBase =
  'flex items-center gap-1.5 rounded-lg text-[11px] font-bold cursor-pointer whitespace-nowrap transition-all duration-200 active:scale-95'
const tableActionDefault = `${tableActionBase} py-1.5 px-3 bg-slate-100 border border-slate-200 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:shadow-md hover:shadow-indigo-200`
const tableActionPrimary = `${tableActionBase} py-2 px-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-sm hover:from-indigo-600 hover:to-blue-600 hover:shadow-lg hover:shadow-indigo-200`

export default function Career() {
  const navigate = useNavigate()

  return (
    <Layout
      role="student"
      currentPath="/student/career"
      onNavigate={navigate}
      title="Career Hub"
      subtitle="Build your career with resume tools, mock interviews, and job opportunities"
    >
      <div className="w-full space-y-6">
       
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-600 py-8 px-8 max-[700px]:p-6 flex items-center justify-between gap-5 flex-wrap">
          <div className="pointer-events-none absolute -top-10 -right-10 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />
          <div className="pointer-events-none absolute -bottom-16 left-10 h-32 w-32 rounded-full bg-indigo-300/10 blur-3xl" />
          <div className="relative">
            <div className="text-[11px] text-blue-300 font-bold uppercase tracking-wider mb-2">Resume Builder</div>
            <div className="text-[22px] max-[480px]:text-[19px] font-extrabold text-white mb-1.5">Build Your Professional Resume</div>
            <div className="text-sm text-blue-100">Create an ATS-friendly resume in minutes with our AI-powered builder</div>
          </div>
          <button className="group/btn relative flex items-center gap-2 py-3 px-6 max-[700px]:w-full max-[700px]:justify-center bg-white text-slate-900 rounded-xl text-sm font-bold cursor-pointer shadow-lg transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95">
            <FileText size={16} className="text-indigo-600" /> Build Resume
            <ArrowRight size={14} className="text-indigo-600 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </div>

        <div>
          <div className="text-base font-bold text-slate-800 mb-3.5">Job Recommendations</div>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-[700px]:grid-cols-1 gap-4">
            {jobs.map((j, i) => (
              <div key={i} className={`group ${cardBase} p-5`}>
                <div className="flex items-center gap-3 mb-3.5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${j.color} shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <span className="text-white text-base font-black">{j.initials}</span>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-slate-800">{j.role}</div>
                    <div className="text-xs text-slate-500">{j.company}</div>
                  </div>
                </div>
                <div className="flex gap-2.5 flex-wrap mb-3.5">
                  <span className="flex items-center gap-1 text-[11px] text-slate-500">
                    <MapPin size={11} /> {j.location}
                  </span>
                  <span className="text-[11px] bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200 rounded-md px-2 py-0.5 font-semibold">
                    {j.type}
                  </span>
                </div>
                <div className="text-[13px] font-bold text-slate-800 mb-3.5">
                  {j.salary} <span className="text-[11px] text-slate-400 font-normal">per year</span>
                </div>
                <button className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg text-xs font-bold cursor-pointer shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md hover:shadow-indigo-200 active:scale-95">
                  Apply Now <ExternalLink size={11} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 max-[480px]:p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <div className="text-[15px] font-bold text-slate-800 mb-4">Skills Assessment</div>
            <div className="flex flex-col gap-4">
              {skills.map((s) => (
                <div key={s.name} className="group/skill">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[13px] font-semibold text-slate-700">{s.name}</span>
                    <span className={`text-[13px] font-bold ${s.text}`}>{s.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${s.bar} transition-all duration-500 ease-out group-hover/skill:brightness-110`}
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 max-[480px]:p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <div className="text-[15px] font-bold text-slate-800 mb-4">Skill Recommendations</div>
            <div className="flex flex-col gap-3">
              {skillRecommendations.map((r, i) => (
                <div
                  key={i}
                  className="group/rec p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex gap-3 items-start cursor-pointer transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <Star size={16} className="text-amber-400 shrink-0 mt-0.5 transition-transform duration-300 group-hover/rec:scale-125 group-hover/rec:rotate-12 fill-amber-400" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-bold text-indigo-600 mb-0.5">{r.skill}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{r.reason}</div>
                  </div>
                  <ChevronRight size={14} className="text-slate-400 shrink-0 mt-0.5 transition-transform duration-200 group-hover/rec:translate-x-1 group-hover/rec:text-indigo-600" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="text-base font-bold text-slate-800 mb-3.5">Interview Preparation</div>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-[700px]:grid-cols-1 gap-4">
            {interviewCards.map((c, i) => (
              <div key={i} className={`group ${cardBase} p-5 flex flex-col`}>
                <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 w-fit">
                  {c.emoji}
                </div>
                <div className="text-sm font-bold text-slate-800 mb-2">{c.title}</div>
                <div className="text-xs text-slate-500 leading-relaxed flex-1 mb-4">{c.desc}</div>
                <button className="py-2.5 bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200 rounded-lg text-xs font-bold cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 hover:text-white hover:ring-0 hover:shadow-md active:scale-95">
                  {c.btn}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg">
          <div className="py-4 px-5 border-b border-slate-200 text-[15px] font-bold text-slate-800">
            Mock Interview History
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  {['Session', 'Date', 'Interviewer', 'Score', 'Feedback'].map((h) => (
                    <th key={h} className="text-left text-[10px] text-slate-400 font-bold py-2.5 px-4 uppercase tracking-wider whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mockInterviews.map((m, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-b-0 transition-colors duration-150 hover:bg-indigo-50/50">
                    <td className="py-3.5 px-4 text-[13px] font-bold text-slate-800">{m.session}</td>
                    <td className="py-3.5 px-4 text-xs text-slate-500">{m.date}</td>
                    <td className="py-3.5 px-4 text-xs text-slate-500">{m.interviewer}</td>
                    <td className="py-3.5 px-4 text-[13px] font-bold text-emerald-600">{m.score}</td>
                    <td className="py-3.5 px-4">
                      <button className={tableActionDefault}>View Feedback</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg">
          <div className="py-4 px-5 border-b border-slate-200 text-[15px] font-bold text-slate-800">
            Placement Opportunities
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  {['Company', 'Role', 'Application Deadline', 'Action'].map((h) => (
                    <th key={h} className="text-left text-[10px] text-slate-400 font-bold py-2.5 px-4 uppercase tracking-wider whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {placements.map((p, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-b-0 transition-colors duration-150 hover:bg-indigo-50/50">
                    <td className="py-3.5 px-4 text-[13px] font-bold text-slate-800">{p.company}</td>
                    <td className="py-3.5 px-4 text-[13px] text-slate-500">{p.role}</td>
                    <td className="py-3.5 px-4">
                      <span className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold whitespace-nowrap">
                        <Calendar size={12} /> {p.deadline}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <button className={tableActionPrimary}>
                        Apply <ExternalLink size={11} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}