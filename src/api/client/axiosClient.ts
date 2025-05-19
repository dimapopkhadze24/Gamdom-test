import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

export const getAxiosClient = (
  axiosConfig?: AxiosRequestConfig | undefined
): AxiosInstance => {
  const apiUrl = import.meta.env.VITE_BASE_API_URL;

  if (!apiUrl) {
    throw new Error(`
      Provide baseUrl as argument in axiosConfig or set REACT_APP_API_BASE_URL in the environment
    `);
  }

  const axiosClient = axios.create({
    withCredentials: false,

    ...axiosConfig,
  });

  // Add request interceptor to delay all requests by 500ms
  axiosClient.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return config;
  });

  return axiosClient;
};
