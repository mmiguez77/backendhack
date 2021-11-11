const mongoose = require("mongoose");
const Schema = mongoose.Schema

const answersSchema = new Schema({
    pregunta1: { type: String, require: true },
    pregunta2: { type: String, require: true },
    pregunta3: { type: String, require: true },
    pregunta4: { type: String, require: true },
    pregunta5: { type: String, require: true },
    pregunta6: { type: String, require: true },
    pregunta7: { type: String, require: true },
    pregunta8: { type: String, require: true },
    idUser: { type: String, require: true },
    idChallenge: { type: String, require: true }
},
{
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model("answers", answersSchema);