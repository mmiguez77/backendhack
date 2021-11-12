const { Router } = require("express");
const {
    getDataController,
    getDataByIdController,
    postDataController,
    putDataController,
    deleteDataController
} = require("../controllers/ChallengesController.js");

const challengesRoutes = new Router();
const upload = require("../middlewares/multer.js");
const validate = require("../middlewares/auth.js"); 

challengesRoutes.get("/", getDataController);
challengesRoutes.get("/:id", getDataByIdController);
challengesRoutes.post("/register", validate, upload.single("logo"), postDataController);
challengesRoutes.put("/edit/:id", validate, putDataController);
challengesRoutes.delete("/:id",validate, deleteDataController);

module.exports = challengesRoutes;