// import React, { useEffect, useState } from "react";
// import "./sidebar.css";

// import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
// import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
// import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
// import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
// import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
// import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
// import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
// import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

// const MOBILE_BREAKPOINT = 980;

// // `path` is the route segment that goes under /{role}/...
// // so the student "Careers" link becomes /student/career, etc.
// const NAV_ITEMS_BY_ROLE = {
//   student: [
//     { id: "dashboard", label: "Dashboard", path: "studentdashboard", icon: <DashboardRoundedIcon fontSize="small" /> },
//     { id: "assignment", label: "Assignments", path: "assignment", icon: <AssignmentRoundedIcon fontSize="small" /> },
//     { id: "assessment", label: "Assessments", path: "assessment", icon: <QuizRoundedIcon fontSize="small" /> },
//     { id: "careers", label: "Careers", path: "career", icon: <WorkRoundedIcon fontSize="small" /> },
//     { id: "internships", label: "Internships", path: "internship", icon: <BusinessCenterRoundedIcon fontSize="small" /> },
//     { id: "certificates", label: "Certificates", path: "certificate", icon: <WorkspacePremiumRoundedIcon fontSize="small" /> },
//     { id: "learning", label: "Learning", path: "learning", icon: <MenuBookRoundedIcon fontSize="small" /> },
//     { id: "messages", label: "Messages", path: "messages", icon: <ChatRoundedIcon fontSize="small" /> },
//     { id: "profile", label: "Profile", path: "profile", icon: <PersonRoundedIcon fontSize="small" /> },
//     { id: "settings", label: "Settings", path: "settings", icon: <SettingsRoundedIcon fontSize="small" /> },
//   ],
//   // Add an `admin: [...]` array here later with its own items/paths —
//   // the component below already picks the right list based on `role`.
// };

// export default function Sidebar({
//   role = "student",
//   currentPath,
//   activeId,
//   onNavigate,
//   onLogout,
//   isOpen,
//   onClose,
// }) {
//   const [internalOpen, setInternalOpen] = useState(false);

//   const isControlled = isOpen !== undefined;
//   const mobileOpen = isControlled ? isOpen : internalOpen;

//   const navItems = NAV_ITEMS_BY_ROLE[role] || NAV_ITEMS_BY_ROLE.student;
//   const buildPath = (item) => `/${role}/${item.path}`;

//   // Active link is derived from the router's currentPath first (source of
//   // truth), falls back to an explicit activeId, then defaults to the first item.
//   const activeItem =
//     navItems.find((item) => currentPath?.startsWith(buildPath(item))) ||
//     navItems.find((item) => item.id === activeId) ||
//     navItems[0];

//   const closeMobile = () => {
//     if (isControlled) {
//       onClose?.();
//     } else {
//       setInternalOpen(false);
//     }
//   };

//   const handleSelect = (item) => {
//     onNavigate?.(buildPath(item));
//     closeMobile();
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > MOBILE_BREAKPOINT && mobileOpen) {
//         closeMobile();
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, [mobileOpen]);

//   useEffect(() => {
//     if (!mobileOpen) return;
//     const handleKey = (e) => {
//       if (e.key === "Escape") closeMobile();
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [mobileOpen]);

//   useEffect(() => {
//     if (mobileOpen) {
//       const prev = document.body.style.overflow;
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = prev;
//       };
//     }
//   }, [mobileOpen]);

//   return (
//     <div className="sb-root">
//       {!isControlled && (
//         <button
//           type="button"
//           className={`sb-hamburger ${mobileOpen ? "is-active" : ""}`}
//           onClick={() => setInternalOpen(!internalOpen)}
//         >
//           <span />
//           <span />
//           <span />
//         </button>
//       )}

//       {mobileOpen && <div className="sb-overlay" onClick={closeMobile}></div>}

//       <aside className={`sb-sidebar ${mobileOpen ? "is-open" : ""}`}>
//         <div className="sb-logo">
//           <span className="sb-logo-mark">CX</span>
//           <span className="sb-logo-text">Charvex Global</span>
//           <button className="sb-close-btn" onClick={closeMobile}>
//             <CloseRoundedIcon fontSize="small" />
//           </button>
//         </div>

//         <nav className="sb-nav">
//           <ul>
//             {navItems.map((item) => (
//               <li key={item.id}>
//                 <button
//                   className={`sb-nav-link ${activeItem.id === item.id ? "is-active" : ""}`}
//                   onClick={() => handleSelect(item)}
//                 >
//                   <span className="sb-nav-icon">{item.icon}</span>
//                   <span className="sb-nav-label">{item.label}</span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div className="sb-footer">
//           <button className="sb-nav-link sb-logout" onClick={onLogout}>
//             <span className="sb-nav-icon">
//               <LogoutRoundedIcon fontSize="small" />
//             </span>
//             <span className="sb-nav-label">Logout</span>
//           </button>
//         </div>
//       </aside>
//     </div>
//   );
// }


