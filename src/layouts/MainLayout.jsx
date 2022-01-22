import React from 'react'

import Header from '@/components/ui/Header'

export default function MainLayout({ children }) {
  return (
    <main className="bg-black">
      <Header />
      <div className="mx-auto max-w-screen-xl">{children}</div>
    </main>
  )
}
