import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TrendingUp, CheckSquare, Clock, Award, ArrowRight } from 'lucide-react'
import Layout from '../../components/dashboard/layout'
import StatCard from '../../components/dashboard/statcard'
import Chart from '../../components/dashboard/chart'
import Table from '../../components/dashboard/table'

const weeklyData = [
  { day: 'Mon', hours: 2 }, { day: 'Tue', hours: 4 }, { day: 'Wed', hours: 3 },
  { day: 'Thu', hours: 6 }, { day: 'Fri', hours: 5 }, { day: 'Sat', hours: 7 }, { day: 'Sun', hours: 4 },
]

const assignmentData = [
  { week: 'W1', completed: 8 }, { week: 'W2', completed: 10 }, { week: 'W3', completed: 9 },
  { week: 'W4', completed: 12 }, { week: 'W5', completed: 11 }, { week: 'W6', completed: 14 },
]

const weeklyChartData = weeklyData.map((d) => ({ name: d.day, value: d.hours }))
const assignmentChartData = assignmentData.map((d) => ({ name: d.week, value: d.completed }))

const activities = [
  { activity: 'Submitted React Hooks Assignment', type: 'Assignment', date: '12 Jul 2025', status: 'Graded' },
  { activity: 'Completed JavaScript Fundamentals Quiz', type: 'Assessment', date: '11 Jul 2025', status: 'Completed' },
  { activity: 'Attended Mentor Session with Priya Singh', type: 'Session', date: '10 Jul 2025', status: 'Attended' },
  { activity: 'Uploaded Project README to GitHub', type: 'Task', date: '09 Jul 2025', status: 'Done' },
  { activity: 'Started Node.js Essentials Module', type: 'Learning', date: '08 Jul 2025', status: 'In Progress' },
]

const deadlines = [
  { task: 'Node.js REST API Assignment', due: '15 Jul 2025', priority: 'high' },
  { task: 'Weekly Progress Report', due: '18 Jul 2025', priority: 'medium' },
  { task: 'Portfolio Project Submission', due: '25 Jul 2025', priority: 'low' },
]

const statusStyles = {
  Graded: 'bg-emerald-50 text-emerald-600',
  Completed: 'bg-emerald-50 text-emerald-600',
  Attended: 'bg-indigo-50 text-indigo-600',
  Done: 'bg-emerald-50 text-emerald-600',
  'In Progress': 'bg-amber-50 text-amber-600',
}

const priorityDotStyles = { high: 'bg-red-500', medium: 'bg-amber-500', low: 'bg-emerald-500' }
const priorityBadgeStyles = {
  high: 'bg-red-50 text-red-600',
  medium: 'bg-amber-50 text-amber-600',
  low: 'bg-emerald-50 text-emerald-600',
}

const activityColumns = [
  { key: 'activity', label: 'Activity' },
  { key: 'type', label: 'Type', render: (v) => <span className="text-slate-400">{v}</span> },
  { key: 'date', label: 'Date', render: (v) => <span className="text-slate-400">{v}</span> },
  {
    key: 'status',
    label: 'Status',
    render: (v) => (
      <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold ${statusStyles[v] || 'bg-slate-100 text-slate-500'}`}>
        {v}
      </span>
    ),
  },
]

const stats = [
  { title: 'Internship Progress', value: '68%', change: 'In Progress', badgeColor: '#1454f5', changeLabel: '', color: '#1454f5', icon: <TrendingUp size={20} /> },
  { title: 'Assignments Done', value: '12/15', change: '+3 this week', positive: true, changeLabel: '', color: '#10b981', icon: <CheckSquare size={20} /> },
  { title: 'Learning Hours', value: '48h', change: '+8h this week', positive: true, badgeColor: '#7c3aed', changeLabel: '', color: '#7c3aed', icon: <Clock size={20} /> },
  { title: 'Certificates Earned', value: '3', change: '1 pending', badgeColor: '#f59e0b', changeLabel: '', color: '#f59e0b', icon: <Award size={20} /> },
]

const quickLinks = [
  { emoji: '📚', label: 'Continue Learning', route: '/student/learning' },
  { emoji: '📝', label: 'View Assignments', route: '/student/assignment' },
  { emoji: '🏆', label: 'My Certificates', route: '/student/certificate' },
]

export default function StudentDashboard() {
  const navigate = useNavigate()

  return (
    <Layout
      role="student"
      currentPath="/student/studentdashboard"
      onNavigate={navigate}
      title="Student Dashboard"
      subtitle="Welcome back, Rahul Sharma 👋"
    >
      <div className="w-full">
        {/* Stats Row — reusable StatCard (styled by its own component/CSS) */}
        <div className="mb-6 grid grid-cols-4 gap-4 max-[1024px]:grid-cols-2">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4 max-[1024px]:grid-cols-1">
          <Chart type="area" data={weeklyChartData} title="Weekly Learning Activity" subtitle="Hours studied per day this week" height={180} />
          <Chart type="bar" data={assignmentChartData} title="Assignment Completion" subtitle="Tasks completed per week" height={180} />
        </div>

        <div className="mb-6 grid grid-cols-2 items-start gap-4 max-[1024px]:grid-cols-1">
          <Table columns={activityColumns} data={activities} title="Recent Activity" />

          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="mb-4 text-[15px] font-semibold text-slate-800">Upcoming Deadlines</div>
            <div className="flex flex-col gap-3">
              {deadlines.map((d, i) => (
                <div
                  key={i}
                  className="flex flex-wrap items-center justify-between gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 transition-colors duration-150 hover:bg-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${priorityDotStyles[d.priority]}`} />
                    <div>
                      <div className="text-[13px] font-semibold text-slate-800">{d.task}</div>
                      <div className="mt-0.5 text-[11px] text-slate-400">Due: {d.due}</div>
                    </div>
                  </div>
                  <span className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-[10px] font-bold capitalize ${priorityBadgeStyles[d.priority]}`}>
                    {d.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 max-[640px]:grid-cols-1">
          {quickLinks.map((ql, i) => (
            <div
              key={i}
              onClick={() => navigate(ql.route)}
              className="group flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-5 text-slate-400 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 hover:text-white hover:shadow-xl hover:shadow-indigo-200"
            >
              <div className="flex min-w-0 items-center gap-3.5">
                <span className="flex-shrink-0 text-2xl transition-transform duration-300 group-hover:scale-110">{ql.emoji}</span>
                <span className="text-sm font-semibold text-slate-800 transition-colors duration-300 group-hover:text-white">
                  {ql.label}
                </span>
              </div>
              <ArrowRight size={18} className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}