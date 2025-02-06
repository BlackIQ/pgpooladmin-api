import express from "express";

import Auth from "$app/routes/auth/auth.routes.js";

import Permission from "$app/routes/permission/permission.routes.js";
import Role from "$app/routes/role/role.routes.js";
import User from "$app/routes/user/user.routes.js";

import Monitor from "$app/routes/monitor/monitor.routes.js";
import Server from "$app/routes/server/server.routes.js";

import Ping from "$app/routes/ping/ping.routes.js";

const router = express.Router();

import { jwt } from "$app/middlewares/index.js";

router.use("/auth", Auth);

router.use("/permissions", jwt, Permission);
router.use("/roles", jwt, Role);
router.use("/users", jwt, User);

router.use("/monitors", jwt, Monitor);
router.use("/servers", jwt, Server);

router.use("/ping", Ping);

export default router;
