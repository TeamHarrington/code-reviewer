// @ts-ignore
import env from '../../env'

export interface APIConfig {
  API: {
    DOMAIN: string
    PORT: number
    GRAPHQL_ENDPOINT: string
  }
  ENV: 'development' | 'production'
}
const config: Readonly<APIConfig> = Object.freeze({
  API: {
    DOMAIN: env.DOMAIN,
    PORT: 4000,
    GRAPHQL_ENDPOINT: env.GRAPHQL_ENDPOINT
  },
  ENV: env.ENV
})

export default config
