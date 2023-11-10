require("dotenv").config();
const express = require("express");
const Controller = require("../controllers/api.controllers");
const router = express.Router();

router.get("/", Controller.GET);
router.post("/", Controller.POST);

module.exports = router;
