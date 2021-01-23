var models = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", async function (req, res) {
  try {
    const pet = await models.pet.findAll();
    res.json(pet);
  } catch (error) {
    models.sendError(res, 400);
  }
});

module.exports = router;
