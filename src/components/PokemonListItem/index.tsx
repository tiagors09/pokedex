import type { Pokemon } from "../../types";
import style, { imgStyle, figCaptionStyle, anchorStyle } from "./style";

export default function PokemonListItem(
  {
    id,
    name,
    url
  }: Pokemon
) {
  return (
    <a style={anchorStyle} href={url}>
      <div key={crypto.randomUUID()}>
        <figure style={style}>
          <img
            style={imgStyle}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
          />
          <figcaption style={figCaptionStyle}>{name}</figcaption>
        </figure>
      </div >
    </a >
  )
}
