import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE, // e.g. http://localhost:4000
});

// Attach token if you add login later
api.interceptors.request.use((config) => {
  const t = localStorage.getItem("token");
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});

export default api;
