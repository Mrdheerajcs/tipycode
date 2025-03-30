import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <div className="flex flex-1 mt-[5%]">
        {/* Sidebar */}
        <Sidebar />

        {/* Outlet (Main Content) */}
        <main className="flex-1 p-5 overflow-auto bg-white rounded-lg shadow-md">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
