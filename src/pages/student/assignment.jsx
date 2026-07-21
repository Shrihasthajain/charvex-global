import React, { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, Upload, Search, CalendarClock, X, FileCheck2, Clock3, AlertTriangle, ListChecks } from "lucide-react"
import { toast } from "sonner"
import Layout from "../../components/dashboard/layout"

const allAssignments = [
  { id: 1, title: "HTML & CSS Responsive Layout", domain: "Frontend", dueDate: "10 Feb 2025", submitted: "09 Feb 2025", status: "Graded", grade: "A", description: "Create a fully responsive multi-section landing page using HTML5 and CSS3. Must be mobile-first.", feedback: "Excellent structure and great use of flexbox. Improve contrast for accessibility." },
  { id: 2, title: "JavaScript DOM Manipulation", domain: "Frontend", dueDate: "20 Feb 2025", submitted: "19 Feb 2025", status: "Graded", grade: "B+", description: "Build an interactive to-do list app using vanilla JavaScript and DOM APIs.", feedback: "Good logic. Consider adding local storage for persistence." },
  { id: 3, title: "React Component Library", domain: "Frontend", dueDate: "05 Mar 2025", submitted: "04 Mar 2025", status: "Graded", grade: "A+", description: "Build a reusable component library with Button, Input, Modal, and Card components.", feedback: "Outstanding work. Excellent props API design and documentation." },
  { id: 4, title: "React Hooks & State Management", domain: "Frontend", dueDate: "18 Mar 2025", submitted: "18 Mar 2025", status: "Submitted", grade: "—", description: "Refactor a class-based component to use hooks. Add Context API for global state.", feedback: "" },
  { id: 5, title: "Node.js REST API Design", domain: "Backend", dueDate: "25 Mar 2025", submitted: "—", status: "Pending", grade: "—", description: "Design and implement a RESTful API for a blog platform with authentication, CRUD on posts.", feedback: "" },
  { id: 6, title: "MongoDB Integration", domain: "Database", dueDate: "01 Apr 2025", submitted: "—", status: "Pending", grade: "—", description: "Integrate MongoDB with your Node.js REST API using Mongoose. Implement data validation.", feedback: "" },
  { id: 7, title: "JWT Authentication System", domain: "Security", dueDate: "08 Mar 2025", submitted: "—", status: "Overdue", grade: "—", description: "Implement a complete JWT-based authentication system with refresh tokens.", feedback: "" },
  { id: 8, title: "Responsive Dashboard UI", domain: "Frontend", dueDate: "20 Feb 2025", submitted: "21 Feb 2025", status: "Graded", grade: "A", description: "Build an analytics dashboard with charts, stat cards, and a data table.", feedback: "Clean layout. Charts could benefit from loading states." },
  { id: 9, title: "Git Workflow Simulation", domain: "DevOps", dueDate: "15 Feb 2025", submitted: "14 Feb 2025", status: "Graded", grade: "B", description: "Simulate a team Git workflow: feature branches, PRs, conflicts, and merging strategy.", feedback: "Good understanding of branching. Practice rebasing for cleaner history." },
  { id: 10, title: "API Documentation with Swagger", domain: "Backend", dueDate: "12 Apr 2025", submitted: "—", status: "Pending", grade: "—", description: "Document your REST API fully using Swagger / OpenAPI 3.0 specification.", feedback: "" },
]

const filterTabs = ["All", "Pending", "Submitted", "Graded", "Overdue"]
const PAGE_SIZE = 6

const statusStyles = {
  Graded: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  Submitted: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  Pending: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  Overdue: "bg-red-50 text-red-700 ring-1 ring-red-200",
}

const rowAccent = {
  Graded: "hover:bg-emerald-50/40",
  Submitted: "hover:bg-blue-50/40",
  Pending: "hover:bg-amber-50/40",
  Overdue: "hover:bg-red-50/40",
}

const actionStyles = {
  action: "bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:from-indigo-600 hover:to-blue-600 shadow-sm shadow-indigo-200",
  view: "bg-slate-100 text-slate-600 hover:bg-slate-200",
}

