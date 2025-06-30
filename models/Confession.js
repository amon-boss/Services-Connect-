
import mongoose from "mongoose";

const confessionSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Confession = mongoose.model("Confession", confessionSchema);
export default Confession;
