import React from 'react'
import { useQuery } from '@apollo/client'

import { ALL_SPEAKERS } from '@/services/graphql/queries'
import SpeakerCard from '@/components/common/SpeakerCard'
import MainLayout from '@/layouts/MainLayout'

export default function IndexPage() {
  const { data, loading } = useQuery(ALL_SPEAKERS)

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <MainLayout>
      <div className="my-16">
        <h1 className="mb-4 title text-white">Speakers</h1>
        <p className="text-gray-400">
          This is an open source demo that Next.js developers can clone, deploy,
          and fully customize for events. Created through collaboration of
          marketers, designers, and developers at Vercel.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-8">
        {data.allSpeakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </MainLayout>
  )
}
