import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // ✅ Import Layout
import HomePage from "./pages/HomePage";
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />  {/* Home page inside Layout */}
          <Route path="/about" element={<About />} />  {/* New page inside Layout */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
