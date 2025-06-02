import { useEffect } from "react";
import style, { buttonStyle } from "./style"

interface Props {
  prev?: string | null
  next?: string | null
  handleClick: Function
}

function getOffsetFromUrl(url?: string): number | null {
  if (!url) return null;
  const match = url.match(/offset=(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

function Navigation({ prev, next, handleClick }: Props) {
  return (
    <div style={style}>
      {
        prev != null &&
        <button style={buttonStyle} onClick={
          () => handleClick(getOffsetFromUrl(prev))
        }>

          Prev

        </button>
      }
      {
        next != null &&
        <button style={buttonStyle} onClick={
          () => handleClick(getOffsetFromUrl(next))
        }>
          Next
        </button>
      }
    </div >
  )
}

export default Navigation
