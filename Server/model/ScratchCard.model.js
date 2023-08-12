const { Schema, model } = require("mongoose");

const ScratchCardSchema = Schema({
  is_used: { type: Boolean, default: false },
  used_date: { type: Date },
});

const ScratchCardModel = model("ScratchCard", ScratchCardSchema);
module.exports = ScratchCardModel;
