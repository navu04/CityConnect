import { Link } from "react-router-dom";

const complaints = [
  { id: 1, citizen: "Ravi Kumar", category: "Garbage", status: "submitted", upvotes: 12 },
  { id: 2, citizen: "Sita Devi", category: "Tap Leakage", status: "on-going", upvotes: 34 },
];

export default function Complaints() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">All Complaints</h2>
      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Citizen</th>
            <th className="p-2">Category</th>
            <th className="p-2">Status</th>
            <th className="p-2">Upvotes</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c.id} className="border-b hover:bg-gray-100">
              <td className="p-2">{c.id}</td>
              <td className="p-2">{c.citizen}</td>
              <td className="p-2">{c.category}</td>
              <td className="p-2">{c.status}</td>
              <td className="p-2">{c.upvotes}</td>
              <td className="p-2">
                <Link
                  to={`/assign/${c.id}`}
                  className="bg-green-600 text-white px-3 py-1 rounded-lg"
                >
                  Assign
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}