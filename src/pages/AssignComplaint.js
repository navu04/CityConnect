import { useParams, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";

export default function AssignComplaint() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState("");
  const [days, setDays] = useState("");

  const handleAssign = useCallback(() => {
    if (employee && days) {
      alert(`Complaint ${id} assigned to ${employee} for ${days} days`);
      navigate('/complaints');
    } else {
      alert('Please fill in both employee name and expected days');
    }
  }, [id, employee, days, navigate]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Assign Complaint #{id}</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Karamchari Name"
          className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Expected Days"
          className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          required
          min="1"
        />
        <div className="flex space-x-3">
          <button
            onClick={handleAssign}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Assign
          </button>
          <button
            onClick={() => navigate('/complaints')}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}