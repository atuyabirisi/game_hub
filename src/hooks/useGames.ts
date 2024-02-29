import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { gamesSet } from "../features/gameSlice";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
}

export interface FetchGamesResponse {
  count: number;
  results: Game[]
}

const useGames = () => {
  const [error, setError] = useState();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then(res => dispatch(gamesSet(res.data)))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
      });

      return () => controller.abort();
  },[]);

  return { error }
}

export default useGames;
