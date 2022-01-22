import React from 'react'
import { useQuery } from '@apollo/client'

import useToggle from '@/hooks/useToggle'
import { ALL_STAGES } from '@/services/graphql/queries'

import Logo from '@/assets/logo.svg'
import { MenuIcon } from '@heroicons/react/outline'

export default function Header() {
  const { data } = useQuery(ALL_STAGES)
  const [menu, , toggleMenu] = useToggle(false)

  return (
    <>
      <header className="sticky top-0 z-10 bg-neutral-900">
        <div className="mx-auto w-[90%] max-w-screen-xl flex items-center justify-between">
          <div className="py-3 flex items-center gap-4">
            <button onClick={toggleMenu} className="lg:hidden">
              <MenuIcon className="w-8 h-8 text-white" />
            </button>
            <img className="w-12 h-12" src={Logo} alt="ACME" />
          </div>

          {/* Displayed on large size only */}
          <div className="hidden lg:flex items-center gap-4 text-gray-400 font-semibold tracking-tight">
            {data?.allStages?.map((stage) => (
              <span key={stage.id}>{stage.name}</span>
            ))}
            <span>Schedule</span>
            <span className="py-6 border-b-2 border-purple-600 text-white">
              Speakers
            </span>
            <span>Expo</span>
            <span>Jobs</span>
          </div>
        </div>
      </header>
      {menu && (
        <div className="fixed top-0 left-0 z-0 w-full h-screen flex flex-col items-center justify-center gap-4 text-4xl font-extrabold tracking-tighter bg-black text-white">
          {data?.allStages?.map((stage) => (
            <span key={stage.id}>{stage.name}</span>
          ))}
          <span>Schedule</span>
          <span>Speakers</span>
          <span>Expo</span>
          <span>Jobs</span>
        </div>
      )}
    </>
  )
}
