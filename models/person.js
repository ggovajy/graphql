const mongoose = require("mongoose");
const { Schema } = mongoose;
const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  friendIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "accounts",
    },
  ],
});

module.exports = mongoose.model("accounts", personSchema);
