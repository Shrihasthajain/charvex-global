import React from 'react'
import './table.css'

export default function DataTable({ columns = [], data = [], title, action }) {
  return (
    <div className="data-table-card">
      {/* Header */}
      {(title || action) && (
        <div className="data-table-header">
          {title && <div className="data-table-title">{title}</div>}
          {action && <div className="data-table-action">{action}</div>}
        </div>
      )}

      <div className="data-table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="data-table-empty">
                  No data available
                </td>
              </tr>
            ) : (
              data.map((row, i) => (
                <tr key={i}>
                  {columns.map((col) => (
                    <td key={col.key}>{col.render ? col.render(row[col.key], row) : row[col.key]}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}