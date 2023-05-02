import { Config } from "@stencil/core"
import { sass } from "@stencil/sass"

const dev: boolean = process.argv && process.argv.indexOf("--dev") > -1
const apiEnv: string = dev ? "dev" : "prod"

export const config: Config = {
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  taskQueue: "async",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: "https://myapp.local/"
    }
  ],
  env: {
    apiEnv
  },
  plugins: [sass()]
}
