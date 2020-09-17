const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  createdCompliments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Compliment",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
