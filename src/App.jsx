import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" />
          <Route path="/about" />
          <Route path="/portfolio" />
          <Route path="/contact" />
        </Routes>
      </div>
    </>
  );
}

export default App;
