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

const Query: <D = any, V = OperationVariables>(
  props: QueryProps<D, V>
) => JSX.Element | null = <D, V>({
  loading: loadingElement,
  children: childrenElement,
  error: errorElement,
  ...props
}) => {
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
  const graphqlProps: QueryComponentOptions<D, V> = {
    children,
    ...props
  }
  return GraphQLQuery(graphqlProps)
}

export default Query
