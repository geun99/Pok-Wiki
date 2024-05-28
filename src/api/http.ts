import axios, { AxiosRequestConfig } from "axios";

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });
  axiosInstance.interceptors.request.use(
    async (response) => {
      return response;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
