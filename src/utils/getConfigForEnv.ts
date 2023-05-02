import { Env } from "@stencil/core"
export { getEnvConfig }

interface EnvConfig {
  appPath: string
}

const configForEnv: Record<string, EnvConfig> = {
  prod: {
    appPath: "/youtube-frontend"
  },
  dev: {
    appPath: ""
  }
}

function getEnvConfig() {
  return configForEnv[Env.apiEnv]
}
