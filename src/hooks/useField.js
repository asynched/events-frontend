import { useState } from 'react'

/**
 *
 * @param { string } initialValue
 * @returns { [string, { value: string, onChange: (e) => void }, (value: string) => void] }
 */
export default function useField(initialValue) {
  const [field, setField] = useState(initialValue)

  const subscriber = {
    value: field,
    onChange: (e) => setField(e.target.value),
  }

  return [field, subscriber, setField]
}
