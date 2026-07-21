import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './forgotpassword.css'

const LockSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--fp-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const ArrowLeftSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

const CheckCircleSVG = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

export default function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (email.trim()) setSent(true)
  }

  return (
    <div className="fp-page">
      <div className="fp-card">
        {/* Back link */}
        <button type="button" className="fp-back" onClick={() => navigate('/login')}>
          <ArrowLeftSVG />
          Back to login
        </button>

        {!sent ? (
          <>
            <div className="fp-icon-circle">
              <LockSVG />
            </div>

            <h2 className="fp-title">Forgot your password?</h2>
            <p className="fp-desc">Enter your email and we'll send you a reset link.</p>

            <div className="fp-field">
              <label className="fp-label">Email address</label>
              <input
                className="fp-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <button type="button" className="fp-btn-primary" onClick={handleSend}>
              Send Reset Link
            </button>
          </>
        ) : (
          <div className="fp-success">
            <div className="fp-success-circle">
              <CheckCircleSVG />
            </div>
            <h2>Check your email!</h2>
            <p>
              We've sent a password reset link to <strong>{email}</strong>. Check your inbox and follow the
              instructions.
            </p>
            <button type="button" className="fp-btn-secondary" onClick={() => navigate('/login')}>
              Back to login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}