import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"
import { setGenres } from "../features/genreSlice";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";

export interface Genre {
    id: number;
    name: string;
}

export interface FetchGenreResponse {
    count: number;
    results: Genre[];
}

const useGenre = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        apiClient
                .get<FetchGenreResponse>('/genres', { signal: controller.signal})
                .then(res => {
                    setGenres(dispatch(setGenres(res.data)));
                    setIsLoading(false);
                })
                .catch(err => {
                    if(err instanceof CanceledError) return;
                    setError(err.message);
                    setIsLoading(false);
                })
        
        return () => controller.abort();
    }, []);

    return { isLoading, error }
}

export default useGenre;