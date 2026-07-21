import React, { useState } from 'react'
import './statcard.css'

const DEFAULT_COLOR = '#1454f5'

const ArrowUpSVG = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
)

const ArrowDownSVG = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export default function StatCard({ title, value, change, positive, icon, color, badgeColor, changeLabel = 'vs last month' }) {
  const [hovered, setHovered] = useState(false)

  const cardColor = color || DEFAULT_COLOR
  const bgColor = cardColor + '18'
  const resolvedBadgeColor = badgeColor || (positive === true ? '#10b981' : positive === false ? '#ef4444' : '#64748b')
  const badgeBg = resolvedBadgeColor + '18'
  const showArrow = typeof positive === 'boolean'

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`stat-card ${hovered ? 'is-hovered' : ''}`}
    >
      <div className="stat-card-top">
        <span className="stat-card-title">{title}</span>
        <div className="stat-card-icon" style={{ background: bgColor, color: cardColor }}>
          {icon}
        </div>
      </div>

      <div className="stat-card-value">{value}</div>

      {change !== undefined && (
        <div className="stat-card-change">
          <span className="stat-change-badge" style={{ background: badgeBg, color: resolvedBadgeColor }}>
            {showArrow && (positive ? <ArrowUpSVG /> : <ArrowDownSVG />)}
            {change}
          </span>
          {changeLabel && <span className="stat-change-label">{changeLabel}</span>}
        </div>
      )}
    </div>
  )
}