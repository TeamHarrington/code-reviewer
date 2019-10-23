export type Environment = 'development' | 'production'

export interface NextConfig {
  SERVER_DOMAIN: string
  GRAPHQL_ENDPOINT: string
  ENV: Environment
}

const config: Readonly<NextConfig> = Object.freeze({
  SERVER_DOMAIN: process.env.SERVER_DOMAIN as string,
  GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT as string,
  ENV: process.env.ENV as Environment
})

export default config
