import React from 'react'

import Counter from '@/components/Counter'
import HelloWorld from '@/components/HelloWorld'

export default function IndexPage() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <HelloWorld />
      <Counter />
    </main>
  )
}
