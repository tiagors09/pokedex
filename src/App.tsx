import { useEffect, useState } from "react";
import type { Pokemon } from './types';
import PokemonList from "./PokemonList";

async function fetchPokemons(offset: number = 0, limit: number = 20) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    )

    if (response.status >= 200 && response.status <= 208 && response.ok) {
      const data = await response.json()

      const pokemons = data.results.map((
        raw: any, index: number) => ({
          ...raw,
          id: offset + index + 1
        })
      )

      return pokemons
    } else {
      throw new Error('Erro ao obter os Pokémons');
    }
  } catch (error) {
    console.log(error)
  }
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(
    () => {
      fetchPokemons()
        .then(
          data => setPokemons(
            previusData => previusData = data
          )
        )
        .catch(
          _ => setPokemons(
            previusData => previusData = []
          )
        )
    }, []
  );

  return (
    <>
      {
        pokemons ?
          <PokemonList pokemons={pokemons} /> :
          <div>vazio</div>
      }
    </>
  )
}

export default App
