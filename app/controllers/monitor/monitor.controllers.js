import { Server } from "$app/models/index.js";

import pg from "pg";
const { Pool } = pg;

// REF: https://www.pgpool.net/docs/pgpool-II-3.6.0/doc/en/html/sql-commands.html

export const PGPOOL_SHOW = async (req, res) => {
  // REF: https://www.pgpool.net/docs/pgpool-II-3.6.0/doc/en/html/sql-pgpool-show.html

  const { id } = req.params;

  try {
    const server = await Server.findOne({ _id: id });

    if (!server) {
      return res.status(404).send({ message: "Server did not found" });
    }

    const postgres = new Pool({
      connectionString: server.connectionString,
    });

    const dbRes = await postgres.query("PGPOOL SHOW ALL");

    return res.status(200).send({ result: dbRes.rows });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const POOL_STATUS = async (req, res) => {
  // REF: https://www.pgpool.net/docs/pgpool-II-3.6.0/doc/en/html/sql-show-pool-status.html

  const { id } = req.params;

  try {
    const server = await Server.findOne({ _id: id });

    if (!server) {
      return res.status(404).send({ message: "Server did not found" });
    }

    const postgres = new Pool({
      connectionString: server.connectionString,
    });

    const dbRes = await postgres.query("SHOW POOL_STATUS");

    return res.status(200).send({ result: dbRes.rows });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const POOL_NODES = async (req, res) => {
  // REF: https://www.pgpool.net/docs/pgpool-II-3.6.0/doc/en/html/sql-show-pool-nodes.html

  const { id } = req.params;

  try {
    const server = await Server.findOne({ _id: id });

    if (!server) {
      return res.status(404).send({ message: "Server did not found" });
    }

    const postgres = new Pool({
      connectionString: server.connectionString,
    });

    const dbRes = await postgres.query("SHOW POOL_NODES");

    return res.status(200).send({ result: dbRes.rows });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const POOL_PROCESSES = async (req, res) => {
  // REF: https://www.pgpool.net/docs/pgpool-II-3.6.0/doc/en/html/sql-show-pool-processes.html

  const { id } = req.params;

  try {
    const server = await Server.findOne({ _id: id });

    if (!server) {
      return res.status(404).send({ message: "Server did not found" });
    }

    const postgres = new Pool({
      connectionString: server.connectionString,
    });

    const dbRes = await postgres.query("SHOW POOL_PROCESSES");

    return res.status(200).send({ result: dbRes.rows });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const POOL_POOLS = async (req, res) => {
  // REF: https://www.pgpool.net/docs/pgpool-II-3.6.0/doc/en/html/sql-show-pool-pools.html

  const { id } = req.params;

  try {
    const server = await Server.findOne({ _id: id });

    if (!server) {
      return res.status(404).send({ message: "Server did not found" });
    }

    const postgres = new Pool({
      connectionString: server.connectionString,
    });

    const dbRes = await postgres.query("SHOW POOL_POOLS");

    return res.status(200).send({ result: dbRes.rows });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const POOL_VERSION = async (req, res) => {
  // REF: https://www.pgpool.net/docs/pgpool-II-3.6.0/doc/en/html/sql-show-pool-version.html

  const { id } = req.params;

  try {
    const server = await Server.findOne({ _id: id });

    if (!server) {
      return res.status(404).send({ message: "Server did not found" });
    }

    const postgres = new Pool({
      connectionString: server.connectionString,
    });

    const dbRes = await postgres.query("SHOW POOL_VERSION");

    return res.status(200).send({ result: dbRes.rows });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const POOL_CACHE = async (req, res) => {
  // REF: https://www.pgpool.net/docs/pgpool-II-3.6.0/doc/en/html/sql-show-pool-cache.html

  const { id } = req.params;

  try {
    const server = await Server.findOne({ _id: id });

    if (!server) {
      return res.status(404).send({ message: "Server did not found" });
    }

    const postgres = new Pool({
      connectionString: server.connectionString,
    });

    const dbRes = await postgres.query("SHOW POOL_CACHE");

    return res.status(200).send({ result: dbRes.rows });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
