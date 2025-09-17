import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis } from "recharts";

const statusData = [
  { name: "Submitted", value: 45 },
  { name: "Ongoing", value: 30 },
  { name: "Resolved", value: 75 },
];

const categoryData = [
  { name: "Garbage", complaints: 40 },
  { name: "Potholes", complaints: 20 },
  { name: "Tap Leakage", complaints: 35 },
  { name: "Lamp Post", complaints: 15 },
];

const COLORS = ["#FF8042", "#0088FE", "#00C49F"];

export default function ComplaintCharts() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Pie Chart */}
      <div className="bg-white p-4 shadow rounded-2xl">
        <h3 className="font-semibold mb-3">Complaints by Status</h3>
        <PieChart width={300} height={300}>
          <Pie
            data={statusData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {statusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-4 shadow rounded-2xl">
        <h3 className="font-semibold mb-3">Complaints by Category</h3>
        <BarChart width={400} height={300} data={categoryData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="complaints" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}