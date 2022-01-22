import React from 'react'
import { useQuery } from '@apollo/client'

import { ALL_STAGES } from '@/services/graphql/queries'

import Logo from '@/assets/logo.svg'

export default function Header() {
  const { data } = useQuery(ALL_STAGES)

  return (
    <header className="bg-zinc-900">
      <div className="mx-auto max-w-screen-xl flex items-center justify-between">
        <img className="w-12 h-12" src={Logo} alt="ACME" />
        <div className="py-6 flex items-center gap-4 text-white font-semibold tracking-tight">
          {data?.allStages?.map((stage) => (
            <span key={stage.id}>{stage.name}</span>
          ))}
          <span>Schedule</span>
          <span>Speakers</span>
          <span>Expo</span>
          <span>Jobs</span>
        </div>
      </div>
    </header>
  )
}
