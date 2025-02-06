// ----------------------------------------------
// ping.controllers.js
// ----------------------------------------------
// PING controllers are located here.
// Just for healthcheck.

export const PING = async (req, res) => res.status(200).send({ message: "Ok" });
