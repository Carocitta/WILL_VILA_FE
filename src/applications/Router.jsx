import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Navbar from "./components/Navbar";
import Header from "../components/Header/Header";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
