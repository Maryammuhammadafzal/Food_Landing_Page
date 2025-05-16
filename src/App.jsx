import { useState } from "react";
import {  Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Popular from "./Pages/Popular.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-auto w-full overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
