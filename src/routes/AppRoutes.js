import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/header";
import Contact from "../pages/contact";
import Careers from "../pages/careers";
import Services from "../pages/services";
import About from "../pages/about";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;