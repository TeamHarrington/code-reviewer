import { FunctionComponent } from 'react'
import { Query } from '../components/apollo/query'
import { TestQuery } from '@code-reviewer/client/graphql/types'
import { testQuery } from '@code-reviewer/client/graphql/queries/testQuery'

const HomePage: FunctionComponent = () => {
  return (
    <Query<TestQuery> query={testQuery}>
      {data => {
        return <div>{data.testQuery}</div>
      }}
    </Query>
  )
}

export default HomePage
