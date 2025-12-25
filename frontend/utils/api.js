import axios from "axios";

// prefer runtime override set on window (helps dev when Next compiled a different env)
const compileTimeBase = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/").replace(/(?<!:)\/$/, "") + "/";
const runtimeBase = typeof window !== "undefined" && window.__K11_API_BASE ? String(window.__K11_API_BASE).replace(/(?<!:)\/$/, "") + "/" : null;
const API_BASE = runtimeBase || compileTimeBase;

const api = axios.create({
  baseURL: API_BASE,
});

// expose runtime base for debugging in browser console
if (typeof window !== "undefined") {
  try {
    // only set window var if not already present so dev can override it manually
    if (!window.__K11_API_BASE) window.__K11_API_BASE = compileTimeBase;
    console.debug("K11 API_BASE (runtime):", window.__K11_API_BASE, "(effective)", API_BASE);
  } catch (e) {
    /* ignore */
  }
}


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