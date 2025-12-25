import axios from "axios";

const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/").replace(/(?<!:)\/$/, "") + "/";

const api = axios.create({
  baseURL: API_BASE,
});


// 🔁 Auto-refresh expired access token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refresh = localStorage.getItem("refresh");
      if (!refresh) {
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        // Use explicit base URL to avoid triggering the same interceptor
        // (don't use `api.post` here to prevent interceptor recursion)
        const res = await axios.post(`${API_BASE}token/refresh/`, {
          refresh,
        });
        localStorage.setItem("token", res.data.access);
        api.defaults.headers.common["Authorization"] = `Bearer ${res.data.access}`;
        originalRequest.headers["Authorization"] = `Bearer ${res.data.access}`;
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;