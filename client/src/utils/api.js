// Local API simulation for frontend-only version
// In a real project, these would connect to a backend API

// Simulate API delay
const simulateApiCall = (data, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data });
    }, delay);
  });
};

// Contact form simulation
export const contactAPI = {
  submit: async (data) => {
    console.log("Contact form submitted:", data);
    return simulateApiCall(data);
  },

  getAll: async () => {
    return simulateApiCall([]);
  },

  getById: async (id) => {
    return simulateApiCall({ id });
  },

  updateStatus: async (id, status) => {
    return simulateApiCall({ id, status });
  },

  delete: async (id) => {
    return simulateApiCall({ id });
  },

  getStats: async () => {
    return simulateApiCall({
      total: 0,
      recent: 0,
      new: 0,
      contacted: 0,
      completed: 0,
    });
  },
};

// Health check simulation
export const healthAPI = {
  check: async () => {
    return simulateApiCall({ status: "ok" });
  },
};

// Default API instance (for compatibility)
const api = {
  get: async (url) => simulateApiCall({ url }),
  post: async (url, data) => simulateApiCall(data),
  put: async (url, data) => simulateApiCall(data),
  delete: async (url) => simulateApiCall({ url }),
};

export default api;
