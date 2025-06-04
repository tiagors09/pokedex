import { useContext } from "react"
import type { Pokemon } from "../../types"
import PokemonListItem from "../PokemonListItem"
import style from "./style"
import { PokemonContext } from "../PokemonContextProvider"

function PokemonList(_: any) {
  const { pokemons } = useContext(PokemonContext)

  return (
    <>
      {
        <div style={style}>
          {
            pokemons
              .map(
                ({ id, name, url }: Pokemon) =>
                  <PokemonListItem key={crypto.randomUUID()} id={id} name={name} url={url} />
              )
          }
        </div >
      }
    </>
  )
}

export default PokemonList
