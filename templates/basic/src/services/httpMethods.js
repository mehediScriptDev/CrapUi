import axiosInstance from './axiosInstance';

// Basic HTTP method wrappers - no error handling or response processing
// Response processing and error handling delegated to apiExecutor
export const GET = async (url, params, signal) => {
  return axiosInstance.get(url, { params, signal });
};

export const POST = async (url, data, signal) => {
  return axiosInstance.post(url, data, { signal });
};

export const PUT = async (url, data, signal) => {
  return axiosInstance.put(url, data, { signal });
};

export const DELETE = async (url, signal) => {
  return axiosInstance.delete(url, { signal });
};
