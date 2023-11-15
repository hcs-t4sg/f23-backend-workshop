const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    semester: {
      type: String,
      required: true,
      enum: ["Fall", "Spring"],
    },
    client: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("teams", TeamSchema);

module.exports = { Team };
