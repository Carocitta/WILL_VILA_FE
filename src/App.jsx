import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container mt-4">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
