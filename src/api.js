import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "127c866ecb9630df124cbd4e2522af1c",
    language: "ko-kr",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  topRated: () => api.get("movie/top_rated"),
  latest: () => api.get("movie/latest"),
  upComming: () => api.get("movie/upcoming"),
};
