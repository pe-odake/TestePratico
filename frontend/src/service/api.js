import axios from "axios";

const API_URL = import.meta.env.VITE_URL_BACKEND

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;