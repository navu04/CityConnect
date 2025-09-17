import { useParams } from "react-router-dom";
import { useState } from "react";

export default function AssignComplaint() {
  const { id } = useParams();
  const [employee, setEmployee] = useState("");
  const [days, setDays] = useState("");

  const handleAssign = () => {
    alert(`Complaint ${id} assigned to ${employee} for ${days} days`);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Assign Complaint #{id}</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Karamchari Name"
          className="border rounded-lg p-2 w-full"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />
        <input
          type="number"
          placeholder="Expected Days"
          className="border rounded-lg p-2 w-full"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <button
          onClick={handleAssign}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Assign
        </button>
      </div>
    </div>
  );
}