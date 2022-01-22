import React from 'react'

import Header from '@/components/ui/Header'

export default function MainLayout({ children }) {
  return (
    <main className="bg-black w-full min-h-screen">
      <Header />
      <div className="text-gray-400 mx-auto w-[90%] max-w-screen-xl">
        {children}
      </div>
    </main>
  )
}
