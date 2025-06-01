import { useEffect, useState } from "react";
import type { Pokemon } from './types';
import PokemonList from "./components/PokemonList";

const style: React.CSSProperties = {
  width: '100%',
  height: '100%'
}

const titleStyle: React.CSSProperties = {
  fontWeight: '200',
  fontStyle: 'normal',
  textAlign: 'center',
  backgroundColor: 'rgb(172, 51, 51)',
  color: 'rgb(242, 244, 247)',
  fontSize: 'xx-large',
  padding: '20px',
  margin: '0',
}

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
    <div style={style}>
      <h1 style={titleStyle}>Pokedex</h1>
      {
        pokemons ?
          <PokemonList pokemons={pokemons} /> :
          <div>vazio</div>
      }
    </div>
  )
}

export default App
