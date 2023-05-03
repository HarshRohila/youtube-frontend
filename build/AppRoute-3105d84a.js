import { E as Env } from './index-3b293f20.js';

const configForEnv = {
  prod: {
    appPath: "/youtube-frontend"
  },
  dev: {
    appPath: ""
  }
};
function getEnvConfig() {
  return configForEnv[Env.apiEnv];
}

const AppRoute = {
  getPath(path) {
    const { appPath } = getEnvConfig();
    if (!path)
      path = "/";
    return appPath + path;
  }
};

export { AppRoute as A };
