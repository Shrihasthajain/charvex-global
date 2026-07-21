import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './register.css'

const GlobeSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const EyeSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOffSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

const GoogleSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
)

export default function Register() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [role, setRole] = useState('student')

  return (
    <div className="rg-page">
      <div className="rg-left">
        <div className="rg-left-brand">
          <div className="rg-left-brand-mark">
            <GlobeSVG />
          </div>
          <span>Charvex Global</span>
        </div>

        <div className="rg-left-hero">
          <h1>Create your account</h1>
          <p>Join thousands of students building their careers.</p>
        </div>

        <div className="rg-pills">
          {['🎓 Student Portal', '🔐 Secure Access', '📊 Analytics'].map((pill) => (
            <div key={pill} className="rg-pill">{pill}</div>
          ))}
        </div>
      </div>

      <div className="rg-right">
        <div className="rg-card">
          <div className="rg-mobile-brand">
            <div className="rg-mobile-brand-mark">
              <GlobeSVG />
            </div>
            <span>Charvex Global</span>
          </div>

          <h2 className="rg-title">Create your account</h2>

          <div className="rg-form-grid">
            <div className="rg-field rg-field-grid">
              <label className="rg-label">Full Name <span className="rg-required">*</span></label>
              <input className="rg-input" type="text" placeholder="Your full name" />
            </div>

            <div className="rg-field rg-field-grid">
              <label className="rg-label">Email <span className="rg-required">*</span></label>
              <input className="rg-input" type="email" placeholder="you@example.com" />
            </div>

            <div className="rg-field rg-field-grid">
              <label className="rg-label">Phone Number <span className="rg-required">*</span></label>
              <input className="rg-input" type="tel" placeholder="+91 00000 00000" />
            </div>

            <div className="rg-field rg-field-grid">
              <label className="rg-label">College <span className="rg-required">*</span></label>
              <input className="rg-input" type="text" placeholder="Your college / university" />
            </div>

            <div className="rg-field rg-field-grid">
              <label className="rg-label">Branch <span className="rg-required">*</span></label>
              <select className="rg-select" defaultValue="">
                <option value="">Select branch</option>
                <option>Computer Science</option>
                <option>Information Technology</option>
                <option>Electronics</option>
                <option>Mechanical</option>
                <option>Civil</option>
                <option>Other</option>
              </select>
            </div>

            <div className="rg-field rg-field-grid">
              <label className="rg-label">Graduation Year <span className="rg-required">*</span></label>
              <select className="rg-select" defaultValue="">
                <option value="">Select year</option>
                {[2024, 2025, 2026, 2027, 2028].map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </div>

            <div className="rg-field rg-field-grid rg-field-full">
              <label className="rg-label">Password <span className="rg-required">*</span></label>
              <div className="rg-password-wrap">
                <input
                  className="rg-input rg-input-pass"
                  type={showPass ? 'text' : 'password'}
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="rg-eye-btn"
                  onClick={() => setShowPass(!showPass)}
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                >
                  {showPass ? <EyeSVG /> : <EyeOffSVG />}
                </button>
              </div>
            </div>
          </div>

          <div className="rg-role-field">
            <label className="rg-label rg-label-mb">Role</label>
            <div className="rg-role-row">
              {[{ id: 'student', label: '🎓 Student' }, { id: 'admin', label: '🛡️ Admin' }].map((r) => (
                <div
                  key={r.id}
                  className={`rg-role-card ${role === r.id ? 'is-active' : ''}`}
                  onClick={() => setRole(r.id)}
                >
                  {r.label}
                </div>
              ))}
            </div>
          </div>

          <button type="button" className="rg-btn-primary">
            Create account
          </button>

          <div className="rg-divider">
            <span>or sign up with</span>
          </div>

          <button type="button" className="rg-btn-google">
            <GoogleSVG />
            Sign up with Google
          </button>

          <p className="rg-switch">
            Already have an account?{' '}
            <button type="button" className="rg-link-strong" onClick={() => navigate('/login')}>
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}