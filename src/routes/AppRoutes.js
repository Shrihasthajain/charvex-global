import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/Home";
import Header from "../components/header";
import Contact from "../pages/contact";
import Careers from "../pages/careers";
import Services from "../pages/services";
import About from "../pages/about";
import Projects from "../pages/projects";
import Courses from "../pages/courses";
import Journey from "../pages/journey";
import Icons from "../components/icons";
import Privacy from "../components/privacy";
import Terms from "../components/terms";
import Security from "../components/security";
import Cookies from "../components/cookies";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import ForgotPassword from "../pages/auth/forgotpassword";
import Assessment from "../pages/student/assessment";
import Assignment from "../pages/student/assignment";
import Career from "../pages/student/career";
import StudentDashboard from "../pages/student/studentdashboard";
import Certificate from "../pages/student/certificate";
import Internship from "../pages/student/internship";
import Learning from "../pages/student/learning";
import Messages from "../pages/student/messages";
import Profile from "../pages/student/profile";
import Settings from "../pages/student/settings";


import AdminDashboard from "../pages/admin/admindashboard";
import Students from "../pages/admin/students";
import Domains from "../pages/admin/domains";
import Mentors from "../pages/admin/mentors";
import Certificates from "../pages/admin/certificates";
import Reports from "../pages/admin/reports";
import Setting from "../pages/admin/setting";
import Internships from "../pages/admin/internships";
import Announcements from "../pages/admin/announcements";
import Content from "../pages/admin/content";

const HIDE_ICONS_ON = ["/courses", "/journey"];

const IconsGate = () => {
  const location = useLocation();
  const shouldHide = HIDE_ICONS_ON.includes(location.pathname);

  if (shouldHide) return null;
  return <Icons />;
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/journey" element={<Journey/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/security" element={<Security/>} />
        <Route path="/cookies" element={<Cookies/>} />
        <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/forgotpassword" element={<ForgotPassword/>}/>
         <Route path="/student/studentdashboard" element={<StudentDashboard />} />
        <Route path="/student/assignment" element={<Assignment />} />
        <Route path="/student/assessment" element={<Assessment />} />
        <Route path="/student/career" element={<Career />} />
        <Route path="/student/internship" element={<Internship />} />
        <Route path="/student/certificate" element={<Certificate />} />
        <Route path="/student/learning" element={<Learning />} />
        <Route path="/student/messages" element={<Messages />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/settings" element={<Settings />} />

      <Route path="/admin/admindashboard" element={<AdminDashboard/>} />
      <Route path="/admin/students" element={<Students/>} />
      <Route path="/admin/domains" element={<Domains/>} />
      <Route path="/admin/mentors" element={<Mentors />} />
      <Route path="/admin/certificates" element={<Certificates  />} />
      <Route path="/admin/reports" element={<Reports />} />
      <Route path="/admin/setting" element={<Setting />} />
      <Route path="/admin/internships" element={<Internships/>} />
      <Route path="/admin/announcements" element={<Announcements />} />
      <Route path="/admin/content" element={<Content  />} />
      </Routes>

       <IconsGate />
    </BrowserRouter>
  );
};

export default AppRoutes;



// import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { useEffect, Suspense, lazy } from "react";

// // Layout / shared
// import Icons from "../components/icons";

// // Public pages
// import Home from "../pages/Home";
// import About from "../pages/about";
// import Careers from "../pages/careers";
// import Contact from "../pages/contact";
// import Services from "../pages/services";
// import Projects from "../pages/projects";
// import Courses from "../pages/courses";
// import Journey from "../pages/journey";

// // Legal
// import Privacy from "../components/privacy";
// import Terms from "../components/terms";
// import Security from "../components/security";
// import Cookies from "../components/cookies";

// // Auth
// import Login from "../pages/auth/login";
// import Register from "../pages/auth/register";
// import ForgotPassword from "../pages/auth/forgotpassword";

// // Student area (lazy-loaded)
// const StudentDashboard = lazy(() => import("../pages/student/studentdashboard"));
// const Assignment = lazy(() => import("../pages/student/assignment"));
// const Assessment = lazy(() => import("../pages/student/assessment"));
// const Career = lazy(() => import("../pages/student/career"));
// const Internship = lazy(() => import("../pages/student/internship"));
// const Certificate = lazy(() => import("../pages/student/certificate"));
// const Learning = lazy(() => import("../pages/student/learning"));
// const Messages = lazy(() => import("../pages/student/messages"));
// const Profile = lazy(() => import("../pages/student/profile"));
// const Settings = lazy(() => import("../pages/student/settings"));

// const HIDE_ICONS_ON = new Set(["/courses", "/journey"]);

// const IconsGate = () => {
//   const { pathname } = useLocation();
//   return HIDE_ICONS_ON.has(pathname) ? null : <Icons />;
// };

// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// };

// // Guards student routes until real auth is wired in
// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = Boolean(localStorage.getItem("authToken")); // replace with real auth check
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

// const AppRoutes = () => {
//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           {/* Public */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/careers" element={<Careers />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/courses" element={<Courses />} />
//           <Route path="/journey" element={<Journey />} />

//           {/* Legal */}
//           <Route path="/privacy" element={<Privacy />} />
//           <Route path="/terms" element={<Terms />} />
//           <Route path="/security" element={<Security />} />
//           <Route path="/cookies" element={<Cookies />} />

//           {/* Auth */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/forgotpassword" element={<ForgotPassword />} />

//           {/* Student (protected) */}
//           <Route path="/student/studentdashboard" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
//           <Route path="/student/assignment" element={<ProtectedRoute><Assignment /></ProtectedRoute>} />
//           <Route path="/student/assessment" element={<ProtectedRoute><Assessment /></ProtectedRoute>} />
//           <Route path="/student/career" element={<ProtectedRoute><Career /></ProtectedRoute>} />
//           <Route path="/student/internship" element={<ProtectedRoute><Internship /></ProtectedRoute>} />
//           <Route path="/student/certificate" element={<ProtectedRoute><Certificate /></ProtectedRoute>} />
//           <Route path="/student/learning" element={<ProtectedRoute><Learning /></ProtectedRoute>} />
//           <Route path="/student/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
//           <Route path="/student/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//           <Route path="/student/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
//         </Routes>
//       </Suspense>

//       <IconsGate />
//     </BrowserRouter>
//   );
// };

// export default AppRoutes;