import React, { useEffect, useState, useCallback } from "react";
import "./sidebar.css";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import LayoutDashboardIcon from "@mui/icons-material/DashboardRounded"; // you already have this one
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";

const MOBILE_BREAKPOINT = 980;
const NAV_ITEMS_BY_ROLE = {
  student: [
    { id: "dashboard", label: "Dashboard", path: "studentdashboard", icon: <DashboardRoundedIcon fontSize="small" /> },
    { id: "assignment", label: "Assignment", path: "assignment", icon: <AssignmentRoundedIcon fontSize="small" /> },
    { id: "assessment", label: "Assessment", path: "assessment", icon: <QuizRoundedIcon fontSize="small" /> },
    { id: "career", label: "Career", path: "career", icon: <WorkRoundedIcon fontSize="small" /> },
    { id: "internship", label: "Internship", path: "internship", icon: <BusinessCenterRoundedIcon fontSize="small" /> },
    { id: "certificate", label: "Certificate", path: "certificate", icon: <WorkspacePremiumRoundedIcon fontSize="small" /> },
    { id: "learning", label: "Learning", path: "learning", icon: <MenuBookRoundedIcon fontSize="small" /> },
    { id: "messages", label: "Messages", path: "messages", icon: <ChatRoundedIcon fontSize="small" /> },
    { id: "profile", label: "Profile", path: "profile", icon: <PersonRoundedIcon fontSize="small" /> },
    { id: "settings", label: "Settings", path: "settings", icon: <SettingsRoundedIcon fontSize="small" /> },
  ],

  admin: [
  { id: "dashboard", label: "Dashboard", path: "admindashboard", icon: <LayoutDashboardIcon fontSize="small" /> },
  { id: "students", label: "Students", path: "students", icon: <PeopleAltRoundedIcon fontSize="small" /> },
  { id: "mentors", label: "Mentors", path: "mentors", icon: <SupervisorAccountRoundedIcon fontSize="small" /> },
  { id: "internships", label: "Internships", path: "internships", icon: <WorkRoundedIcon fontSize="small" /> },
  { id: "domains", label: "Domains", path: "domains", icon: <CategoryRoundedIcon fontSize="small" /> },
  { id: "content", label: "Content", path: "content", icon: <LibraryBooksRoundedIcon fontSize="small" /> },
  { id: "certificates", label: "Certificates", path: "certificates", icon: <WorkspacePremiumRoundedIcon fontSize="small" /> },
  { id: "announcements", label: "Announcements", path: "announcements", icon: <CampaignRoundedIcon fontSize="small" /> },
  { id: "reports", label: "Reports", path: "reports", icon: <BarChartRoundedIcon fontSize="small" /> },
  { id: "setting", label: "Settings", path: "setting", icon: <SettingsRoundedIcon fontSize="small" /> },
],
};

export default function Sidebar({
  role = "student",
  currentPath,
  activeId,
  onNavigate,
  onLogout,
  isOpen,
  onClose,
}) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = isOpen !== undefined;
  const mobileOpen = isControlled ? isOpen : internalOpen;

  const navItems = NAV_ITEMS_BY_ROLE[role] || NAV_ITEMS_BY_ROLE.student;
  const buildPath = (item) => `/${role}/${item.path}`;

  const activeItem =
    navItems.find((item) => currentPath?.startsWith(buildPath(item))) ||
    navItems.find((item) => item.id === activeId) ||
    navItems[0];

  const closeMobile = useCallback(() => {
    if (isControlled) {
      onClose?.();
    } else {
      setInternalOpen(false);
    }
  }, [isControlled, onClose]);

  const handleSelect = (item) => {
    onNavigate?.(buildPath(item));
    closeMobile();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT && mobileOpen) {
        closeMobile();
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen, closeMobile]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mobileOpen, closeMobile]);

  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  return (
    <div className="sb-root">
      {!isControlled && (
        <button
          type="button"
          className={`sb-hamburger ${mobileOpen ? "is-active" : ""}`}
          onClick={() => setInternalOpen(!internalOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      )}

      {mobileOpen && <div className="sb-overlay" onClick={closeMobile}></div>}

      <aside className={`sb-sidebar ${mobileOpen ? "is-open" : ""}`}>
        <div className="sb-logo">
          <span className="sb-logo-mark">CX</span>
          <span className="sb-logo-text">Charvex Global</span>
          <button className="sb-close-btn" onClick={closeMobile}>
            <CloseRoundedIcon fontSize="small" />
          </button>
        </div>

        <nav className="sb-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`sb-nav-link ${activeItem.id === item.id ? "is-active" : ""}`}
                  onClick={() => handleSelect(item)}
                >
                  <span className="sb-nav-icon">{item.icon}</span>
                  <span className="sb-nav-label">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sb-footer">
          <button className="sb-nav-link sb-logout" onClick={onLogout}>
            <span className="sb-nav-icon">
              <LogoutRoundedIcon fontSize="small" />
            </span>
            <span className="sb-nav-label">Logout</span>
          </button>
        </div>
      </aside>
    </div>
  );
}