import axios from "axios";

const BaseUrl = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

const getTrendingVideos = axios.get(`${BaseUrl}/trending/all/day?api_key=${API_KEY}`);

export default { 
  getTrendingVideos 
};
