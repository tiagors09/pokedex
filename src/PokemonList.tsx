import type { Pokemon } from "./types"
import PokemonListItem from "./PokemonListtem"

function PokemonList({ pokemons }: any) {
  return (
    <>
      {
        <div>
          {
            pokemons
              .map(
                ({ id, name, url }: Pokemon) =>
                  <PokemonListItem id={id} name={name} url={url} />
              )
          }
        </div >
      }
    </>
  )
}

export default PokemonList
