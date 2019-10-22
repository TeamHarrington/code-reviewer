import {
  Query as GraphQLQuery,
  QueryComponentOptions
} from '@apollo/react-components'
import { OperationVariables, QueryResult } from '@apollo/react-common'
import { ApolloError } from 'apollo-boost'

export interface QueryProps<D = any, V = OperationVariables>
  extends Omit<QueryComponentOptions<D, V>, 'children'> {
  loading?: JSX.Element
  children: (data: D) => JSX.Element
  error?: (err: ApolloError) => JSX.Element
}

function Query<D = any, V = OperationVariables>({
  loading: loadingElement,
  children: childrenElement,
  error: errorElement,
  ...props
}: QueryProps<D, V>) {
  const children: (result: QueryResult<D, V>) => JSX.Element = ({
    data,
    loading,
    error
  }) => {
    if (loading) {
      return loadingElement || <div>Loading...</div>
    } else if (error) {
      return errorElement ? errorElement(error) : <div>Error</div>
    } else if (data) {
      return childrenElement(data)
    }
    return <div>Error</div>
  }
  const grapqlProps: QueryComponentOptions<D, V> = {
    children,
    ...props
  }
  return GraphQLQuery(grapqlProps)
}

export default Query
