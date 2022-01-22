import React from 'react'
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'

const link = from([
  new HttpLink({
    uri: 'http://localhost:8000/graphql',
  }),
])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

export default function GraphQLProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
