import React from 'react'

import GraphQLProvider from '@/services/graphql/GraphQLProvider'
import Router from '@/routes'

export default function App() {
  return (
    <GraphQLProvider>
      <Router />
    </GraphQLProvider>
  )
}
