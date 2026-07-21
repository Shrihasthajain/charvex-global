import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/dashboard/layout'
import { Send, Search, Megaphone, ChevronRight } from 'lucide-react'

const conversations = [
  { id: 1, name: 'Priya Singh', role: 'Mentor', initials: 'PS', time: '10:30 AM', unread: 2, lastMsg: 'Your assignment looks good!' },
  { id: 2, name: 'Admin Team', role: 'Charvex Admin', initials: 'AT', time: 'Yesterday', unread: 0, lastMsg: 'Welcome to Charvex!' },
  { id: 3, name: 'Charvex Support', role: 'Support', initials: 'CS', time: 'Mon', unread: 0, lastMsg: 'Your certificate is ready' },
  { id: 4, name: 'Arjun Kumar', role: 'Peer', initials: 'AK', time: 'Sun', unread: 1, lastMsg: 'Can you check the PR?' },
  { id: 5, name: 'System', role: 'Notifications', initials: 'SY', time: 'Fri', unread: 0, lastMsg: 'Assignment deadline reminder' },
]

const initialMessages = {
  1: [
    { text: 'Hi Rahul! How is Module 2 coming along?', sent: false, time: '10:00 AM' },
    { text: "It's going really well! I've completed the useState and useEffect sections.", sent: true, time: '10:10 AM' },
    { text: "That's great progress! Have you started on useCallback and useMemo?", sent: false, time: '10:15 AM' },
    { text: 'Yes, I read the docs but need to practice more. The memoization concept is a bit tricky.', sent: true, time: '10:22 AM' },
    { text: "Don't worry — it clicks once you see it in a real use case. I'll share an example project.", sent: false, time: '10:27 AM' },
    { text: 'Your assignment looks good!', sent: false, time: '10:30 AM' },
  ],
  2: [
    { text: 'Welcome to Charvex Global LLP! We are thrilled to have you join our internship program.', sent: false, time: 'Mon 9:00 AM' },
    { text: 'Thank you! Really excited to be here and start learning.', sent: true, time: 'Mon 9:10 AM' },
    { text: 'Your mentor Priya Singh will reach out shortly. Do not hesitate to contact us for any queries.', sent: false, time: 'Mon 9:15 AM' },
  ],
  3: [
    { text: 'Hello Rahul! Your Certificate of Excellence for React Development is ready for download.', sent: false, time: 'Mon 11:00 AM' },
    { text: 'Wonderful! I will download it right away. Thank you!', sent: true, time: 'Mon 11:05 AM' },
    { text: 'Your certificate is ready', sent: false, time: 'Mon 11:00 AM' },
  ],
  4: [
    { text: 'Hey Rahul! I pushed a fix for the auth bug. Can you check the PR?', sent: false, time: 'Sun 3:00 PM' },
    { text: "Sure! I'll review it this evening and leave comments.", sent: true, time: 'Sun 3:10 PM' },
    { text: 'Can you check the PR?', sent: false, time: 'Sun 3:00 PM' },
  ],
  5: [
    { text: 'Reminder: Your Node.js REST API Assignment is due on 15 Jul 2025. Please submit on time.', sent: false, time: 'Fri 8:00 AM' },
  ],
}

const announcements = [
  { title: 'New Module Released: Node.js & Express', date: '10 Jul 2025', content: 'Module 3 of your Full Stack Development internship is now live. Access it from the Learning Hub to begin your backend journey.' },
  { title: 'Internship Certificate Processing Begins', date: '05 Jul 2025', content: 'Completion certificates will be processed for all interns who finish their internship by 30 Apr 2025. Expect delivery within 5 business days.' },
  { title: 'Mentor Session Scheduled for 14 Jul', date: '08 Jul 2025', content: 'Your mentor Priya Singh has scheduled a 1-hour session on 14 Jul at 3:00 PM IST. Topic: Code Review & Best Practices.' },
  { title: 'Platform Maintenance Notice', date: '01 Jul 2025', content: 'The platform will undergo scheduled maintenance on 20 Jul 2025 from 2:00 AM to 4:00 AM IST. Please plan accordingly.' },
]

const notifications = [
  { icon: '📝', text: 'React Hooks Assignment has been graded — you received A+', time: '2h ago', read: false },
  { icon: '💬', text: 'Priya Singh sent you a message: "Your assignment looks good!"', time: '3h ago', read: false },
  { icon: '🏆', text: 'Certificate of Excellence is ready to download', time: '1d ago', read: true },
  { icon: '📅', text: 'Mentor session scheduled for 14 Jul at 3:00 PM IST', time: '2d ago', read: true },
  { icon: '⚠️', text: 'Assignment deadline approaching: Node.js API due in 2 days', time: '2d ago', read: true },
  { icon: '🎓', text: 'New course added: "Authentication with JWT" in Learning Hub', time: '3d ago', read: true },
  { icon: '✅', text: 'You completed Week 6 of the internship. Great progress!', time: '4d ago', read: true },
  { icon: '📣', text: 'New announcement: Module 3 is now live!', time: '5d ago', read: true },
]

const tabs = ['Inbox', 'Announcements', 'Mentor Chat', 'Notifications']

