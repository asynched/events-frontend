import React, { useMemo } from 'react'

import { getUser } from '@/services/http/user'

import Async from '@/components/Async'
import Loading from '@/components/Loading'

export default function HelloWorld() {
  const userPromise = useMemo(() => getUser('asynched'), [])

  return (
    <div className="mb-8 text-center">
      <h1 className="mb-2 text-4xl font-bold tracking-tighter">
        Hello, world!
      </h1>
      <h2 className="mb-4 text-lg font-bold tracking-tighter">
        This is a sample React template. Try it out!
      </h2>
      <p>If you feel like you like it, follow me on Github!</p>
      <Async
        promise={userPromise}
        fallback={<Loading />}
        resolve={(user) => (
          <p>
            <a
              href="https://github.com/asynched"
              target="_blank"
              rel="noreferrer"
              className="text-purple-600 hover:underline"
            >
              @asynched
            </a>{' '}
            - {user.followers} followers
          </p>
        )}
      />
    </div>
  )
}
