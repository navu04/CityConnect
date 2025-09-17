import axios from 'axios';

// Create axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
});

// Request interceptor for auth
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API methods
export const complaintAPI = {
  // Get all complaints
  getAllComplaints: () => api.get('/complaints'),
  
  // Get complaint by ID
  getComplaintById: (id) => api.get(`/complaints/${id}`),
  
  // Update complaint status
  updateComplaintStatus: (id, status) => api.patch(`/complaints/${id}/status`, { status }),
  
  // Assign complaint
  assignComplaint: (id, assignedTo, expectedDays) => 
    api.patch(`/complaints/${id}/assign`, { assignedTo, expectedDays }),
  
  // Get dashboard stats
  getDashboardStats: () => api.get('/dashboard/stats'),
  
  // Get complaints by category
  getComplaintsByCategory: () => api.get('/complaints/by-category'),
  
  // Get complaints by status
  getComplaintsByStatus: () => api.get('/complaints/by-status'),
};

export default api;