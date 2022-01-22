import React from 'react'

export default function SpeakerCard({ speaker }) {
  return (
    <div
      className="flex flex-col border border-gray-700 rounded-lg overflow-hidden hover:border-purple-600"
      key={speaker.id}
    >
      <img
        className="w-full h-64 object-cover"
        src={speaker.imageUrl}
        alt={speaker.name}
      />
      <div className="flex-1 bg-zinc-900 p-4 text-gray-400">
        <h2 className="text-2xl text-white font-bold tracking-tighter">
          {speaker.name}
        </h2>
        <p>
          {speaker.title} @{' '}
          <span className="text-white">{speaker.company}</span>
        </p>
      </div>
    </div>
  )
}
