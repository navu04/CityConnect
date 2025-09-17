import { Link } from "react-router-dom";

export default function ComplaintTable({ complaints }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full border-collapse">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Citizen</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Upvotes</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{complaint.id}</td>
              <td className="p-3">{complaint.citizen}</td>
              <td className="p-3">{complaint.category}</td>
              <td className="p-3">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  complaint.status === 'submitted' ? 'bg-yellow-100 text-yellow-800' :
                  complaint.status === 'on-going' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {complaint.status}
                </span>
              </td>
              <td className="p-3">{complaint.upvotes}</td>
              <td className="p-3">
                <Link
                  to={`/assign/${complaint.id}`}
                  className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors"
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