import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Loading from '@/components/Loading'

const IndexPage = React.lazy(() => import('@/pages/IndexPage'))
const SpeakersPage = React.lazy(() => import('@/pages/SpeakersPage'))

export default function Router() {
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}
