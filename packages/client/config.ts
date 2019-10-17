import getConfig from 'next/config'
export interface NextConfig {
  SERVER_DOMAIN: string
  GRAPHQL_ENDPOINT: string
  ENV: 'development' | 'production'
}

const nextConfigs = getConfig()
const config: Readonly<NextConfig> = Object.freeze({
  ...nextConfigs.publicRuntimeConfig
})

export default config