export default function Assignments() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("All")
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [modalAssignment, setModalAssignment] = useState(null)

  const filtered = useMemo(() => {
    return allAssignments
      .filter((a) => activeTab === "All" || a.status === activeTab)
      .filter((a) => a.title.toLowerCase().includes(query.trim().toLowerCase()))
  }, [activeTab, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleTabChange = (value) => {
    setActiveTab(value)
    setPage(1)
  }

  const handleSearch = (value) => {
    setQuery(value)
    setPage(1)
  }

  const handleSubmit = (title) => {
    toast.success(`"${title}" submitted`, {
      description: "Your mentor will review it shortly.",
    })
    setModalAssignment(null)
  }

  const stats = [
    { label: "Total", value: allAssignments.length, icon: ListChecks, color: "text-slate-700", bg: "bg-slate-50", ring: "ring-slate-200" },
    { label: "Submitted", value: allAssignments.filter((a) => a.status === "Submitted").length, icon: FileCheck2, color: "text-blue-600", bg: "bg-blue-50", ring: "ring-blue-200" },
    { label: "Pending", value: allAssignments.filter((a) => a.status === "Pending").length, icon: Clock3, color: "text-amber-600", bg: "bg-amber-50", ring: "ring-amber-200" },
    { label: "Overdue", value: allAssignments.filter((a) => a.status === "Overdue").length, icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50", ring: "ring-red-200" },
  ]

  return (
    <Layout
      role="student"
      currentPath="/student/assignment"
      onNavigate={navigate}
      title="Assignments"
      subtitle="View and submit your assignments"
    >
      <div className="w-full space-y-6">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className={`group rounded-2xl border border-slate-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-2 ${s.ring}`}
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

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex gap-1 rounded-xl border border-slate-200 bg-white p-1 w-fit overflow-x-auto">
            {filterTabs.map((t) => (
              <button
                key={t}
                onClick={() => handleTabChange(t)}
                className={`whitespace-nowrap rounded-lg px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                  activeTab === t
                    ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-sm"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search assignments…"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 outline-none transition-all duration-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            />
          </div>
        </div>

        
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-slate-400">
            <ListChecks className="h-7 w-7" />
            <p className="text-sm font-medium">No assignments match your filters.</p>
          </div>
        )}

        {filtered.length > 0 && (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    {["#", "Title", "Domain", "Due Date", "Submitted", "Status", "Grade", "Action"].map((h) => (
                      <th
                        key={h}
                        className="whitespace-nowrap px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paged.map((a) => (
                    <tr
                      key={a.id}
                      className={`border-t border-slate-100 transition-colors duration-150 ${rowAccent[a.status]}`}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-400">
                        {a.id.toString().padStart(2, "0")}
                      </td>
                      <td className="max-w-[220px] px-4 py-3 font-semibold text-slate-800">{a.title}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 ring-1 ring-slate-200">
                          {a.domain}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-slate-500">{a.dueDate}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-slate-500">{a.submitted}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${statusStyles[a.status]}`}>
                          {a.status}
                        </span>
                      </td>
                      <td
                        className={`px-4 py-3 font-bold ${
                          a.grade !== "—" ? "text-emerald-600" : "text-slate-300"
                        }`}
                      >
                        {a.grade}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => setModalAssignment(a)}
                          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all duration-200 active:scale-95 ${
                            a.status === "Pending" || a.status === "Overdue"
                              ? actionStyles.action
                              : actionStyles.view
                          }`}
                        >
                          {a.status === "Pending" || a.status === "Overdue" ? (
                            <>
                              <Upload size={12} /> Submit
                            </>
                          ) : (
                            <>
                              <Eye size={12} /> View
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {filtered.length > PAGE_SIZE && (
          <div className="flex items-center justify-center gap-1.5">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded-lg px-3 py-1.5 text-xs font-bold text-slate-500 transition-colors hover:bg-slate-100 disabled:pointer-events-none disabled:opacity-40"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`h-8 w-8 rounded-lg text-xs font-bold transition-all duration-200 ${
                  p === page
                    ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-sm"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="rounded-lg px-3 py-1.5 text-xs font-bold text-slate-500 transition-colors hover:bg-slate-100 disabled:pointer-events-none disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {modalAssignment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-6 backdrop-blur-sm animate-[fadeIn_0.15s_ease]"
          onClick={() => setModalAssignment(null)}
        >
          <div
            className="relative w-full max-w-lg animate-[slideUp_0.2s_ease] rounded-2xl bg-white p-7 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalAssignment(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
            >
              <X size={16} />
            </button>

            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {modalAssignment.domain}
            </p>
            <h3 className="mt-1 pr-8 text-xl font-bold text-slate-800">{modalAssignment.title}</h3>
            <span className={`mt-2 inline-block rounded-full px-3 py-1 text-[11px] font-bold ${statusStyles[modalAssignment.status]}`}>
              {modalAssignment.status}
            </span>

            <div className="mt-5 rounded-xl bg-slate-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Assignment Description
              </p>
              <p className="text-sm leading-relaxed text-slate-700">{modalAssignment.description}</p>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Due Date</p>
                <p className="flex items-center gap-1 text-sm font-semibold text-slate-700">
                  <CalendarClock size={14} className="text-slate-400" /> {modalAssignment.dueDate}
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Submitted</p>
                <p className="text-sm font-semibold text-slate-700">{modalAssignment.submitted}</p>
              </div>
              {modalAssignment.grade !== "—" && (
                <div className="col-span-2 rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Grade</p>
                  <p className="text-xl font-extrabold text-emerald-600">{modalAssignment.grade}</p>
                </div>
              )}
            </div>

            {modalAssignment.feedback && (
              <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-[10px] font-bold uppercase text-emerald-700 mb-1">Mentor Feedback</p>
                <p className="text-sm leading-relaxed text-emerald-700">{modalAssignment.feedback}</p>
              </div>
            )}

            {(modalAssignment.status === "Pending" || modalAssignment.status === "Overdue") && (
              <button
                onClick={() => handleSubmit(modalAssignment.title)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 py-3 text-sm font-bold text-white shadow-md shadow-indigo-200 transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 active:scale-[0.98]"
              >
                <Upload size={15} /> Submit Assignment
              </button>
            )}
          </div>
        </div>
      )}
    </Layout>
  )
}