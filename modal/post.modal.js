const mongoose = require("mongoose");
const moment = require("moment");
const jobSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    postedAt: {
      type: String,
      default:
        moment().format("YYYY-MM-DD"),
    },
    city: { type: String, required: true },
    location: { type: String, required: true },
    role: { type: String, required: true },
    level: { type: String, required: true },
    contract: { type: String, required: true },
    position: { type: String, required: true },
    language: { type: String, required: true },
  },
  // { timestamps: true }
);

const Job = mongoose.model("job", jobSchema);
module.exports = Job;
