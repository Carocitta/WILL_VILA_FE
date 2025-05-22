import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Fotter";
import About from "./pages/About/About";
import PortfolioPage from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Conctact/Contact";
import Admin from "./pages/AdminPage/Admin";

function App() {
  return (
    <div className="container-fuid p-0">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
