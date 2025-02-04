import { mongo } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  alias: {
    type: String,
    default: "",
  },
  host: {
    type: String,
    default: "",
  },
  port: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  database: {
    type: String,
    default: "",
  },
  connectionString: {
    type: String,
    default: "",
  },
  owner: {
    type: mongooseSchema.Types.ObjectId,
    ref: "User",
    default: null,
  },
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongo.model("Server", schema);
