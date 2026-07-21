import React, { useState } from "react"
import { Clock, HelpCircle, Play, Eye, RotateCcw, Trophy, Target, Calendar } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Layout from "../../components/dashboard/layout"

const assessments = [
  { title: "JavaScript Fundamentals Quiz", duration: 30, questions: 20, difficulty: "Beginner", status: "Completed", score: 85, outOf: 100, topic: "Core JS concepts, variables, functions" },
  { title: "React Hooks Deep Dive", duration: 40, questions: 25, difficulty: "Intermediate", status: "Completed", score: 72, outOf: 100, topic: "useState, useEffect, useCallback, useMemo" },
  { title: "CSS Layouts & Flexbox", duration: 25, questions: 15, difficulty: "Beginner", status: "Completed", score: 91, outOf: 100, topic: "Flexbox, Grid, responsive design" },
  { title: "Node.js & Express Basics", duration: 35, questions: 22, difficulty: "Intermediate", status: "In Progress", score: null, outOf: 100, topic: "HTTP, middleware, routing, error handling" },
  { title: "MongoDB & Mongoose", duration: 30, questions: 20, difficulty: "Intermediate", status: "Upcoming", score: null, outOf: 100, topic: "Schema design, CRUD, aggregation" },
  { title: "REST API Design Principles", duration: 45, questions: 28, difficulty: "Advanced", status: "Upcoming", score: null, outOf: 100, topic: "HTTP methods, status codes, versioning, security" },
  { title: "Git & Version Control", duration: 20, questions: 18, difficulty: "Beginner", status: "Completed", score: 96, outOf: 100, topic: "Branching, merging, rebase, cherry-pick" },
  { title: "System Design Basics", duration: 60, questions: 15, difficulty: "Advanced", status: "Upcoming", score: null, outOf: 100, topic: "Scalability, databases, caching, microservices" },
]

const difficultyStyles = {
  Beginner: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200",
  Intermediate: "bg-amber-50 text-amber-600 ring-1 ring-amber-200",
  Advanced: "bg-red-50 text-red-600 ring-1 ring-red-200",
}

const statusStyles = {
  Completed: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  "In Progress": "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  Upcoming: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
}

const actionStyles = {
  Completed: "bg-slate-100 text-slate-600 hover:bg-slate-200",
  "In Progress": "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-md shadow-blue-200",
  Upcoming: "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 shadow-md shadow-fuchsia-200",
}

const scoreColor = (score) => {
  if (score >= 90) return "text-emerald-500"
  if (score >= 75) return "text-blue-500"
  return "text-amber-500"
}

const scoreBarColor = (score) => {
  if (score >= 90) return "bg-gradient-to-r from-emerald-400 to-emerald-500"
  if (score >= 75) return "bg-gradient-to-r from-blue-400 to-blue-500"
  return "bg-gradient-to-r from-amber-400 to-amber-500"
}

export default function Assessments() {
  const navigate = useNavigate()
  const [hoveredCard, setHoveredCard] = useState(null)

  const totalCompleted = assessments.filter((a) => a.status === "Completed").length
  const upcoming = assessments.filter((a) => a.status === "Upcoming").length
  const avgScore = Math.round(
    assessments.filter((a) => a.score !== null).reduce((acc, a) => acc + (a.score || 0), 0) / totalCompleted
  )

  const stats = [
    { label: "Total Assessments", value: assessments.length, icon: Target, color: "text-slate-700", ring: "ring-slate-200", bg: "bg-slate-50" },
    { label: "Completed", value: totalCompleted, icon: Trophy, color: "text-emerald-600", ring: "ring-emerald-200", bg: "bg-emerald-50" },
    { label: "Upcoming", value: upcoming, icon: Calendar, color: "text-amber-600", ring: "ring-amber-200", bg: "bg-amber-50" },
    { label: "Average Score", value: `${avgScore}%`, icon: HelpCircle, color: "text-indigo-600", ring: "ring-indigo-200", bg: "bg-indigo-50" },
  ]

  return (
    <Layout
      role="student"
      currentPath="/student/assessment"
      onNavigate={navigate}
      title="Assessments & Quizzes"
      subtitle="Test your knowledge and track your scores"
    >
      <div className="w-full space-y-6">
     
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${s.ring} hover:ring-2`}
              >
                <div className={`mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl ${s.bg} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`h-4.5 w-4.5 ${s.color}`} strokeWidth={2.2} />
                </div>
                <div className={`text-3xl font-extrabold tabular-nums ${s.color}`}>{s.value}</div>
                <div className="mt-1 text-xs font-medium text-slate-500">{s.label}</div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {assessments.map((a, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 ${
                hoveredCard === i ? "-translate-y-1.5 shadow-xl border-slate-300" : "shadow-sm"
              }`}
            >
              
              <div
                className={`pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full blur-3xl transition-opacity duration-500 ${
                  hoveredCard === i ? "opacity-30" : "opacity-0"
                } ${
                  a.difficulty === "Advanced"
                    ? "bg-red-400"
                    : a.difficulty === "Intermediate"
                    ? "bg-amber-400"
                    : "bg-emerald-400"
                }`}
              />

              <div className="relative flex items-start justify-between gap-3 mb-3">
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-bold text-slate-800 leading-snug">{a.title}</h3>
                  <p className="mt-0.5 text-xs text-slate-500">{a.topic}</p>
                </div>
                {a.score !== null && (
                  <div className="flex-shrink-0 text-right">
                    <div className={`text-2xl font-extrabold ${scoreColor(a.score)}`}>{a.score}</div>
                    <div className="text-[10px] font-semibold text-slate-400">/ {a.outOf}</div>
                  </div>
                )}
              </div>

              {a.score !== null && (
                <div className="relative mb-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ease-out ${scoreBarColor(a.score)}`}
                    style={{ width: hoveredCard !== null ? `${a.score}%` : `${a.score}%` }}
                  />
                </div>
              )}

              <div className="relative mb-4 flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <Clock size={13} className="text-slate-400" /> {a.duration} mins
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <HelpCircle size={13} className="text-slate-400" /> {a.questions} questions
                </span>
                <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${difficultyStyles[a.difficulty]}`}>
                  {a.difficulty}
                </span>
              </div>

              <div className="relative flex flex-wrap items-center justify-between gap-3">
                <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${statusStyles[a.status]}`}>
                  {a.status}
                </span>
                <button
                  className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition-all duration-200 active:scale-95 ${actionStyles[a.status]}`}
                >
                  {a.status === "Completed" ? (
                    <>
                      <Eye size={13} /> Review
                    </>
                  ) : a.status === "In Progress" ? (
                    <>
                      <RotateCcw size={13} /> Resume
                    </>
                  ) : (
                    <>
                      <Play size={13} /> Start Now
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}