const { Schema, model } = require("mongoose");

const RTISchema = Schema({
  user_name: { type: String },
  ministry: { type: String, required: true },
  public_authority: { type: String, requried: true },
  text: { type: String, required: true },
  filing_id: { type: String },
  answer_id: { type: String },
  answer: { type: String },
  answer_date: { type: Date },
});

const RTIModel = model("RTI", RTISchema);
module.exports = RTIModel;
