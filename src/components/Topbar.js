export default function Topbar() {
  return (
    <div className="bg-white shadow-sm border-b p-4 mb-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">City Connect Admin</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Welcome, Admin</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}