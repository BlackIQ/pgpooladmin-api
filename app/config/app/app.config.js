// ----------------------------------------------
// $app/config/app
// app.config.js
// ----------------------------------------------
// Application configurations.
// Here we export application data, like environment, is it published, port and stuff.

import env from "$app/env/index.js";

import fs from "fs/promises";

const readPackageJson = async () => {
  const data = await fs.readFile(
    new URL("../../../package.json", import.meta.url),
    "utf8"
  );

  return JSON.parse(data);
};

const packageJson = await readPackageJson();

export default {
  environment: env.APP_ENVIRONMENT,
  port: env.APP_PORT,
  secret: env.APP_SECRET,
  key: env.APP_KEY,
  version: packageJson.version,
  published: env.APP_ENVIRONMENT === "production" ? true : false,
};
