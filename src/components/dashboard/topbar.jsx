import React, { useEffect, useRef, useState } from "react";
import "./topbar.css";

const MenuIcon = ({ open }) => (
  <span className={`tb-menu-icon ${open ? "is-active" : ""}`}>
    <span /><span /><span />
  </span>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
    <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 9a6 6 0 0 1 12 0c0 3.6 1 5.3 1.5 6H4.5C5 14.3 6 12.6 6 9Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M10 18a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const ChevronIcon = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4.5 20c1.4-3.6 4.6-5.5 7.5-5.5s6.1 1.9 7.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M19.4 13.5a7.6 7.6 0 0 0 0-3l2-1.4-2-3.4-2.3.8a7.6 7.6 0 0 0-2.6-1.5L14 2.5h-4l-.5 2.5a7.6 7.6 0 0 0-2.6 1.5l-2.3-.8-2 3.4 2 1.4a7.6 7.6 0 0 0 0 3l-2 1.4 2 3.4 2.3-.8a7.6 7.6 0 0 0 2.6 1.5l.5 2.5h4l.5-2.5a7.6 7.6 0 0 0 2.6-1.5l2.3.8 2-3.4-2-1.4Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M9 20H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 16l4-4-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 12H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SAMPLE_NOTIFICATIONS = [
  { id: 1, text: "Your application to Frontend Intern was shortlisted.", time: "10m ago", read: false },
  { id: 2, text: "New certificate available: React Fundamentals.", time: "2h ago", read: false },
  { id: 3, text: "Reminder: complete your profile to get matched faster.", time: "1d ago", read: true },
];

export default function Topbar({
  userName = "Charvex",
  notifications = SAMPLE_NOTIFICATIONS,
  onSearch,
  onMenuClick,
  sidebarOpen = false,
  onProfileClick,
  onSettingsClick,
  onLogout,
}) {
  const [query, setQuery] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const unreadCount = notifications.filter((n) => !n.read).length;
  const initials = userName
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  useEffect(() => {
    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <header className="tb-root tb-topbar">
      {onMenuClick && (
        <button
          type="button"
          className="tb-menu-btn"
          onClick={onMenuClick}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={sidebarOpen}
        >
          <MenuIcon open={sidebarOpen} />
        </button>
      )}

      <p className="tb-welcome">
        Welcome, <strong>{userName}</strong> <span className="tb-wave">👋</span>
      </p>

      <div className="tb-search">
        <SearchIcon />
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search internships, courses, people…"
          aria-label="Search"
        />
      </div>

      <div className="tb-right">
        <div className="tb-notif-wrap" ref={notifRef}>
          <button
            type="button"
            className={`tb-icon-btn ${notifOpen ? "is-open" : ""}`}
            onClick={() => setNotifOpen((v) => !v)}
            aria-label="Notifications"
            aria-expanded={notifOpen}
          >
            <BellIcon />
            {unreadCount > 0 && <span className="tb-badge">{unreadCount}</span>}
          </button>

          {notifOpen && (
            <div className="tb-dropdown tb-notif-dropdown" role="menu">
              <div className="tb-dropdown-header">Notifications</div>
              {notifications.map((n) => (
                <div key={n.id} className={`tb-notif-item ${n.read ? "is-read" : ""}`}>
                  <span className="tb-notif-dot" />
                  <div className="tb-notif-text">
                    <p>{n.text}</p>
                    <span>{n.time}</span>
                  </div>
                </div>
              ))}
              <div className="tb-dropdown-footer">
                <button type="button">View all notifications</button>
              </div>
            </div>
          )}
        </div>

        <div className="tb-profile-wrap" ref={profileRef}>
          <button
            type="button"
            className={`tb-profile-btn ${profileOpen ? "is-open" : ""}`}
            onClick={() => setProfileOpen((v) => !v)}
            aria-label="Profile menu"
            aria-expanded={profileOpen}
          >
            <span className="tb-avatar">{initials}</span>
            <span className="tb-profile-name">{userName}</span>
            <ChevronIcon className={`tb-chevron ${profileOpen ? "is-open" : ""}`} />
          </button>

          {profileOpen && (
            <div className="tb-dropdown tb-profile-dropdown" role="menu">
              <button type="button" className="tb-profile-item" onClick={onProfileClick}>
                <UserIcon /> View Profile
              </button>
              <button type="button" className="tb-profile-item" onClick={onSettingsClick}>
                <SettingsIcon /> Settings
              </button>
              <div className="tb-profile-divider" />
              <button type="button" className="tb-profile-item tb-danger" onClick={onLogout}>
                <LogoutIcon /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}