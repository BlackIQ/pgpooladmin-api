import express from "express";

import { Server } from "$app/controllers/index.js";

const router = express.Router();

router.get("/", Server.ALL);
router.post("/", Server.CREATE);
router.get("/:id", Server.SINGLE);
router.delete("/:id", Server.DELETE);
router.patch("/:id", Server.UPDATE);

export default router;
