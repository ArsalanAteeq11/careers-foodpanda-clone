import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Navbar2 from "./components/Layout/Navbar2";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import ScrollToTop from "./components/Layout/ScrollToTop";
import CultureValues from "./pages/CultureAndValues";
import PandaPurpose from "./pages/PandaPurpose";
import Teams from "./pages/Teams";
import Benefits from "./pages/Benefits";
import DiversityInclusion from "./pages/DiversityInclusion";
import Jobs from "./pages/Jobs";
import PowerUp from "./pages/PowerUp";

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <Navbar /> : <Navbar2 />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/culture-values" element={<CultureValues />} />
        <Route path="/pandapurpose" element={<PandaPurpose />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route
          path="/diversity-equity-and-inclusion"
          element={<DiversityInclusion />}
        />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/powerup-sg-tech-traineeship" element={<PowerUp />} />
      </Routes>

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
