import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export function fetchPlaylists(){
    return api.get("/playlists")    
}
export function fetchRecentlyPlayed(){
    return api.get("/recentlyplayed")
}
export function fetchPodcasts(){
    return api.get("/podcasts") 
}
export function fetchDailyMixes(){
    return api.get("/dailymixes")
}