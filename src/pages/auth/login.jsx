import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './login.css'

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

export default function Login() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('email')
  const [showPass, setShowPass] = useState(false)
  const [role, setRole] = useState('student')
  const [remember, setRemember] = useState(false)

  const handleLogin = () => {
    if (role === 'admin') navigate('/admin/admindashboard')
    else navigate('/student/studentdashboard')
  }

  return (
    <div className="lg-page">
      <div className="lg-left">
        <div className="lg-left-brand">
          <div className="lg-left-brand-mark">
            <GlobeSVG />
          </div>
          <span>Charvex Global</span>
        </div>

        <div className="lg-left-hero">
          <h1>Welcome back</h1>
          <p>Log in to your dashboard</p>
        </div>

        <div className="lg-pills">
          {['🎓 Student Portal', '🔐 Secure Access', '📊 Analytics'].map((pill) => (
            <div key={pill} className="lg-pill">{pill}</div>
          ))}
        </div>
      </div>

      <div className="lg-right">
        <div className="lg-card">
          <div className="lg-mobile-brand">
            <div className="lg-mobile-brand-mark">
              <GlobeSVG />
            </div>
            <span>Charvex Global</span>
          </div>

          <h2 className="lg-title">Welcome back</h2>
          <p className="lg-sub">Log in to your dashboard</p>

          {/* Email/Phone tabs */}
          <div className="lg-tabs">
            {[{ id: 'email', label: 'Email' }, { id: 'phone', label: 'Phone' }].map((t) => (
              <button
                key={t.id}
                type="button"
                className={`lg-tab ${tab === t.id ? 'is-active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="lg-field">
            <label className="lg-label">{tab === 'email' ? 'Email address' : 'Phone number'}</label>
            <input
              className="lg-input"
              type={tab === 'email' ? 'email' : 'tel'}
              placeholder={tab === 'email' ? 'you@example.com' : '+91 00000 00000'}
            />
          </div>

          <div className="lg-field">
            <label className="lg-label">Password</label>
            <div className="lg-password-wrap">
              <input
                className="lg-input lg-input-pass"
                type={showPass ? 'text' : 'password'}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="lg-eye-btn"
                onClick={() => setShowPass(!showPass)}
                aria-label={showPass ? 'Hide password' : 'Show password'}
              >
                {showPass ? <EyeSVG /> : <EyeOffSVG />}
              </button>
            </div>
          </div>

          <div className="lg-row-between">
            <label className="lg-checkbox">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              Keep me signed in
            </label>
            <button type="button" className="lg-link" onClick={() => navigate('/forgotpassword')}>
              Forgot password?
            </button>
          </div>

          <div className="lg-field">
            <label className="lg-label lg-label-mb">Sign in as</label>
            <div className="lg-role-row">
              {[{ id: 'student', label: '🎓 Student' }, { id: 'admin', label: '🛡️ Admin' }].map((r) => (
                <div
                  key={r.id}
                  className={`lg-role-card ${role === r.id ? 'is-active' : ''}`}
                  onClick={() => setRole(r.id)}
                >
                  {r.label}
                </div>
              ))}
            </div>
          </div>

          <button type="button" className="lg-btn-primary" onClick={handleLogin}>
            Log in
          </button>

          <div className="lg-divider">
            <span>or continue with</span>
          </div>

          <button type="button" className="lg-btn-google">
            <GoogleSVG />
            Continue with Google
          </button>

          <p className="lg-switch">
            New to Charvex Global?{' '}
            <button type="button" className="lg-link-strong" onClick={() => navigate('/register')}>
              Create an account
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}