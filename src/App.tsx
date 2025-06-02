import { useEffect, useState } from "react";
import type { Pokemon } from './types';
import PokemonList from "./components/PokemonList";
import Navigation from "./components/Navigation";

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

interface Response {
  pokemons: Pokemon[]
  next?: string | null | undefined
  prev?: string | null | undefined
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

      return { pokemons: pokemons, next: data.next, prev: data?.prev }
    } else {
      throw new Error('Erro ao obter os Pokémons');
    }
  } catch (error) {
    console.log(error)
  }
}

function App() {
  const [response, setResponse] = useState<Response>({
    pokemons: [],
    next: null,
    prev: null
  })

  function loadData(offset?: number) {
    fetchPokemons(offset)
      .then(
        data => setResponse(
          _ => data!
        )
      )
      .catch(
        error => console.log(error)
      )
  }

  useEffect(
    () => loadData(),
    []
  );

  return (
    <div style={style}>
      <h1 style={titleStyle}>Pokedex</h1>
      {
        response.pokemons ?
          <PokemonList pokemons={response.pokemons} /> :
          <div>vazio</div>
      }
      <Navigation next={response.next} prev={response.prev} handleClick={loadData} />
    </div>
  )
}

export default App
