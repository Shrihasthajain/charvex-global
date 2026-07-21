import React, { useState } from 'react'
import { Download, Share2, Award } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/dashboard/layout'

const certificates = [
  { type: 'OFFER LETTER', certType: 'Internship Offer Letter', domain: 'Full Stack Development', issueDate: '15 Jan 2025', certId: 'CHVX-OL-2025-0847', status: 'Issued', category: 'Offer Letters' },
  { type: 'INTERNSHIP COMPLETION', certType: 'Certificate of Completion', domain: 'Full Stack Development', issueDate: '30 Apr 2025', certId: 'CHVX-CC-2025-1042', status: 'Pending', category: 'Completion' },
  { type: 'EXCELLENCE AWARD', certType: 'Certificate of Excellence', domain: 'React Development', issueDate: '15 Mar 2025', certId: 'CHVX-CE-2025-0933', status: 'Issued', category: 'Completion' },
  { type: 'RECOMMENDATION', certType: 'Letter of Recommendation', domain: 'Full Stack Development', issueDate: '30 Apr 2025', certId: 'CHVX-LOR-2025-0291', status: 'Processing', category: 'Recommendation' },
]

const downloadHistory = [
  { name: 'Internship Offer Letter', type: 'Offer Letter', date: '16 Jan 2025', format: 'PDF' },
  { name: 'Certificate of Excellence', type: 'Completion', date: '16 Mar 2025', format: 'PDF' },
  { name: 'Certificate of Excellence', type: 'Completion', date: '18 Mar 2025', format: 'PNG' },
]

const statusStyles = {
  Issued: 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200',
  Pending: 'bg-amber-50 text-amber-600 ring-1 ring-amber-200',
  Processing: 'bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200',
}

const tabs = ['All', 'Offer Letters', 'Completion', 'Recommendation', 'Download History']

export default function Certificates() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('All')

  const filtered =
    activeTab === 'All' || activeTab === 'Download History'
      ? certificates
      : certificates.filter((c) => c.category === activeTab)

  return (
    <Layout
      role="student"
      currentPath="/student/certificate"
      onNavigate={navigate}
      title="My Certificates"
      subtitle="Download and manage your certificates"
    >
      <div className="w-full space-y-6">
        
        <div className="flex w-fit max-w-full gap-1 overflow-x-auto rounded-xl border border-slate-200 bg-white p-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                activeTab === t
                  ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-sm'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {activeTab !== 'Download History' && (
          <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-5">
            {filtered.map((cert, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl border-2 border-amber-400 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-200"
              >
          
                <div className="h-1.5 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400" />

                <div className="px-8 py-6 max-[480px]:px-5">
                  {/* Header */}
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 shadow-sm">
                        <span className="text-[11px] font-black text-white">CG</span>
                      </div>
                      <div>
                        <div className="text-[11px] font-extrabold tracking-wide text-slate-800">CHARVEX GLOBAL</div>
                        <div className="text-[9px] text-slate-400">LLP · Certified Partner</div>
                      </div>
                    </div>
                    <Award size={22} className="flex-shrink-0 text-amber-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  </div>

                  
                  <div className="mb-4 border-y border-amber-100 py-4">
                    <div className="mb-1 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                      Certificate Of
                    </div>
                    <div className="mb-2.5 text-xl font-extrabold tracking-wide text-slate-800 max-[480px]:text-[17px]">
                      {cert.type}
                    </div>
                    <div className="text-[11px] text-slate-400">This is to certify that</div>
                    <div className="my-1.5 text-base font-bold text-indigo-600">Rahul Sharma</div>
                    <div className="text-[11px] text-slate-400">has successfully completed the</div>
                    <div className="mt-0.5 text-[13px] font-bold text-slate-800">{cert.domain} Internship Program</div>
                  </div>

                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3 max-[480px]:flex-col max-[480px]:items-start">
                    <div>
                      <div className="mb-0.5 text-[9px] font-bold uppercase text-slate-400">Issue Date</div>
                      <div className="text-xs font-semibold text-slate-700">{cert.issueDate}</div>
                    </div>
                    <div className="text-right max-[480px]:text-left">
                      <div className="mb-0.5 text-[9px] font-bold uppercase text-slate-400">Certificate ID</div>
                      <div className="break-all font-mono text-[10px] text-slate-400">{cert.certId}</div>
                    </div>
                  </div>

                  
                  <div className="flex flex-wrap items-center justify-between gap-3 max-[480px]:flex-col max-[480px]:items-stretch">
                    <span className={`w-fit rounded-full px-3 py-1 text-[11px] font-bold ${statusStyles[cert.status]}`}>
                      {cert.status}
                    </span>
                    <div className="flex gap-2 max-[480px]:flex-col">
                      <button
                        disabled={cert.status !== 'Issued'}
                        className={`flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition-all duration-200 ${
                          cert.status === 'Issued'
                            ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-sm hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95 cursor-pointer'
                            : 'cursor-not-allowed bg-slate-100 text-slate-400'
                        }`}
                      >
                        <Download size={13} /> Download
                      </button>
                      <button className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-500 transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 active:scale-95">
                        <Share2 size={13} /> Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Download History' && (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4 text-[15px] font-bold text-slate-800">
              Download History
            </div>
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead className="bg-slate-50">
                  <tr>
                    {['Certificate Name', 'Type', 'Download Date', 'Format', 'Action'].map((h) => (
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
                  {downloadHistory.map((d, i) => (
                    <tr
                      key={i}
                      className="border-t border-slate-100 transition-colors duration-150 hover:bg-indigo-50/40"
                    >
                      <td className="px-4 py-3.5 text-[13px] font-semibold text-slate-800">{d.name}</td>
                      <td className="px-4 py-3.5 text-xs text-slate-500">{d.type}</td>
                      <td className="px-4 py-3.5 text-xs text-slate-500">{d.date}</td>
                      <td className="px-4 py-3.5">
                        <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-600 ring-1 ring-indigo-200">
                          {d.format}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-500 transition-all duration-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 active:scale-95">
                          <Download size={11} /> Re-download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}