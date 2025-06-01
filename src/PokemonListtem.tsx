import type { Pokemon } from "./types";

export default function PokemonListItem(
  {
    id,
    name,
    url
  }: Pokemon
) {
  return (
    <a href={url}>
      <div key={crypto.randomUUID()}>
        <figure>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
          />
          <figcaption>{name}</figcaption>
        </figure>
      </div >
    </a >
  )
}
