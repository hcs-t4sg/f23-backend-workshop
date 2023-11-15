const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["DOT", "DOE", "DUX", "PM", "SSWE", "SWE", "SD"],
      required: true,
    },
    team: {
      type: mongoose.Types.ObjectId,
      ref: "teams",
    },
    year: {
      type: Number,
    },
    bio: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Member = mongoose.model("members", MemberSchema);

module.exports = { Member };
