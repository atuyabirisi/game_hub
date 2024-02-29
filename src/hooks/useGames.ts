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
  metacritic: number;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[]
}

const useGames = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then(res => {
        dispatch(gamesSet(res.data));
        setIsLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

      return () => controller.abort();
  },[]);

  return { error, isLoading }
}

export default useGames;
