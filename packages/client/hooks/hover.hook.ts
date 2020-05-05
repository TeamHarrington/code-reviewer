import { useState } from 'react'

/**
 * Hook for getting the result of a promise.
 * @returns [hover, hoverProps] [true iff element is hovered, props to send in to element]
 */
export const useOnHover = () => {
  const [hover, setHover] = useState(false)
  const hoverProps = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }
  return [hover, hoverProps]
}
