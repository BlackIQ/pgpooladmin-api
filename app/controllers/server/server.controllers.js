import { Server, User } from "$app/models/index.js";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    const server = await Server.create(data);

    return res.status(200).send({ message: "Server created", server });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const server = await Server.findOne({ _id: id });

    if (!server) {
      return res.status(404).send({ message: "Server did not found" });
    }

    return res.status(200).send({ message: "Server found", server });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  try {
    const servers = await Server.find().populate({
      path: "owner",
      model: User,
    });

    return res.status(200).send({ message: "Data fetched", servers });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const server = await Server.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );

    if (!server) {
      return res.status(404).send({ message: "Server did not found" });
    }

    return res.status(200).send({ message: "Server updated", server });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const server = await Server.findOneAndDelete({ _id: id });

    if (!server) {
      return res.status(404).send({ message: "Server did not found" });
    }

    return res.status(200).send({ message: "Server deleted" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
