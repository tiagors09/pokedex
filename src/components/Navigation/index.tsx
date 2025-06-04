import { useContext } from "react";
import style, { buttonStyle } from "./style"
import { PokemonContext } from "../PokemonContextProvider";

function getOffsetFromUrl(url?: string): number | null {
  if (!url) return null;
  const match = url.match(/offset=(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

function Navigation(_: any) {
  const { next, prev, loadData } = useContext(PokemonContext)

  return (
    <div style={style}>
      {
        prev != null &&
        <button style={buttonStyle} onClick={
          () => loadData(getOffsetFromUrl(prev)!)
        }>

          Prev

        </button>
      }
      {
        next != null &&
        <button style={buttonStyle} onClick={
          () => loadData(getOffsetFromUrl(next)!)
        }>
          Next
        </button>
      }
    </div >
  )
}

export default Navigation
