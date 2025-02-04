// ----------------------------------------------
// $app/connections
// index.js
// ----------------------------------------------
// Exporting all databse connections.
// Like configs, create them in directories and export them here.

import mongo from "$app/connections/mongo/mongo.connection.js";

export { mongo };
