import { useState } from "react";

export default function AssignModal({ complaint, isOpen, onClose, onAssign }) {
  const [employee, setEmployee] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee && days) {
      onAssign(complaint.id, employee, days);
      setEmployee("");
      setDays("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h3 className="text-xl font-bold mb-4">Assign Complaint #{complaint?.id}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employee Name
            </label>
            <input
              type="text"
              placeholder="Karamchari Name"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expected Days
            </label>
            <input
              type="number"
              placeholder="Expected Days"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              required
            />
          </div>
          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Assign
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}