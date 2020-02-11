let API_ROOT = "/api";
if (process.env.NODE_ENV !== "production") {
  API_ROOT = "http://localhost:8080/api";
}

export default API_ROOT;
