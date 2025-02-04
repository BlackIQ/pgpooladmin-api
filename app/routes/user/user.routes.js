import express from "express";

import { User } from "$app/controllers/index.js";

const router = express.Router();

router.get("/", User.ALL);
router.get("/:id", User.SINGLE);
router.delete("/:id", User.DELETE);
router.patch("/:id", User.UPDATE);
router.patch("/password/:id", User.CHANGE_PASSWORD);

export default router;
