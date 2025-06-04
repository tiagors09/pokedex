import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Pokemon } from "../../types";

interface APIResponse {
  pokemons: Pokemon[];
  next?: string | null;
  prev?: string | null;
}

interface PokemonContextType extends APIResponse {
  loadData: (offset?: number) => void;
}

export const PokemonContext = createContext<PokemonContextType>({
  pokemons: [],
  next: null,
  prev: null,
  loadData: () => { },
});

async function fetchPokemons(offset: number = 0): Promise<APIResponse> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
    );

    if (!response.ok) {
      throw new Error("Erro ao obter os Pokémons")
    }

    const data = await response.json()

    const pokemons: Pokemon[] = data.results.map(
      (raw: any, index: number): Pokemon => ({
        ...raw,
        id: offset + index + 1,
      })
    )

    return {
      pokemons,
      next: data.next,
      prev: data.previous,
    }
  } catch (error) {
    console.error("Erro ao buscar Pokémons:", error);
    return {
      pokemons: [],
      next: null,
      prev: null,
    };
  }
}

interface ProviderProps {
  children: ReactNode;
}

export default function PokemonContextProvider({ children }: ProviderProps) {
  const [data, setData] = useState<APIResponse>({
    pokemons: [],
    next: null,
    prev: null,
  });

  const loadData = useCallback((offset: number = 0) => {
    fetchPokemons(offset).then(setData);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <PokemonContext.Provider value={{ ...data, loadData }}>
      {children}
    </PokemonContext.Provider>
  );
}
