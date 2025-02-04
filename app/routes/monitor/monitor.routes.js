import express from "express";

import { Monitor } from "$app/controllers/index.js";

const router = express.Router();

router.get("/pgpool/show/:id", Monitor.PGPOOL_SHOW);
router.get("/pool/status/:id", Monitor.POOL_STATUS);
router.get("/pool/nodes/:id", Monitor.POOL_NODES);
router.get("/pool/processes/:id", Monitor.POOL_PROCESSES);
router.get("/pool/pools/:id", Monitor.POOL_POOLS);
router.get("/pool/version/:id", Monitor.POOL_VERSION);
router.get("/pool/cache/:id", Monitor.POOL_CACHE);

export default router;
