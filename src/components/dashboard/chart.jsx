import React from 'react'
import {
  AreaChart, BarChart, LineChart,
  Area, Bar, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import './chart.css'

const COLORS = {
  primary: '#1454f5',
  border: '#e2e8f0',
  muted: '#64748b',
  text: '#1e293b',
  white: '#ffffff',
}

const SECONDARY = '#818cf8'

const tooltipStyle = {
  background: COLORS.white,
  border: `1px solid ${COLORS.border}`,
  borderRadius: '10px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
  fontSize: '13px',
  color: COLORS.text,
}

export default function ChartCard({ type = 'area', data = [], title, subtitle, height = 280 }) {
  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 5, right: 10, left: -10, bottom: 0 },
    }

    const axisStyle = { fontSize: 11, fill: COLORS.muted }

    if (type === 'bar') {
      return (
        <BarChart {...commonProps}>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} vertical={false} />
          <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
          <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: '#eff4ff' }} />
          <Bar dataKey="value" fill={COLORS.primary} radius={[6, 6, 0, 0]} />
          {data[0]?.secondary !== undefined && (
            <Bar dataKey="secondary" fill={SECONDARY} radius={[6, 6, 0, 0]} />
          )}
        </BarChart>
      )
    }

    if (type === 'line') {
      return (
        <LineChart {...commonProps}>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} vertical={false} />
          <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
          <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} />
          <Line type="monotone" dataKey="value" stroke={COLORS.primary} strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: COLORS.primary }} />
          {data[0]?.secondary !== undefined && (
            <Line type="monotone" dataKey="secondary" stroke={SECONDARY} strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: SECONDARY }} />
          )}
        </LineChart>
      )
    }

    return (
      <AreaChart {...commonProps}>
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.15} />
            <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="areaGradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={SECONDARY} stopOpacity={0.12} />
            <stop offset="95%" stopColor={SECONDARY} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} vertical={false} />
        <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area type="monotone" dataKey="value" stroke={COLORS.primary} strokeWidth={2.5} fill="url(#areaGradient)" dot={false} activeDot={{ r: 5, fill: COLORS.primary }} />
        {data[0]?.secondary !== undefined && (
          <Area type="monotone" dataKey="secondary" stroke={SECONDARY} strokeWidth={2.5} fill="url(#areaGradient2)" dot={false} activeDot={{ r: 5, fill: SECONDARY }} />
        )}
      </AreaChart>
    )
  }

  return (
    <div className="chart-card">
      {(title || subtitle) && (
        <div className="chart-card-header">
          {title && <div className="chart-card-title">{title}</div>}
          {subtitle && <div className="chart-card-subtitle">{subtitle}</div>}
        </div>
      )}

      <ResponsiveContainer width="100%" height={height}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  )
}