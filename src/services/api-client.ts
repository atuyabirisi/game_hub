import axios from "axios";

const rawg_api_key = import.meta.env.VITE_RAWG_API_KEY;

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: rawg_api_key,
  },
});
