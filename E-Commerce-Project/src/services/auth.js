import { api } from "./api";

export const fetchRoles = () => api.get("/roles");      
export const signup = (payload) => api.post("/signup", payload); 