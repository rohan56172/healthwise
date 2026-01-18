import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7000/api", // Matches your backend PORT
  withCredentials: true, // IMPORTANT: Allows cookies to be sent/received
});

export default api;
