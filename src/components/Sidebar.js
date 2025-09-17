import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-700 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <ul className="space-y-4">
        <li><Link to="/" className="hover:text-yellow-300">📊 Dashboard</Link></li>
        <li><Link to="/complaints" className="hover:text-yellow-300">📝 Complaints</Link></li>
      </ul>
    </div>
  );
}