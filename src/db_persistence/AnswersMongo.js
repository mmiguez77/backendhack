const answerSchema = require("../models/answersSchema.js");

class AnswersMongo {
  constructor() {
    this.answersSchema = answerSchema;
  }

  async list() {
    return this.answersSchema.find({});
  }

  async insert(answers) {
    const newAnswer = {
      ...answers,
    };
    return this.answersSchema.create(newAnswer);
  }

  async listById(id) {
    return this.answersSchema.find({
      _id: id,
    });
  }

  async deleteById(id) {
    return this.answersSchema.deleteOne({
      _id: id,
    });
  }

  async updateById(id, data) {
    return this.answersSchema.updateOne(
      {
        _id: id,
      },
      {
        $set: data,
      }
    );
  }
}

module.exports = AnswersMongo;