import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Complaints from "./pages/Complaints";
import AssignComplaint from "./pages/AssignComplaint";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/assign/:id" element={<AssignComplaint />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}