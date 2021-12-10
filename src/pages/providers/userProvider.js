import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:21262/api",
});

export function login(email, password){
    return api.post("/user/login", {email, password})    
}

export function register(body){
    return api.post("/user/register", body)    
}

export function update(body){
    return api.put("/user/update", body)    
}
