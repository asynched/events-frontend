import { gql } from '@apollo/client'

export const ALL_SPEAKERS = gql`
  query {
    allSpeakers {
      id
      name
      title
      company
      imageUrl
    }
  }
`

export const ALL_STAGES = gql`
  query {
    allStages {
      id
      name
    }
  }
`
