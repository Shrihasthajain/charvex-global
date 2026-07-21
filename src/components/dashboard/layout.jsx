import React, { useState, useEffect } from 'react'
import Sidebar from './sidebar'
import Topbar from './topbar'
import './layout.css'

const MOBILE_BREAKPOINT = 980

export default function Layout({
  role,
  currentPath,
  onNavigate,
  userName = 'Charvex',
  title,
  subtitle,
  onLogout,
  children,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )

  useEffect(() => {
    const handler = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT
      setIsMobile(mobile)
      if (!mobile) setSidebarOpen(false)
    }
    window.addEventListener('resize', handler)
    handler()
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <div className="dl-root">
      <Sidebar
        role={role}
        currentPath={currentPath}
        onNavigate={onNavigate}
        onLogout={onLogout}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className={`dl-content-col ${isMobile ? 'is-mobile' : ''}`}>
        <Topbar
          userName={userName}
          onMenuClick={() => setSidebarOpen((v) => !v)}
          sidebarOpen={sidebarOpen}
          onProfileClick={() => onNavigate?.(`/${role}/profile`)}
          onSettingsClick={() => onNavigate?.(`/${role}/settings`)}
          onLogout={onLogout}
        />

        <main className="dl-main">
          {(title || subtitle) && (
            <div className="dl-page-header">
              {title && <h1>{title}</h1>}
              {subtitle && <p>{subtitle}</p>}
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  )
}