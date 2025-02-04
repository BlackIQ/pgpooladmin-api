import { mongo } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  role: {
    type: mongooseSchema.Types.ObjectId,
    ref: "Role",
    default: null,
  },
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongo.model("User", schema);
