const mongoose = require("mongoose");
const { Schema } = mongoose;
const Basic_DataSchema = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    auto: true,
  },
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
});

const Basic_DataModel = mongoose.model("Basic_Data", Basic_DataSchema);

module.exports = Basic_DataModel;
