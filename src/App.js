import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import About from './pages/About';
import Careers from './pages/Careers';
import BlogPage from './pages/BlogPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/careers" element={<Careers />} /> 
          <Route path="/blog-page" element={<BlogPage />} /> 

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
