import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/dashboard/layout'
import { Sun, Moon, Monitor, Shield, Smartphone, Laptop } from 'lucide-react'

function Toggle({ enabled, onChange }) {
  return (
    <div
      onClick={onChange}
      className={`relative h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ${
        enabled ? 'bg-gradient-to-r from-indigo-500 to-blue-500' : 'bg-slate-200'
      }`}
    >
      <div
        className={`absolute top-[3px] h-[18px] w-[18px] rounded-full bg-white shadow transition-all duration-200 ${
          enabled ? 'left-[23px]' : 'left-[3px]'
        }`}
      />
    </div>
  )
}

const tabs = ['Account', 'Notifications', 'Security', 'Appearance']

const notifSettings = [
  { key: 'email', label: 'Email Notifications', desc: 'Receive important updates via email', default: true },
  { key: 'sms', label: 'SMS Alerts', desc: 'Get critical alerts via text message', default: false },
  { key: 'assignments', label: 'Assignment Reminders', desc: 'Reminders for upcoming and overdue assignments', default: true },
  { key: 'announcements', label: 'Announcement Alerts', desc: 'Be notified of new announcements and updates', default: true },
  { key: 'mentor', label: 'Mentor Messages', desc: 'Notifications when your mentor sends a message', default: true },
  { key: 'weekly', label: 'Weekly Report', desc: 'Receive a weekly progress digest every Monday morning', default: false },
]

const sessions = [
  { device: 'Chrome on Windows 11', location: 'Bengaluru, India', lastActive: 'Active now', icon: <Laptop size={18} /> },
  { device: 'Safari on iPhone 14', location: 'Bengaluru, India', lastActive: '2 hours ago', icon: <Smartphone size={18} /> },
]

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-[13px] text-slate-700 outline-none transition-all duration-200 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100'

const labelClass = 'mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-400'

