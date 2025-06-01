import type { Pokemon } from "../../types"
import PokemonListItem from "../PokemonListItem"
import style from "./style"

function PokemonList({ pokemons }: any) {
  return (
    <>
      {
        <div style={style}>
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
