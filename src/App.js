import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import About from './pages/About';
import Careers from './pages/Careers';
import BlogPage from './pages/BlogPage';
import StartupPage from './pages/StartupPage';
import Login from "./pages/Login";

import Dashboard from "./Masters/Page/Dashboard";
import Education from "./Masters/Page/Education";
import Experience from "./Masters/Page/Experience";
import Projects from "./Masters/Page/Projects";
import Skills from "./Masters/Page/Skills";
import PrivateRoute from "./ApiConfig/PrivateRoute";

// Protected Routes Array
const protectedRoutes = [
  {
    path: "/dashboard/*",
    element: <Dashboard />,
    allowedRoles: ["USER", "ADMIN"],
    children: [
      { path: "education", element: <Education />, allowedRoles: ["USER", "ADMIN"] },
      { path: "experience", element: <Experience />, allowedRoles: ["USER", "ADMIN"] },
      { path: "projects", element: <Projects />, allowedRoles: ["USER", "ADMIN"] },
      { path: "skills", element: <Skills />, allowedRoles: ["USER", "ADMIN"] },
    ],
  },
];

function App() {
  return (
    <Router basename="/tipycode">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} /> 
          <Route path="careers" element={<Careers />} /> 
          <Route path="blog-page" element={<BlogPage />} /> 
          <Route path="start-up" element={<StartupPage />} /> 
          <Route path="login" element={<Login />} /> 
        </Route>

        {protectedRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={
            <PrivateRoute allowedRoles={route.allowedRoles}>
              {route.element}
            </PrivateRoute>
          }>
            {route.children?.map((child) => (
              <Route
                key={child.path}
                path={child.path}
                element={
                  <PrivateRoute allowedRoles={child.allowedRoles}>
                    {child.element}
                  </PrivateRoute>
                }
              />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
