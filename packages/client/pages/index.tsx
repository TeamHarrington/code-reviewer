import { FunctionComponent } from 'react'
import { Query } from '@apollo/react-components'
import { TestQuery } from '@code-reviewer/client/graphql/types'
import { testQuery } from '@code-reviewer/client/graphql/queries/testQuery'

const HomePage: FunctionComponent = () => {
  return (
    <Query<TestQuery> query={testQuery}>
      {({ loading, error, data }) => {
        // console.log({ loading, error, data })
        if (loading) {
          return <div>Loading...</div>
        } else if (error) {
          return <div>Error loading data.</div>
        } else if (data) {
          return <div>{data.testQuery}</div>
        } else {
          return <div>error</div>
        }
      }}
    </Query>
  )
}

export default HomePage