export default function Messages() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Inbox')
  const [activeConv, setActiveConv] = useState(1)
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [convSearch, setConvSearch] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, activeConv])

  const sendMessage = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages((prev) => ({
      ...prev,
      [activeConv]: [...(prev[activeConv] || []), { text: input.trim(), sent: true, time: 'Now' }],
    }))
    setInput('')
  }

  const filteredConvs = conversations.filter((c) => c.name.toLowerCase().includes(convSearch.toLowerCase()))
  const currentConv = conversations.find((c) => c.id === activeConv)

  return (
    <Layout
      role="student"
      currentPath="/student/messages"
      onNavigate={(path) => navigate(path)}
      title="Messages & Communications"
      subtitle="Stay connected with mentors and get updates"
    >
      <div className="w-full space-y-5">
       
        <div className="flex w-fit max-w-full gap-1 overflow-x-auto rounded-xl border border-slate-200 bg-white p-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`whitespace-nowrap rounded-lg px-5 py-2 text-[13px] font-semibold transition-all duration-200 ${
                activeTab === t
                  ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-sm'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

    
        {(activeTab === 'Inbox' || activeTab === 'Mentor Chat') && (
          <div className="flex h-[calc(100vh-220px)] min-h-[500px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm max-[860px]:h-auto max-[860px]:flex-col">
            {/* Conversation list */}
            <div className="flex w-[300px] flex-shrink-0 flex-col border-r border-slate-200 max-[860px]:w-full max-[860px]:max-h-[260px] max-[860px]:border-r-0 max-[860px]:border-b">
              <div className="border-b border-slate-200 p-3.5">
                <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-slate-400 transition-all duration-200 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-200">
                  <Search size={13} />
                  <input
                    value={convSearch}
                    onChange={(e) => setConvSearch(e.target.value)}
                    placeholder="Search conversations…"
                    className="w-full bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                {filteredConvs.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setActiveConv(conv.id)}
                    className={`flex cursor-pointer items-center gap-3 border-l-[3px] px-4 py-3 transition-colors duration-150 ${
                      activeConv === conv.id
                        ? 'border-l-indigo-500 bg-indigo-50'
                        : 'border-l-transparent hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 shadow-sm">
                      <span className="text-xs font-bold text-white">{conv.initials}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-0.5 flex items-center justify-between gap-2">
                        <span className="truncate text-[13px] font-bold text-slate-800">{conv.name}</span>
                        <span className="flex-shrink-0 text-[10px] text-slate-400">{conv.time}</span>
                      </div>
                      <div className="truncate text-[11px] text-slate-400">{conv.lastMsg}</div>
                    </div>
                    {conv.unread > 0 && (
                      <div className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 shadow-sm">
                        <span className="text-[9px] font-extrabold text-white">{conv.unread}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

           
            <div className="flex min-w-0 flex-1 flex-col max-[860px]:h-[60vh] max-[860px]:min-h-[420px]">
              {currentConv && (
                <>
                  <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-3.5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 shadow-sm">
                      <span className="text-xs font-bold text-white">{currentConv.initials}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800">{currentConv.name}</div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </span>
                        <span>{currentConv.role} · Online</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 overflow-y-auto bg-slate-50 p-5">
                    {(messages[activeConv] || []).map((msg, i) => (
                      <div key={i} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`max-w-[70%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm max-[480px]:max-w-[85%] ${
                            msg.sent
                              ? 'rounded-br-md bg-gradient-to-br from-indigo-500 to-blue-500 text-white'
                              : 'rounded-bl-md bg-white text-slate-800'
                          }`}
                        >
                          <div>{msg.text}</div>
                          <div className={`mt-1 text-[10px] ${msg.sent ? 'text-right text-blue-100' : 'text-slate-400'}`}>
                            {msg.time}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  <form onSubmit={sendMessage} className="flex items-center gap-2.5 border-t border-slate-200 bg-white p-3">
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type a message…"
                      className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-[13px] text-slate-700 outline-none transition-all duration-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                    <button
                      type="submit"
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-sm transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-md active:scale-95"
                    >
                      <Send size={16} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}

      
        {activeTab === 'Announcements' && (
          <div className="flex flex-col gap-3.5">
            {announcements.map((a, i) => (
              <div
                key={i}
                className="group flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg max-[480px]:flex-col"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-transform duration-300 group-hover:scale-110">
                  <Megaphone size={18} />
                </div>
                <div className="flex-1">
                  <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2.5">
                    <div className="text-sm font-bold text-slate-800">{a.title}</div>
                    <div className="text-[11px] text-slate-400">{a.date}</div>
                  </div>
                  <div className="mb-3 text-[13px] leading-relaxed text-slate-500">{a.content}</div>
                  <button className="flex items-center gap-1 text-xs font-bold text-indigo-600 transition-colors duration-200 hover:text-indigo-700">
                    Read More
                    <ChevronRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Notifications' && (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-2.5 border-b border-slate-200 px-5 py-3.5">
              <div className="text-[15px] font-bold text-slate-800">All Notifications</div>
              <button className="text-xs font-bold text-indigo-600 transition-colors duration-200 hover:text-indigo-700">
                Mark all as read
              </button>
            </div>
            {notifications.map((n, i) => (
              <div
                key={i}
                className={`flex items-start gap-3.5 border-b border-slate-100 px-5 py-3.5 transition-colors duration-150 last:border-b-0 ${
                  n.read ? 'bg-white hover:bg-slate-50' : 'bg-indigo-50/60 hover:bg-indigo-50'
                }`}
              >
                <div
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border text-lg ${
                    n.read ? 'border-slate-200 bg-slate-50' : 'border-indigo-200 bg-indigo-100'
                  }`}
                >
                  {n.icon}
                </div>
                <div className="flex-1">
                  <div className={`mb-0.5 text-[13px] leading-relaxed text-slate-800 ${n.read ? '' : 'font-semibold'}`}>
                    {n.text}
                  </div>
                  <div className="text-[11px] text-slate-400">{n.time}</div>
                </div>
                {!n.read && <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}