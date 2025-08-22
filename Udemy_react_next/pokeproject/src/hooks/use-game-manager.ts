import { useEffect, useState } from "react"
import type { Pokemon } from "../types/pokemon.interface";
import { pokemonService } from "../services/pokemon.service";

export const useGameManager = () => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [isLoading, setIsLoading] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchRandomPokemon = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const randomPokemon = await pokemonService.getRandomPokemon();
            setPokemon(randomPokemon);
        } catch (error) {
            setError(error instanceof Error ? error.message : "An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomPokemon();
    }, [])

    return {
        pokemon,
        isLoading,
        error,
    };
};