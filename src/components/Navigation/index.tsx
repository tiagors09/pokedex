import { useEffect } from "react";
import style, { buttonStyle, anchorStyle } from "./style"

interface Props {
  prev?: string | null
  next?: string | null
  handleClick: (offset: number) => void
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
        <div style={buttonStyle} onClick={
          () => {
            useEffect(() => {
              handleClick(
                getOffsetFromUrl(prev)!
              )
            })
          }
        }>

          Prev

        </div>
      }
      {
        next != null &&
        <div style={buttonStyle} onClick={
          () => {
            useEffect(() => {
              handleClick(
                getOffsetFromUrl(next)!
              )
            })
          }
        }>
          Next
        </div>
      }
    </div>
  )
}

export default Navigation
