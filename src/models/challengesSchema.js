const mongoose = require("mongoose");
const Schema = mongoose.Schema

const challengesSchema = new Schema({
    challenge: { type: String, require: true },
    entrepreneurshipId: { type: String, require: true },
    cathegory: { type: String, require: true },    
    entrepreneurship: { type: String},
    description: { type: String },
    logo : { type: String },
    assistence: { type: String }
},
{
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model("challenges", challengesSchema);