export const handleApiError = (error) => {
  console.log(error?.message || 'no found message!');
  if (error?.response) {
    return error.message || `Server error: ${error.response.status}`;
  } else if (error?.request) {
    return 'Network error. Please check your connection.';
  } else {
    return error.message || 'An unexpected error occurred.';
  }
};
