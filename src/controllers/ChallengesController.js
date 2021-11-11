const ChallengesMongo = require("../db_persistence/ChallengesMongo.js");
const challengesMongo = new ChallengesMongo();
const isAuth = true; // auth de pruebas
const { Validator } = require("node-input-validator");

async function getDataController(req, res) {
  challengesMongo
    .list()
    .then((challenges) => {
      res.json(challenges);
    })
    .catch(function (err) {
      throw err; // or handle it
    });
}

async function getDataByIdController(req, res) {
  const { id } = req.params;
  try {
    if (id === "") {
      return res.status(404).json({ msg: "product not found", error });
    }
    const prodById = await challengesMongo.listById(id).then((list) => {
      return list[0]._id;
    });

    if (!prodById) {
      return res.status(404).json({ msg: "product not found" });
    }
    return challengesMongo.listById(prodById).then((list) => {
      res.json(list);
    });
  } catch (error) {
    logger.error(error);
    res.json("product not found");
  }
}

async function postDataController(req, res) {
  if (isAuth) {
    const data = req.body;
    const v = new Validator(req.body, {
      challenge: "required|maxLength:50",
      entrepreneurshipId: "required",
      cathegory: "required|string",
    });

    v.check().then((matched) => {
      if (!matched) {
        res.status(422).send(v.errors);
      } else {
        challengesMongo.insert(data).then(() => {
          res.json(data);
        });
      }
    });
  }
}

async function putDataController(req, res) {
  if (isAuth) {
    const data = req.body;
    const { id } = req.params;
    const v = new Validator(req.body, {
      challenge: "required|maxLength:50",
      entrepreneurshipId: "required",
      cathegory: "required|string",
    });

    v.check().then((matched) => {
      if (!matched) {
        res.status(422).send(v.errors);
      } else {
        challengesMongo.updateById(id, data).then(() => {
          res.json(`product with id ${id} updated`);
        });
      }
    });
  }
}

async function deleteDataController(req, res) {
  if (isAuth) {
    const { id } = req.params;
    challengesMongo.deleteById(id).then(() => {
      res.json(`product with id ${id} deleted`);
    });
  } else {
    logger.warn("does not have permissions", req.url, req.method);
    res.send(
      `"error" : 'does not have permissions', "description": route = '${req.url}' method = '${req.method}' not authorized`
    );
  }
}

module.exports = {
  getDataController,
  getDataByIdController,
  postDataController,
  putDataController,
  deleteDataController,
};
