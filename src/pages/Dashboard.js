import ComplaintCharts from "../components/ComplaintCharts";
import ComplaintMap from "../components/ComplaintMap";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Dashboard Overview</h2>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-lg font-bold">Total Complaints</h3>
          <p className="text-2xl font-semibold text-blue-600">245</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-lg font-bold">Ongoing</h3>
          <p className="text-2xl font-semibold text-orange-600">73</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-lg font-bold">Resolved</h3>
          <p className="text-2xl font-semibold text-green-600">152</p>
        </div>
      </div>

      {/* Graphs */}
      <ComplaintCharts />

      {/* Map */}
      <ComplaintMap />
    </div>
  );
}