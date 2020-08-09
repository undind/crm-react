import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

export const API_HOST = 'http://localhost:4000';

const instance = axios.create({
    baseURL: API_HOST,
});

instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError) => {
        return Promise.reject(error.response);
    }
);

export default instance;
