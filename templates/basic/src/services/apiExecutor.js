export const apiExecutor = async (apiCall, rejectWithValue, signal) => {
  try {
    const response = await apiCall(signal);
    return response.data ?? response;
  } catch (error) {
    // Centralized error handling for Redux thunks
    const { response } = error;

    // Handle specific error statuses
    if (response?.status === 401) {
      // Handle unauthorized - could dispatch logout action here
      console.error('Unauthorized access - consider redirecting to login');
    }

    if (response?.status === 403) {
      console.error('Access forbidden - insufficient permissions');
    }

    if (response?.status === 404) {
      console.error('Resource not found');
    }

    return rejectWithValue(response?.data || error.message);
  }
};
