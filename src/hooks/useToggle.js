import { useState } from 'react'

/**
 * @param { boolean } initialValue
 * @returns { [boolean, () => void, () => void] }
 */
export default function useToggle(initialValue = false) {
  const [toggle, setToggle] = useState(initialValue)

  const toggleState = () => setToggle((p) => !p)

  return [toggle, setToggle, toggleState]
}
