import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DashboardLayout from "../../components/dashboard/layout"
import Chart from "../../components/dashboard/chart"
import { Download } from "lucide-react"

const completionData = [
  { name: "Jan", value: 72 },
  { name: "Feb", value: 68 },
  { name: "Mar", value: 80 },
  { name: "Apr", value: 75 },
  { name: "May", value: 85 },
  { name: "Jun", value: 78 },
  { name: "Jul", value: 82 },
]

const domainData = [
  { name: "Full Stack", value: 68 },
  { name: "Data Sci.", value: 42 },
  { name: "UI/UX", value: 35 },
  { name: "Cloud", value: 28 },
  { name: "Cybersec", value: 20 },
  { name: "AI/ML", value: 15 },
]

const keyMetrics = [
  { label: "Avg Completion Rate", value: "77%" },
  { label: "Avg Internship Duration", value: "8 weeks" },
  { label: "Certificate Issuance Rate", value: "92%" },
  { label: "Student Satisfaction", value: "4.7 / 5" },
]

const tabs = ["Overview", "Students", "Internships", "Finance"]

export default function Reports() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <DashboardLayout
      role="admin"
      currentPath="/admin/reports"
      onNavigate={navigate}
      title="Reports"
      subtitle="Analytics and insights across all programs"
    >
      <div className="w-full">
    
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-150 hover:bg-slate-50 active:scale-95">
            <Download className="h-4 w-4" /> Export Report
          </button>
        </div>

        {activeTab === "Overview" && (
          <>
          
            <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Chart type="area" data={completionData} title="Completion Rate Trend" subtitle="% of students completing milestones on time" />
              <Chart type="bar" data={domainData} title="Students per Domain" subtitle="Current distribution across all domains" />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {keyMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-shadow duration-200 hover:shadow-md"
                >
                  <p className="text-2xl font-bold text-indigo-600">{m.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{m.label}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab !== "Overview" && (
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <p className="text-sm text-slate-400">{activeTab} reports coming soon.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}