const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema(
  {
    bName: {
      type: String,
    },
    comments: {
      type: String,
    },
    dealStatus: {
      type: String,
    },
    link: {
      type: String,
    },
    number: {
      type: String,
    },
    salesRep: {
      type: String,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { collection: "contacts" }
);

module.exports = mongoose.model("Contact", schema);
