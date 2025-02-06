// ----------------------------------------------
// $app/routes/ping
// ping.routes.js
// ----------------------------------------------
// PING Routes.
// All routes of healthcheck.

import express from "express";

import { Ping } from "$app/controllers/index.js";

const router = express.Router();

router.get("/", Ping.PING);

export default router;
