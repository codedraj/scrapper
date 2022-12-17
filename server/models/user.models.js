const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    numberOfProspects: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", schema);
