import PropTypes from 'prop-types';

export default function ComplaintDetail({ complaint }) {
  if (!complaint) return null;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Complaint Details</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-semibold text-gray-700">Complaint ID:</label>
          <p className="text-gray-600">{complaint.id}</p>
        </div>
        <div>
          <label className="font-semibold text-gray-700">Citizen Name:</label>
          <p className="text-gray-600">{complaint.citizen}</p>
        </div>
        <div>
          <label className="font-semibold text-gray-700">Category:</label>
          <p className="text-gray-600">{complaint.category}</p>
        </div>
        <div>
          <label className="font-semibold text-gray-700">Status:</label>
          <span className={`px-2 py-1 rounded-full text-xs ${
            complaint.status === 'submitted' ? 'bg-yellow-100 text-yellow-800' :
            complaint.status === 'on-going' ? 'bg-blue-100 text-blue-800' :
            'bg-green-100 text-green-800'
          }`}>
            {complaint.status}
          </span>
        </div>
        <div>
          <label className="font-semibold text-gray-700">Upvotes:</label>
          <p className="text-gray-600">{complaint.upvotes}</p>
        </div>
        <div>
          <label className="font-semibold text-gray-700">Date Submitted:</label>
          <p className="text-gray-600">{complaint.dateSubmitted || 'N/A'}</p>
        </div>
      </div>
      {complaint.description && (
        <div className="mt-4">
          <label className="font-semibold text-gray-700">Description:</label>
          <p className="text-gray-600 mt-1">{complaint.description}</p>
        </div>
      )}
    </div>
  );
}

ComplaintDetail.propTypes = {
  complaint: PropTypes.shape({
    id: PropTypes.number.isRequired,
    citizen: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    upvotes: PropTypes.number.isRequired,
    dateSubmitted: PropTypes.string,
    description: PropTypes.string,
  }),
};