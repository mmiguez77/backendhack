const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const GoogleSchema = new Schema(
{
    googleId: {type: String },
    username: {type: String}
},
{
    timestamps: true,
    versionKey: false,
}
)

GoogleSchema.plugin(findOrCreate);

const GoogleModel = new mongoose.model("GoogleModel", GoogleSchema)
module.exports = GoogleModel;