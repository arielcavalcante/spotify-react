import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:21262/api",
});

export function addMusicPlaylist(playlist_id, music_id){
    return api.put(`/playlists/${playlist_id}/music/${music_id}/add`)    
}

export function addMusicNewPlaylist(user_id, music_id){
    return api.post(`/playlists/music/${music_id}/add`, {user: user_id})    
}

export function removeMusicFromPlaylist(playlist_id, music_id){
    return api.put(`/playlists/${playlist_id}/music/${music_id}/remove`)    
}

export function fetchPlaylistById(playlist_id){
    return api.get(`/playlists/${playlist_id}`)    
}

export function fetchAllPlaylists(){
    return api.get(`/playlists`)    
}

export function fetchPlaylistsByUser(user_id){
    return api.get(`/playlists?user=${user_id}`)    
}

export function fetchMusics(){
    return api.get("/musics")
}