export default function Settings() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Account')
  const [notifs, setNotifs] = useState(Object.fromEntries(notifSettings.map((n) => [n.key, n.default])))
  const [twoFA, setTwoFA] = useState(false)
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('English')
  const [timezone, setTimezone] = useState('IST (UTC+5:30)')

  return (
    <Layout
      role="student"
      currentPath="/student/settings"
      onNavigate={(path) => navigate(path)}
      title="Settings"
      subtitle="Manage your account preferences"
    >
      <div className="flex items-start gap-6 max-[900px]:flex-col">
       
        <div className="w-[200px] flex-shrink-0 max-[900px]:w-full">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm max-[900px]:flex max-[900px]:overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`w-full whitespace-nowrap border-b border-slate-100 px-4 py-3.5 text-left text-[13px] font-semibold transition-all duration-200 last:border-b-0 max-[900px]:w-auto max-[900px]:border-b-0 max-[900px]:border-b-[3px] ${
                  activeTab === t
                    ? 'border-l-[3px] border-l-indigo-500 bg-indigo-50 text-indigo-600 max-[900px]:border-l-0 max-[900px]:border-b-indigo-500'
                    : 'border-l-[3px] border-l-transparent text-slate-500 hover:bg-slate-50 max-[900px]:border-l-0 max-[900px]:border-b-transparent'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

       
        <div className="min-w-0 flex-1">
         
          {activeTab === 'Account' && (
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm max-[640px]:p-4">
              <div className="mb-5 text-base font-bold text-slate-800">Account Information</div>

              <div className="mb-7 flex flex-wrap items-center gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg shadow-indigo-200">
                  <span className="text-2xl font-bold text-white">RS</span>
                </div>
                <div>
                  <div className="mb-1 text-sm font-bold text-slate-800">Rahul Sharma</div>
                  <div className="mb-2.5 text-xs text-slate-400">rahul.sharma@example.com</div>
                  <button className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 active:scale-95">
                    Change Photo
                  </button>
                </div>
              </div>

              <div className="mb-5 grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
                {[
                  { label: 'Full Name', value: 'Rahul Sharma' },
                  { label: 'Email Address', value: 'rahul.sharma@example.com' },
                  { label: 'Phone Number', value: '+91 98765 43210' },
                  { label: 'College', value: 'RV College of Engineering' },
                ].map((f) => (
                  <div key={f.label}>
                    <label className={labelClass}>{f.label}</label>
                    <input defaultValue={f.value} className={inputClass} />
                  </div>
                ))}
              </div>
              <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-7 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
                Save Changes
              </button>
            </div>
          )}

          {activeTab === 'Notifications' && (
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm max-[640px]:p-4">
              <div className="mb-1 text-base font-bold text-slate-800">Notification Preferences</div>
              <div className="mb-5 text-[13px] text-slate-400">Choose how and when you want to be notified.</div>
              <div className="flex flex-col gap-2">
                {notifSettings.map((n) => (
                  <div
                    key={n.key}
                    className={`flex flex-wrap items-center justify-between gap-3 rounded-xl border px-4 py-4 transition-all duration-200 ${
                      notifs[n.key]
                        ? 'border-indigo-200 bg-indigo-50'
                        : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="mb-0.5 text-sm font-semibold text-slate-800">{n.label}</div>
                      <div className="text-xs text-slate-400">{n.desc}</div>
                    </div>
                    <Toggle enabled={notifs[n.key]} onChange={() => setNotifs((p) => ({ ...p, [n.key]: !p[n.key] }))} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Security' && (
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm max-[640px]:p-4">
                <div className="mb-5 flex items-center gap-2.5">
                  <Shield size={20} className="text-indigo-600" />
                  <div className="text-base font-bold text-slate-800">Change Password</div>
                </div>
                <div className="mb-5 flex flex-col gap-3.5">
                  {['Current Password', 'New Password', 'Confirm New Password'].map((l) => (
                    <div key={l}>
                      <label className={labelClass}>{l}</label>
                      <input type="password" placeholder="••••••••" className={inputClass} />
                    </div>
                  ))}
                </div>
                <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-7 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
                  Update Password
                </button>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm max-[640px]:p-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="mb-1 text-[15px] font-bold text-slate-800">Two-Factor Authentication</div>
                    <div className="text-[13px] text-slate-400">Add an extra layer of security using your mobile device.</div>
                  </div>
                  <Toggle enabled={twoFA} onChange={() => setTwoFA((v) => !v)} />
                </div>
                {twoFA && (
                  <div className="mt-3.5 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-[13px] font-semibold text-emerald-700">
                    ✅ Two-Factor Authentication is enabled for your account.
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm max-[640px]:p-4">
                <div className="mb-5 text-base font-bold text-slate-800">Active Sessions</div>
                <div className="flex flex-col gap-3">
                  {sessions.map((s, i) => (
                    <div
                      key={i}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors duration-150 hover:bg-slate-100"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400">
                          {s.icon}
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-slate-800">{s.device}</div>
                          <div className="text-[11px] text-slate-400">
                            {s.location} · {s.lastActive}
                          </div>
                        </div>
                      </div>
                      <button className="rounded-lg border border-red-200 bg-white px-3.5 py-1.5 text-xs font-bold text-red-500 transition-all duration-200 hover:bg-red-50 hover:border-red-300 active:scale-95">
                        Revoke
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Appearance' && (
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm max-[640px]:p-4">
              <div className="mb-1 text-base font-bold text-slate-800">Appearance</div>
              <div className="mb-5 text-[13px] text-slate-400">Customize how the platform looks for you.</div>

              <div className="mb-5">
                <label className="mb-3 block text-[10px] font-bold uppercase tracking-wider text-slate-400">Theme</label>
                <div className="grid grid-cols-3 gap-3 max-[640px]:grid-cols-1">
                  {[
                    { value: 'light', label: 'Light', Icon: Sun, desc: 'Clean white interface' },
                    { value: 'dark', label: 'Dark', Icon: Moon, desc: 'Easy on eyes at night' },
                    { value: 'system', label: 'System', Icon: Monitor, desc: 'Follow OS preference' },
                  ].map((opt) => (
                    <div
                      key={opt.value}
                      onClick={() => setTheme(opt.value)}
                      className={`cursor-pointer rounded-2xl border-2 p-4 text-center transition-all duration-200 ${
                        theme === opt.value
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className={`mb-2 flex justify-center ${theme === opt.value ? 'text-indigo-600' : 'text-slate-400'}`}>
                        <opt.Icon size={20} />
                      </div>
                      <div className={`mb-0.5 text-[13px] font-bold ${theme === opt.value ? 'text-indigo-600' : 'text-slate-800'}`}>
                        {opt.label}
                      </div>
                      <div className="text-[11px] text-slate-400">{opt.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <label className={labelClass}>Language</label>
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className={`${inputClass} cursor-pointer`}>
                  {['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Bengali'].map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <label className={labelClass}>Timezone</label>
                <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className={`${inputClass} cursor-pointer`}>
                  {['IST (UTC+5:30)', 'UTC+0:00', 'EST (UTC-5:00)', 'PST (UTC-8:00)', 'CET (UTC+1:00)'].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-7 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95">
                Save Preferences
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}