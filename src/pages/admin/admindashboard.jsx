import { useNavigate } from "react-router-dom"
import DashboardLayout from "../../components/dashboard/layout"
import StatCard from "../../components/dashboard/statcard"
import Chart from "../../components/dashboard/chart"
import DataTable from "../../components/dashboard/table"
import { Users, Briefcase, UserCheck, Award } from "lucide-react"

const enrollmentTrend = [
  { name: "Aug", value: 18 },
  { name: "Sep", value: 24 },
  { name: "Oct", value: 22 },
  { name: "Nov", value: 30 },
  { name: "Dec", value: 25 },
  { name: "Jan", value: 35 },
  { name: "Feb", value: 40 },
  { name: "Mar", value: 38 },
  { name: "Apr", value: 45 },
  { name: "May", value: 50 },
  { name: "Jun", value: 48 },
  { name: "Jul", value: 56 },
]

const domainDistribution = [
  { name: "Full Stack", value: 68 },
  { name: "Data Science", value: 42 },
  { name: "UI/UX", value: 35 },
  { name: "Cloud", value: 28 },
  { name: "Cybersec", value: 20 },
  { name: "AI/ML", value: 15 },
]

const enrollments = [
  { name: "Arjun Sharma", domain: "Full Stack Dev", mentor: "Theja S P J", status: "Active", date: "1 Mar 2026" },
  { name: "Priya Nair", domain: "Data Science", mentor: "Jeevan K", status: "Active", date: "3 Mar 2026" },
  { name: "Rahul Menon", domain: "UI/UX Design", mentor: "Deekshith H R", status: "Completed", date: "5 Feb 2026" },
  { name: "Sneha Patel", domain: "Cloud Computing", mentor: "Mohammed A", status: "Active", date: "10 Mar 2026" },
  { name: "Kiran Bhat", domain: "AI/ML", mentor: "Theja S P J", status: "Pending", date: "15 Jul 2026" },
]

const statusStyles = {
  Active: "bg-emerald-50 text-emerald-700",
  Completed: "bg-indigo-50 text-indigo-700",
  Pending: "bg-amber-50 text-amber-700",
}

const enrollColumns = [
  { key: "name", label: "Student Name" },
  { key: "domain", label: "Domain" },
  { key: "mentor", label: "Mentor" },
  {
    key: "status",
    label: "Status",
    render: (v) => (
      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[v] ?? ""}`}>{v}</span>
    ),
  },
  { key: "date", label: "Enrolment Date" },
]

export default function AdminDashboard() {
  const navigate = useNavigate()
  return (
    <DashboardLayout
      role="admin"
      currentPath="/admin/dashboard"
      onNavigate={navigate}
      title="Admin Dashboard"
      subtitle="Overview of all internship operations"
    >
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Students" value="248" change="12" positive icon={<Users className="h-5 w-5" />} color="blue" />
        <StatCard title="Active Internships" value="156" change="8" positive icon={<Briefcase className="h-5 w-5" />} color="green" />
        <StatCard title="Mentors" value="24" change="2" positive icon={<UserCheck className="h-5 w-5" />} color="purple" />
        <StatCard title="Certificates Issued" value="89" change="15" positive icon={<Award className="h-5 w-5" />} color="orange" />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Chart type="line" data={enrollmentTrend} title="Student Enrollment Trend" subtitle="Monthly new enrollments — Aug 2025 to Jul 2026" />
        <Chart type="bar" data={domainDistribution} title="Domain-wise Distribution" subtitle="Active students per domain" />
      </div>

      <DataTable columns={enrollColumns} data={enrollments} title="Recent Enrollments" />
    </DashboardLayout>
  )
}