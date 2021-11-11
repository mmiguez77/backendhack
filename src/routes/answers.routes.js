const { Router } = require("express");
const {
    getDataController,
    getDataByIdController,
    postDataController,
    putDataController,
    deleteDataController
} = require("../controllers/AnswersController.js");

const answersRoutes = new Router();

answersRoutes.get("/", getDataController);
answersRoutes.get("/:id", getDataByIdController);
answersRoutes.post("/register", postDataController);
answersRoutes.put("/edit/:id", putDataController);
answersRoutes.delete("/:id", deleteDataController);

module.exports = answersRoutes;