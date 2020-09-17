const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Our Mongo Schema
const complimentSchema = new Schema({
  compliment: {
    type: String,
    required: true,
  },


  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Compliment", complimentSchema);
