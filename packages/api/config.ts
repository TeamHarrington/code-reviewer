// @ts-ignore
import env from '../../env'

export interface APIConfig {
  API: {
    DOMAIN: string
    PORT: number
    GRAPHQL_ENDPOINT: string
  }
  MONGO_SERVER: string
  ENV: 'development' | 'production'
}
const config: Readonly<APIConfig> = Object.freeze({
  API: {
    DOMAIN: env.DOMAIN,
    PORT: env.PORT,
    GRAPHQL_ENDPOINT: env.GRAPHQL_ENDPOINT
  },
  MONGO_SERVER: env.MONGO_SERVER,
  ENV: env.ENV
})

export default config
