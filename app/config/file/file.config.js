// ----------------------------------------------
// $app/config/file
// file.config.js
// ----------------------------------------------
// File configs for file middleware.
// There is a middleware to log all requests in a file.
// Here is required configs. Like path and name of the file.

import env from "$app/env/index.js";

export default {
  filePath: env.FILE_PATH,
  fileName: env.FILE_NAME,
};
