import React from 'react'

import useCounter from '@/hooks/useCounter'

export default function Counter() {
  const [counter, increment, decrement] = useCounter(0)

  return (
    <div className="flex gap-2">
      <input
        className="px-4 h-10 border rounded text-center"
        type="text"
        disabled
        value={counter}
      />
      <button
        type="button"
        className="w-10 h-10 border rounded transition hover:bg-gray-100"
        onClick={decrement}
      >
        -
      </button>
      <button
        type="button"
        className="w-10 h-10 border rounded transition hover:bg-gray-100"
        onClick={increment}
      >
        +
      </button>
    </div>
  )
}
