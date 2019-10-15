import getConfig from 'next/config'

export interface NextConfig {
  SERVER_API: string
  GRAPHQL_ENDPOINT: string
}

const nextConfigs = getConfig()
export const config: NextConfig = nextConfigs.publicRuntimeConfig
