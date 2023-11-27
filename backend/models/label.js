// import mongoose from 'mongoose';
const mongoose = require("mongoose");

const labelSchema = mongoose.Schema(
  {
    labelIds: [{ type: mongoose.Types.ObjectId }],
    labels: { type: Object },
    projectId: { type: mongoose.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

// export default mongoose.model("Label", labelSchema);
module.exports = mongoose.model("Label", labelSchema);
