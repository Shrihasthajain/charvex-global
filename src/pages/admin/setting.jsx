import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DashboardLayout from "../../components/dashboard/layout"
import { MessageSquare, Code2, AlertTriangle } from "lucide-react"

function Toggle({ enabled, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ${
        enabled ? "bg-gradient-to-r from-indigo-500 to-blue-500" : "bg-slate-300"
      }`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-200 ${
          enabled ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </button>
  )
}

export default function AdminSettings() {
  const navigate = useNavigate()
  const [slack, setSlack] = useState(true)
  const [google, setGoogle] = useState(true)
  const [github, setGithub] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  return (
    <DashboardLayout
      role="admin"
      currentPath="/admin/setting"
      onNavigate={navigate}
      title="Settings"
      subtitle="Platform configuration and integrations"
    >
      <div className="max-w-2xl space-y-6">
       
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-[15px] font-semibold text-slate-900">General</h3>
          <div className="space-y-4">
            {[
              { label: "Organization Name", value: "Charvex Global LLP" },
              { label: "Contact Email", value: "admin@charvex.com" },
              { label: "Timezone", value: "Asia/Kolkata (IST, UTC+5:30)" },
            ].map((f) => (
              <div key={f.label}>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {f.label}
                </label>
                <input
                  defaultValue={f.value}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>
            ))}
          </div>
          <button className="mt-5 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
            Save Changes
          </button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-[15px] font-semibold text-slate-900">Notifications</h3>
          <div className="space-y-3">
            {[
              { label: "New Student Enrollment Alerts", desc: "Notify admin when a student registers" },
              { label: "Certificate Request Notifications", desc: "Alert when a certificate is requested" },
              { label: "Weekly Analytics Digest", desc: "Receive a summary every Monday morning" },
            ].map((n, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-slate-100 p-4 transition-colors duration-150 hover:bg-slate-50"
              >
                <div>
                  <p className="text-sm font-medium text-slate-700">{n.label}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{n.desc}</p>
                </div>
                <Toggle enabled={i < 2} onChange={() => {}} />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-[15px] font-semibold text-slate-900">Integrations</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4 transition-colors duration-150 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4A154B]">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Slack</p>
                  <p className="text-xs text-slate-400">Send notifications to Slack channels</p>
                </div>
              </div>
              <Toggle enabled={slack} onChange={() => setSlack(!slack)} />
            </div>

            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4 transition-colors duration-150 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white">
                  <span className="text-[15px] font-bold text-blue-600">G</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Google Workspace</p>
                  <p className="text-xs text-slate-400">Sync calendar and Drive</p>
                </div>
              </div>
              <Toggle enabled={google} onChange={() => setGoogle(!google)} />
            </div>

            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4 transition-colors duration-150 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#24292f]">
                  <Code2 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">GitHub</p>
                  <p className="text-xs text-slate-400">Track student code repositories</p>
                </div>
              </div>
              <Toggle enabled={github} onChange={() => setGithub(!github)} />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <h3 className="text-[15px] font-semibold text-red-600">Danger Zone</h3>
          </div>
          <p className="mb-4 text-sm text-slate-500">
            Permanently delete your organization, all student data, certificates, and reports. This action cannot be undone.
          </p>
          {!confirmDelete ? (
            <button
              onClick={() => setConfirmDelete(true)}
              className="rounded-lg border border-red-300 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-600 transition-colors duration-150 hover:bg-red-100"
            >
              Delete Organization
            </button>
          ) : (
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-medium text-red-600">Are you absolutely sure?</p>
              <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-red-700">
                Yes, delete everything
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-500 transition-colors duration-150 hover:bg-slate-50"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}