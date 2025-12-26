import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/Layout/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
  );
}
