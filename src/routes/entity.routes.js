const express = require("express");
const router = express.Router();
const entityController = require("../controllers/entity.controller");
const validateFilter = require("../middleware/validateFilter");

router.post("/filter", validateFilter, entityController.filterEntities);

module.exports = router;
