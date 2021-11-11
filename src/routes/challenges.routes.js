const { Router } = require("express");
const {
    getDataController,
    getDataByIdController,
    postDataController,
    putDataController,
    deleteDataController
} = require("../controllers/ChallengesController.js");

const challengesRoutes = new Router();

challengesRoutes.get("/", getDataController);
challengesRoutes.get("/:id", getDataByIdController);
challengesRoutes.post("/register", postDataController);
challengesRoutes.put("/edit/:id", putDataController);
challengesRoutes.delete("/:id", deleteDataController);

module.exports = challengesRoutes;